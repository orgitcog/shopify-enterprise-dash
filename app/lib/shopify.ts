import axios from 'axios';

const SHOPIFY_API_URL = process.env.VITE_SHOPIFY_ADMIN_API_URL || '';
const SHOPIFY_ACCESS_TOKEN = process.env.VITE_SHOPIFY_ACCESS_TOKEN || '';
const SHOPIFY_API_VERSION = '2024-01'; // Update this when new API versions are released

export interface ShopInfo {
  name: string;
  domain: string;
  planName: string;
  status: string;
  storeOwner: string;
  billingAddress: {
    address1: string;
    city: string;
    zip: string;
    country: string;
  };
  createdAt: string;
}

export interface AnalyticsData {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
}

export async function getShopInfo(): Promise<ShopInfo | null> {
  try {
    // If API credentials are not configured, return mock data
    if (!SHOPIFY_API_URL || !SHOPIFY_ACCESS_TOKEN || SHOPIFY_ACCESS_TOKEN === 'placeholder-token') {
      return getMockShopInfo();
    }

    const response = await axios.get(`${SHOPIFY_API_URL}/shop.json`, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    const shop = response.data.shop;
    return {
      name: shop.name,
      domain: shop.domain,
      planName: shop.plan_name,
      status: 'active',
      storeOwner: shop.shop_owner,
      billingAddress: {
        address1: shop.address1 || '',
        city: shop.city || '',
        zip: shop.zip || '',
        country: shop.country || '',
      },
      createdAt: shop.created_at,
    };
  } catch (error) {
    console.error("Error fetching Shopify store info:", error);
    return getMockShopInfo();
  }
}

function getMockShopInfo(): ShopInfo {
  return {
    name: "Your Shopify Store",
    domain: "example.myshopify.com",
    planName: "Basic",
    status: "active",
    storeOwner: "Store Owner",
    billingAddress: {
      address1: "123 Commerce St",
      city: "Shopify",
      zip: "12345",
      country: "US"
    },
    createdAt: new Date().toISOString()
  };
}

export async function getAnalytics(timeframe: string): Promise<AnalyticsData[]> {
  try {
    // If API credentials are not configured, return mock data
    if (!SHOPIFY_API_URL || !SHOPIFY_ACCESS_TOKEN || SHOPIFY_ACCESS_TOKEN === 'placeholder-token') {
      return getMockAnalytics();
    }

    // In a real implementation, you would fetch from Shopify Analytics API
    // For now, we'll return mock data as the Analytics API requires additional setup
    return getMockAnalytics();
  } catch (error) {
    console.error("Error fetching Shopify analytics:", error);
    return getMockAnalytics();
  }
}

function getMockAnalytics(): AnalyticsData[] {
  const currentDate = new Date();
  const data: AnalyticsData[] = [];
  
  // Generate some mock data points for the past 30 days
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - (30 - i));
    
    data.push({
      date: date.toISOString(),
      revenue: Math.floor(Math.random() * 2000) + 500,
      orders: Math.floor(Math.random() * 30) + 5,
      averageOrderValue: Math.floor(Math.random() * 100) + 50,
    });
  }
  
  return data;
}

export async function syncShopifyData(storeUrl: string, accessToken: string) {
  try {
    // Fetch orders, products, and customers from Shopify
    const ordersResponse = await axios.get(
      `https://${storeUrl}/admin/api/${SHOPIFY_API_VERSION}/orders.json`,
      {
        headers: {
          'X-Shopify-Access-Token': accessToken,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      success: true,
      orders: ordersResponse.data.orders,
      syncedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error syncing Shopify data:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      syncedAt: new Date().toISOString(),
    };
  }
}