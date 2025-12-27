import axios from "axios";

// AppDirect API configuration
const API_BASE_URL =
  import.meta.env.VITE_APPDIRECT_API_URL ||
  "https://marketplace.appdirect.com/api";
const API_KEY = import.meta.env.VITE_APPDIRECT_API_KEY || "";
const API_SECRET = import.meta.env.VITE_APPDIRECT_API_SECRET || "";

// Initialize axios instance for AppDirect API
const appdirectApi = axios.create({
  baseURL: API_BASE_URL,
  auth: {
    username: API_KEY,
    password: API_SECRET,
  },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Types for AppDirect entities
export interface AppDirectApplication {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  status: string;
  category: string;
  provider: {
    id: string;
    name: string;
  };
  pricing: {
    edition: string;
    model: string;
    price: number;
    currency: string;
    trial: {
      duration: number;
      unit: string;
    };
  };
}

export interface AppDirectSubscription {
  id: string;
  account: {
    accountIdentifier: string;
    status: string;
  };
  marketplace: {
    partner: string;
    baseUrl: string;
  };
  creator: {
    firstName: string;
    lastName: string;
    email: string;
    openId: string;
    uuid: string;
  };
  items: Array<{
    quantity: number;
    unit: string;
    product: {
      id: string;
      name: string;
    };
  }>;
  order: {
    editionCode: string;
    pricingDuration: string;
    addonOfferings: any[];
  };
  notice?: string;
  status: string;
  startDate: string;
  endDate?: string;
  modified: string;
}

export interface AppDirectUser {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  openId: string;
  attributes: Record<string, string>;
  roles: string[];
  locale: string;
  status: string;
}

export interface AppDirectEvent {
  id: string;
  type: string;
  marketplace: {
    partner: string;
    baseUrl: string;
  };
  payload: any;
  returnUrl: string;
  status: string;
  createdAt: string;
}

// API functions

// Marketplace Applications
export const getApplications = async (): Promise<AppDirectApplication[]> => {
  try {
    const response = await appdirectApi.get(
      "/v1/admin/marketplace/applications",
    );
    return response.data.applications || [];
  } catch (error) {
    console.error("Error fetching AppDirect applications:", error);
    return [];
  }
};

export const getApplication = async (
  id: string,
): Promise<AppDirectApplication | null> => {
  try {
    const response = await appdirectApi.get(
      `/v1/admin/marketplace/applications/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching AppDirect application ${id}:`, error);
    return null;
  }
};

// Subscriptions
export const getSubscriptions = async (): Promise<AppDirectSubscription[]> => {
  try {
    const response = await appdirectApi.get("/v1/admin/subscriptions");
    return response.data.subscriptions || [];
  } catch (error) {
    console.error("Error fetching AppDirect subscriptions:", error);
    return [];
  }
};

export const getSubscription = async (
  id: string,
): Promise<AppDirectSubscription | null> => {
  try {
    const response = await appdirectApi.get(`/v1/admin/subscriptions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching AppDirect subscription ${id}:`, error);
    return null;
  }
};

export const createSubscription = async (
  applicationId: string,
  plan: string,
  account: any,
): Promise<any> => {
  try {
    const response = await appdirectApi.post("/v1/admin/subscriptions", {
      applicationId,
      editionCode: plan,
      account,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating AppDirect subscription:", error);
    throw error;
  }
};

export const cancelSubscription = async (
  id: string,
  reason: string,
): Promise<any> => {
  try {
    const response = await appdirectApi.delete(
      `/v1/admin/subscriptions/${id}`,
      {
        data: {
          cancellationReason: reason,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`Error cancelling AppDirect subscription ${id}:`, error);
    throw error;
  }
};

// Users
export const getUsers = async (): Promise<AppDirectUser[]> => {
  try {
    const response = await appdirectApi.get("/v1/admin/users");
    return response.data.users || [];
  } catch (error) {
    console.error("Error fetching AppDirect users:", error);
    return [];
  }
};

export const getUser = async (id: string): Promise<AppDirectUser | null> => {
  try {
    const response = await appdirectApi.get(`/v1/admin/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching AppDirect user ${id}:`, error);
    return null;
  }
};

export const createUser = async (
  userData: Partial<AppDirectUser>,
): Promise<AppDirectUser | null> => {
  try {
    const response = await appdirectApi.post("/v1/admin/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating AppDirect user:", error);
    return null;
  }
};

// Events
export const getEvents = async (): Promise<AppDirectEvent[]> => {
  try {
    const response = await appdirectApi.get("/v1/admin/events");
    return response.data.events || [];
  } catch (error) {
    console.error("Error fetching AppDirect events:", error);
    return [];
  }
};

export const getEvent = async (id: string): Promise<AppDirectEvent | null> => {
  try {
    const response = await appdirectApi.get(`/v1/admin/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching AppDirect event ${id}:`, error);
    return null;
  }
};

// Mock data for development (when API is not available)
export const getMockApplications = (): AppDirectApplication[] => {
  return [
    {
      id: "app-1",
      name: "Inventory Manager Pro",
      description: "Advanced inventory management for Shopify stores",
      logo: "https://i.imgur.com/QpQpT5P.png",
      website: "https://example.com/inventory-pro",
      status: "ACTIVE",
      category: "Inventory Management",
      provider: {
        id: "provider-1",
        name: "Inventory Solutions Ltd.",
      },
      pricing: {
        edition: "PREMIUM",
        model: "SUBSCRIPTION",
        price: 49.99,
        currency: "USD",
        trial: {
          duration: 14,
          unit: "DAYS",
        },
      },
    },
    {
      id: "app-2",
      name: "Customer Insights",
      description: "Advanced analytics and customer behavior insights",
      logo: "https://i.imgur.com/8jNYUEF.png",
      website: "https://example.com/customer-insights",
      status: "ACTIVE",
      category: "Analytics",
      provider: {
        id: "provider-2",
        name: "Data Analytics Co.",
      },
      pricing: {
        edition: "BUSINESS",
        model: "SUBSCRIPTION",
        price: 79.99,
        currency: "USD",
        trial: {
          duration: 30,
          unit: "DAYS",
        },
      },
    },
    {
      id: "app-3",
      name: "Easy Shipping",
      description: "Simplified shipping solutions for e-commerce",
      logo: "https://i.imgur.com/TQvqWPf.png",
      website: "https://example.com/easy-shipping",
      status: "ACTIVE",
      category: "Shipping",
      provider: {
        id: "provider-3",
        name: "Logistics Solutions Inc.",
      },
      pricing: {
        edition: "STANDARD",
        model: "SUBSCRIPTION",
        price: 29.99,
        currency: "USD",
        trial: {
          duration: 14,
          unit: "DAYS",
        },
      },
    },
    {
      id: "app-4",
      name: "Marketing Automation",
      description: "Automated email marketing and campaign management",
      logo: "https://i.imgur.com/VKrz3EP.png",
      website: "https://example.com/marketing-automation",
      status: "ACTIVE",
      category: "Marketing",
      provider: {
        id: "provider-4",
        name: "Digital Marketing Group",
      },
      pricing: {
        edition: "GROWTH",
        model: "SUBSCRIPTION",
        price: 59.99,
        currency: "USD",
        trial: {
          duration: 21,
          unit: "DAYS",
        },
      },
    },
    {
      id: "app-5",
      name: "Social Media Manager",
      description: "Manage all your social media accounts in one place",
      logo: "https://i.imgur.com/PFq6Xf6.png",
      website: "https://example.com/social-media-manager",
      status: "ACTIVE",
      category: "Social Media",
      provider: {
        id: "provider-5",
        name: "Social Connect Ltd.",
      },
      pricing: {
        edition: "PROFESSIONAL",
        model: "SUBSCRIPTION",
        price: 39.99,
        currency: "USD",
        trial: {
          duration: 14,
          unit: "DAYS",
        },
      },
    },
  ];
};

export const getMockSubscriptions = (): AppDirectSubscription[] => {
  return [
    {
      id: "sub-1",
      account: {
        accountIdentifier: "account-12345",
        status: "ACTIVE",
      },
      marketplace: {
        partner: "Shopify",
        baseUrl: "https://marketplace.appdirect.com",
      },
      creator: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        openId: "user-12345",
        uuid: "uuid-12345",
      },
      items: [
        {
          quantity: 1,
          unit: "USERS",
          product: {
            id: "app-1",
            name: "Inventory Manager Pro",
          },
        },
      ],
      order: {
        editionCode: "PREMIUM",
        pricingDuration: "MONTHLY",
        addonOfferings: [],
      },
      status: "ACTIVE",
      startDate: "2025-01-15T00:00:00Z",
      modified: "2025-01-15T00:00:00Z",
    },
    {
      id: "sub-2",
      account: {
        accountIdentifier: "account-12345",
        status: "ACTIVE",
      },
      marketplace: {
        partner: "Shopify",
        baseUrl: "https://marketplace.appdirect.com",
      },
      creator: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        openId: "user-12345",
        uuid: "uuid-12345",
      },
      items: [
        {
          quantity: 1,
          unit: "USERS",
          product: {
            id: "app-2",
            name: "Customer Insights",
          },
        },
      ],
      order: {
        editionCode: "BUSINESS",
        pricingDuration: "MONTHLY",
        addonOfferings: [],
      },
      status: "ACTIVE",
      startDate: "2025-02-10T00:00:00Z",
      modified: "2025-02-10T00:00:00Z",
    },
    {
      id: "sub-3",
      account: {
        accountIdentifier: "account-12345",
        status: "ACTIVE",
      },
      marketplace: {
        partner: "Shopify",
        baseUrl: "https://marketplace.appdirect.com",
      },
      creator: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        openId: "user-12345",
        uuid: "uuid-12345",
      },
      items: [
        {
          quantity: 1,
          unit: "USERS",
          product: {
            id: "app-4",
            name: "Marketing Automation",
          },
        },
      ],
      order: {
        editionCode: "GROWTH",
        pricingDuration: "ANNUAL",
        addonOfferings: [],
      },
      status: "ACTIVE",
      startDate: "2025-03-01T00:00:00Z",
      modified: "2025-03-01T00:00:00Z",
    },
    {
      id: "sub-4",
      account: {
        accountIdentifier: "account-12345",
        status: "CANCELLED",
      },
      marketplace: {
        partner: "Shopify",
        baseUrl: "https://marketplace.appdirect.com",
      },
      creator: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        openId: "user-12345",
        uuid: "uuid-12345",
      },
      items: [
        {
          quantity: 1,
          unit: "USERS",
          product: {
            id: "app-3",
            name: "Easy Shipping",
          },
        },
      ],
      order: {
        editionCode: "STANDARD",
        pricingDuration: "MONTHLY",
        addonOfferings: [],
      },
      notice: "Plan no longer required",
      status: "CANCELLED",
      startDate: "2024-12-01T00:00:00Z",
      endDate: "2025-02-28T00:00:00Z",
      modified: "2025-02-28T00:00:00Z",
    },
  ];
};
