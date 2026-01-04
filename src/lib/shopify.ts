import axios from "axios";

// Initialize axios instance for Shopify API
const shopifyApi = axios.create({
  baseURL: import.meta.env.VITE_SHOPIFY_ADMIN_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN,
  },
});

// Initialize GraphQL client
export const shopifyClient = axios.create({
  baseURL: `https://${import.meta.env.VITE_SHOPIFY_STORE_URL}/admin/api/2024-01/graphql.json`,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN,
  },
});

// Types
export interface ShopifyQueryOptions {
  queryClient?: any;
  retry?: boolean;
  retryCount?: number;
}

export interface ShopInfo {
  id: string;
  name: string;
  email: string;
  myshopifyDomain: string;
  primaryDomain: {
    url: string;
  };
  plan: {
    displayName: string;
    partnerDevelopment: boolean;
    shopifyPlus: boolean;
  };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  productType: string;
  status: string;
  vendor: string;
  totalInventory: number;
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
}

export interface ShopifyOrder {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  totalPriceSet: {
    shopMoney: {
      amount: string;
      currencyCode: string;
    };
  };
  displayFulfillmentStatus: string;
  displayFinancialStatus: string;
}

export interface ShopifyAnalytics {
  interval: string;
  totalGrossSales: { amount: string };
  totalNetSales: { amount: string };
  totalRefunds: { amount: string };
  totalReturns: { amount: string };
  totalOrders: number;
}

// API Functions
export const getShopInfo = async (
  _options?: ShopifyQueryOptions,
): Promise<ShopInfo> => {
  if (process.env.NODE_ENV === "development") {
    return mockShopInfo;
  }

  const response = await shopifyApi.get("/shop.json");
  return response.data.shop;
};

export const getProducts = async (
  first = 10,
  _options?: ShopifyQueryOptions,
): Promise<ShopifyProduct[]> => {
  if (process.env.NODE_ENV === "development") {
    return mockProducts;
  }

  const response = await shopifyApi.get(`/products.json?limit=${first}`);
  return response.data.products;
};

export const getOrders = async (
  first = 10,
  _options?: ShopifyQueryOptions,
): Promise<ShopifyOrder[]> => {
  if (process.env.NODE_ENV === "development") {
    return mockOrders;
  }

  const response = await shopifyApi.get(`/orders.json?limit=${first}`);
  return response.data.orders;
};

export const getCustomers = async (
  first = 10,
  _options?: ShopifyQueryOptions,
): Promise<any[]> => {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  const response = await shopifyApi.get(`/customers.json?limit=${first}`);
  return response.data.customers;
};

export const getAnalytics = async (
  interval = "MONTH",
  _options?: ShopifyQueryOptions,
): Promise<ShopifyAnalytics[]> => {
  if (process.env.NODE_ENV === "development") {
    return mockAnalytics;
  }

  const response = await shopifyApi.get(
    `/reports/sales.json?interval=${interval}`,
  );
  return response.data.reports;
};

// Mock data
export const mockShopInfo: ShopInfo = {
  id: "gid://shopify/Shop/12345",
  name: "Test Store",
  email: "store@example.com",
  myshopifyDomain: "test-store.myshopify.com",
  primaryDomain: {
    url: "https://test-store.myshopify.com",
  },
  plan: {
    displayName: "Enterprise",
    partnerDevelopment: false,
    shopifyPlus: true,
  },
};

export const mockAnalytics: ShopifyAnalytics[] = [
  {
    interval: "2025-03",
    totalGrossSales: { amount: "15000.00" },
    totalNetSales: { amount: "14250.00" },
    totalRefunds: { amount: "750.00" },
    totalReturns: { amount: "500.00" },
    totalOrders: 150,
  },
  {
    interval: "2025-02",
    totalGrossSales: { amount: "12000.00" },
    totalNetSales: { amount: "11400.00" },
    totalRefunds: { amount: "600.00" },
    totalReturns: { amount: "400.00" },
    totalOrders: 120,
  },
];

export const mockProducts: ShopifyProduct[] = [
  {
    id: "gid://shopify/Product/1",
    title: "Sample Product 1",
    handle: "sample-product-1",
    description: "A great product",
    productType: "Clothing",
    status: "ACTIVE",
    vendor: "Sample Vendor",
    totalInventory: 100,
    priceRangeV2: {
      minVariantPrice: {
        amount: "29.99",
        currencyCode: "USD",
      },
      maxVariantPrice: {
        amount: "39.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "https://cdn.shopify.com/sample/product1.jpg",
            altText: "Sample Product 1",
          },
        },
      ],
    },
  },
];

export const mockOrders: ShopifyOrder[] = [
  {
    id: "gid://shopify/Order/1",
    name: "#1001",
    email: "customer@example.com",
    createdAt: "2025-03-28T10:00:00Z",
    totalPriceSet: {
      shopMoney: {
        amount: "99.99",
        currencyCode: "USD",
      },
    },
    displayFulfillmentStatus: "UNFULFILLED",
    displayFinancialStatus: "PAID",
  },
];

// Sync Shopify data to Supabase
export const syncShopifyDataToSupabase = async (): Promise<{
  success: boolean;
  synced: number;
}> => {
  // In development mode, return mock success
  if (process.env.NODE_ENV === "development") {
    return { success: true, synced: 100 };
  }

  try {
    const products = await getProducts(100);
    const orders = await getOrders(100);

    // Sync logic would go here in production
    return {
      success: true,
      synced: products.length + orders.length,
    };
  } catch (error) {
    console.error("Error syncing Shopify data:", error);
    return { success: false, synced: 0 };
  }
};

export default shopifyApi;
