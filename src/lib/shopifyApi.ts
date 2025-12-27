import axios from "axios";
import { supabase } from "./supabase";

// Initialize GraphQL client
const shopifyClient = axios.create({
  baseURL: `https://${import.meta.env.VITE_SHOPIFY_STORE_URL}/admin/api/2024-01/graphql.json`,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN,
  },
});

// Types for Shopify responses
export interface ShopifyStore {
  id: string;
  name: string;
  email: string;
  myshopifyDomain: string;
  domain: string;
  plan: {
    displayName: string;
    shopifyPlus: boolean;
  };
}

export interface ShopifyOrder {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  totalPrice: string;
  fulfillmentStatus: string;
  financialStatus: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  status: string;
  totalInventory: number;
  price: string;
  image: string;
}

export interface ShopifyAnalytics {
  interval: string;
  totalGrossSales: { amount: string };
  totalNetSales: { amount: string };
  totalRefunds: { amount: string };
  totalReturns: { amount: string };
  totalOrders: number;
}

// Connect to a Shopify store and authenticate
export const connectToShopify = async (
  shopDomain: string,
  accessToken: string,
) => {
  try {
    // Validate the connection by making a simple query
    const { data, errors } = await shopifyClient.request({
      query: `
        query GetShopInfo {
          shop {
            id
            name
          }
        }
      `,
    });

    if (errors) {
      console.error("Error connecting to Shopify:", errors);
      return { success: false, error: errors[0].message };
    }

    // Store the connection in Supabase
    const { error: storeError } = await supabase
      .from("shopify_connections")
      .insert([
        {
          shop_domain: shopDomain,
          access_token: accessToken,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          store_name: data.shop.name,
          store_id: data.shop.id,
          status: "active",
          created_at: new Date().toISOString(),
          last_sync: new Date().toISOString(),
        },
      ]);

    if (storeError) {
      console.error("Error storing Shopify connection:", storeError);
      return { success: false, error: storeError.message };
    }

    return { success: true, data: data.shop };
  } catch (error) {
    console.error("Error in connectToShopify:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

// Get store information
export const getShopifyStoreInfo = async (): Promise<ShopifyStore | null> => {
  try {
    const { data, errors } = await shopifyClient.request({
      query: `
        query GetShopInfo {
          shop {
            id
            name
            email
            myshopifyDomain
            primaryDomain {
              url
            }
            plan {
              displayName
              partnerDevelopment
              shopifyPlus
            }
          }
        }
      `,
    });

    if (errors) {
      console.error("Error fetching shop info:", errors);
      return null;
    }

    return {
      id: data.shop.id,
      name: data.shop.name,
      email: data.shop.email,
      myshopifyDomain: data.shop.myshopifyDomain,
      domain: data.shop.primaryDomain.url,
      plan: {
        displayName: data.shop.plan.displayName,
        shopifyPlus: data.shop.plan.shopifyPlus,
      },
    };
  } catch (error) {
    console.error("Error in getShopifyStoreInfo:", error);
    return null;
  }
};

// Get orders
export const getShopifyOrders = async (limit = 10): Promise<ShopifyOrder[]> => {
  try {
    const { data, errors } = await shopifyClient.request({
      query: `
        query GetOrders($first: Int!) {
          orders(first: $first) {
            edges {
              node {
                id
                name
                email
                createdAt
                totalPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                displayFulfillmentStatus
                displayFinancialStatus
              }
            }
          }
        }
      `,
      variables: { first: limit },
    });

    if (errors) {
      console.error("Error fetching orders:", errors);
      return [];
    }

    return data.orders.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
      email: edge.node.email,
      createdAt: edge.node.createdAt,
      totalPrice: edge.node.totalPriceSet.shopMoney.amount,
      fulfillmentStatus: edge.node.displayFulfillmentStatus,
      financialStatus: edge.node.displayFinancialStatus,
    }));
  } catch (error) {
    console.error("Error in getShopifyOrders:", error);
    return [];
  }
};

// Get products
export const getShopifyProducts = async (
  limit = 10,
): Promise<ShopifyProduct[]> => {
  try {
    const { data, errors } = await shopifyClient.request({
      query: `
        query GetProducts($first: Int!) {
          products(first: $first) {
            edges {
              node {
                id
                title
                handle
                status
                totalInventory
                priceRangeV2 {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { first: limit },
    });

    if (errors) {
      console.error("Error fetching products:", errors);
      return [];
    }

    return data.products.edges.map((edge: any) => {
      const images = edge.node.images.edges;
      const imageUrl = images.length > 0 ? images[0].node.url : "";

      return {
        id: edge.node.id,
        title: edge.node.title,
        handle: edge.node.handle,
        status: edge.node.status,
        totalInventory: edge.node.totalInventory,
        price: edge.node.priceRangeV2.minVariantPrice.amount,
        image: imageUrl,
      };
    });
  } catch (error) {
    console.error("Error in getShopifyProducts:", error);
    return [];
  }
};

// Get analytics data
export const getShopifyAnalytics = async (
  interval = "MONTH",
): Promise<ShopifyAnalytics[]> => {
  try {
    const { data, errors } = await shopifyClient.request({
      query: `
        query GetAnalytics($interval: ReportingIntervalEnum!) {
          shopifyAnalytics {
            sales(first: 12, interval: $interval) {
              edges {
                node {
                  interval
                  totalGrossSales {
                    amount
                  }
                  totalNetSales {
                    amount
                  }
                  totalRefunds {
                    amount
                  }
                  totalReturns {
                    amount
                  }
                  totalOrders
                }
              }
            }
          }
        }
      `,
      variables: { interval },
    });

    if (errors) {
      console.error("Error fetching analytics:", errors);
      return [];
    }

    return data.shopifyAnalytics.sales.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error in getShopifyAnalytics:", error);
    return [];
  }
};

// Sync Shopify data to Supabase
export const syncShopifyData = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    // 1. Get store info
    const storeInfo = await getShopifyStoreInfo();
    if (!storeInfo) {
      return { success: false, message: "Failed to get store information" };
    }

    // 2. Get orders
    const orders = await getShopifyOrders(100);

    // 3. Get products
    const products = await getShopifyProducts(100);

    // 4. Calculate metrics
    const totalRevenue = orders.reduce(
      (sum, order) => sum + parseFloat(order.totalPrice),
      0,
    );
    const totalOrders = orders.length;

    // 5. Update store info in Supabase
    const { error: updateError } = await supabase.from("stores").upsert(
      {
        name: storeInfo.name,
        url: storeInfo.myshopifyDomain,
        revenue: totalRevenue,
        orders: totalOrders,
        status: "active",
        last_sync: new Date().toISOString(),
      },
      {
        onConflict: "url",
      },
    );

    if (updateError) {
      console.error("Error updating store data:", updateError);
      return { success: false, message: "Failed to update store data" };
    }

    // 6. Store order summary
    const { error: ordersError } = await supabase.from("order_summary").insert({
      total_orders: totalOrders,
      total_revenue: totalRevenue,
      sync_date: new Date().toISOString(),
      shop_domain: storeInfo.myshopifyDomain,
    });

    if (ordersError) {
      console.error("Error storing order summary:", ordersError);
    }

    return {
      success: true,
      message: `Successfully synced ${orders.length} orders and ${products.length} products`,
    };
  } catch (error) {
    console.error("Error in syncShopifyData:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error during sync",
    };
  }
};

export default shopifyClient;
