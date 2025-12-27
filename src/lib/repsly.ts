import axios from "axios";

// Repsly API base URL and types
const REPSLY_API_BASE = "https://api.repsly.com/v3";

export interface RepslyCredentials {
  apiKey: string;
  username: string;
  password: string;
}

export interface RepslyField {
  id: string;
  name: string;
  type: string;
  options?: string[];
}

export interface RepslyRepresentative {
  id: string;
  name: string;
  email: string;
  phone?: string;
  managerId?: string;
  region?: string;
  status: "active" | "inactive";
  photo?: string;
  lastActive?: string;
}

export interface RepslyClient {
  id: string;
  name: string;
  address: string;
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
  phone?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  status: "active" | "inactive";
  lastVisit?: string;
}

export interface RepslyVisit {
  id: string;
  repId: string;
  repName: string;
  clientId: string;
  clientName: string;
  checkInTime: string;
  checkOutTime?: string;
  duration?: number;
  status: "planned" | "in-progress" | "completed" | "cancelled";
  note?: string;
  photos?: string[];
  formResponses?: Record<string, any>[];
}

export interface RepslyForm {
  id: string;
  name: string;
  fields: RepslyField[];
  createdAt: string;
  updatedAt: string;
}

export interface RepslyInventoryItem {
  id: string;
  clientId: string;
  productId: string;
  productName: string;
  quantity: number;
  price?: number;
  lastUpdated: string;
  repId: string;
}

class RepslyAPI {
  private apiKey: string = "";
  private username: string = "";
  private password: string = "";
  private token: string = "";
  private tokenExpires: Date | null = null;

  constructor() {
    // Check for credentials in local storage or environment
    const storedCredentials = localStorage.getItem("repsly_credentials");
    if (storedCredentials) {
      const { apiKey, username, password } = JSON.parse(storedCredentials);
      this.apiKey = apiKey;
      this.username = username;
      this.password = password;
    }
  }

  public setCredentials(credentials: RepslyCredentials): void {
    this.apiKey = credentials.apiKey;
    this.username = credentials.username;
    this.password = credentials.password;
    localStorage.setItem("repsly_credentials", JSON.stringify(credentials));
    this.token = ""; // Reset token to force re-authentication
    this.tokenExpires = null;
  }

  public clearCredentials(): void {
    this.apiKey = "";
    this.username = "";
    this.password = "";
    this.token = "";
    this.tokenExpires = null;
    localStorage.removeItem("repsly_credentials");
  }

  public hasCredentials(): boolean {
    return !!(this.apiKey && this.username && this.password);
  }

  private async authenticate(): Promise<string> {
    // If token exists and is not expired, return it
    if (this.token && this.tokenExpires && new Date() < this.tokenExpires) {
      return this.token;
    }

    try {
      const response = await axios.post(
        `${REPSLY_API_BASE}/auth/login`,
        {
          username: this.username,
          password: this.password,
        },
        {
          headers: {
            "X-Api-Key": this.apiKey,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data?.token) {
        this.token = response.data.token;
        // Set token expiry (usually 24 hours)
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 24);
        this.tokenExpires = expiry;
        return this.token;
      } else {
        throw new Error("Authentication failed: No token received");
      }
    } catch (error) {
      console.error("Repsly authentication error:", error);
      throw new Error("Authentication failed");
    }
  }

  private async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    data?: any,
  ): Promise<T> {
    if (!this.hasCredentials()) {
      throw new Error("Repsly credentials not set");
    }

    try {
      const token = await this.authenticate();
      const url = `${REPSLY_API_BASE}/${endpoint}`;

      const response = await axios({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Api-Key": this.apiKey,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(`Repsly API error (${method} ${endpoint}):`, error);

      if (error.response?.status === 401) {
        // Token expired, clear and try again
        this.token = "";
        this.tokenExpires = null;
        return this.request(method, endpoint, data);
      }

      throw new Error(error.response?.data?.message || "API request failed");
    }
  }

  // Representatives (Field Team) methods
  public async getRepresentatives(): Promise<RepslyRepresentative[]> {
    return this.request<RepslyRepresentative[]>("GET", "representatives");
  }

  public async getRepresentative(id: string): Promise<RepslyRepresentative> {
    return this.request<RepslyRepresentative>("GET", `representatives/${id}`);
  }

  // Clients (Stores) methods
  public async getClients(
    limit: number = 100,
    offset: number = 0,
    search?: string,
  ): Promise<RepslyClient[]> {
    let endpoint = `clients?limit=${limit}&offset=${offset}`;
    if (search) {
      endpoint += `&search=${encodeURIComponent(search)}`;
    }
    return this.request<RepslyClient[]>("GET", endpoint);
  }

  public async getClient(id: string): Promise<RepslyClient> {
    return this.request<RepslyClient>("GET", `clients/${id}`);
  }

  // Visits methods
  public async getVisits(
    startDate?: string,
    endDate?: string,
    repId?: string,
    clientId?: string,
    status?: string,
    limit: number = 100,
    offset: number = 0,
  ): Promise<RepslyVisit[]> {
    let endpoint = `visits?limit=${limit}&offset=${offset}`;

    if (startDate) endpoint += `&startDate=${startDate}`;
    if (endDate) endpoint += `&endDate=${endDate}`;
    if (repId) endpoint += `&repId=${repId}`;
    if (clientId) endpoint += `&clientId=${clientId}`;
    if (status) endpoint += `&status=${status}`;

    return this.request<RepslyVisit[]>("GET", endpoint);
  }

  public async getVisit(id: string): Promise<RepslyVisit> {
    return this.request<RepslyVisit>("GET", `visits/${id}`);
  }

  // Forms methods
  public async getForms(): Promise<RepslyForm[]> {
    return this.request<RepslyForm[]>("GET", "forms");
  }

  public async getForm(id: string): Promise<RepslyForm> {
    return this.request<RepslyForm>("GET", `forms/${id}`);
  }

  // Inventory methods
  public async getInventory(
    clientId?: string,
    productId?: string,
  ): Promise<RepslyInventoryItem[]> {
    let endpoint = "inventory";
    const params: string[] = [];

    if (clientId) params.push(`clientId=${clientId}`);
    if (productId) params.push(`productId=${productId}`);

    if (params.length > 0) {
      endpoint += `?${params.join("&")}`;
    }

    return this.request<RepslyInventoryItem[]>("GET", endpoint);
  }

  // Analytics and reporting
  public async getVisitStats(
    startDate?: string,
    endDate?: string,
    repId?: string,
  ): Promise<any> {
    let endpoint = "reports/visits";
    const params: string[] = [];

    if (startDate) params.push(`startDate=${startDate}`);
    if (endDate) params.push(`endDate=${endDate}`);
    if (repId) params.push(`repId=${repId}`);

    if (params.length > 0) {
      endpoint += `?${params.join("&")}`;
    }

    return this.request<any>("GET", endpoint);
  }

  public async getProductPerformance(
    startDate?: string,
    endDate?: string,
  ): Promise<any> {
    let endpoint = "reports/products";
    const params: string[] = [];

    if (startDate) params.push(`startDate=${startDate}`);
    if (endDate) params.push(`endDate=${endDate}`);

    if (params.length > 0) {
      endpoint += `?${params.join("&")}`;
    }

    return this.request<any>("GET", endpoint);
  }
}

// Create singleton instance
export const repslyApi = new RepslyAPI();

// Mock data functions for development purposes
export const generateMockRepresentatives = (
  count: number = 10,
): RepslyRepresentative[] => {
  const statuses = ["active", "inactive"] as const;
  const regions = ["North", "South", "East", "West", "Central"];

  return Array.from({ length: count }).map((_, index) => ({
    id: `rep-${index + 1}`,
    name: `Rep ${index + 1}`,
    email: `rep${index + 1}@example.com`,
    phone: `+1 (555) ${100 + index}-${4000 + index}`,
    managerId:
      index % 5 === 0 ? undefined : `rep-${Math.floor(index / 5) * 5 + 1}`,
    region: regions[index % regions.length],
    status: statuses[index % 5 === 0 ? 1 : 0],
    photo: `https://i.pravatar.cc/150?u=rep-${index + 1}`,
    lastActive: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  }));
};

export const generateMockClients = (count: number = 20): RepslyClient[] => {
  const statuses = ["active", "inactive"] as const;
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  const states = ["NY", "CA", "IL", "TX", "AZ", "PA", "TX", "CA", "TX", "CA"];

  return Array.from({ length: count }).map((_, index) => {
    const cityIndex = index % cities.length;
    return {
      id: `client-${index + 1}`,
      name: `Store ${index + 1}`,
      address: `${1000 + index} Main St`,
      city: cities[cityIndex],
      state: states[cityIndex],
      zipCode: `${10000 + index}`,
      country: "USA",
      phone: `+1 (555) ${200 + index}-${5000 + index}`,
      email: `store${index + 1}@example.com`,
      latitude: 40.7128 + (Math.random() - 0.5) * 5,
      longitude: -74.006 + (Math.random() - 0.5) * 5,
      status: statuses[index % 7 === 0 ? 1 : 0],
      lastVisit:
        index % 3 === 0
          ? undefined
          : new Date(
              Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
            ).toISOString(),
    };
  });
};

export const generateMockVisits = (
  reps: RepslyRepresentative[],
  clients: RepslyClient[],
  count: number = 50,
): RepslyVisit[] => {
  const statuses = [
    "planned",
    "in-progress",
    "completed",
    "cancelled",
  ] as const;

  return Array.from({ length: count }).map((_, index) => {
    const rep = reps[index % reps.length];
    const client = clients[index % clients.length];
    const status = statuses[index % statuses.length];
    const checkInTime = new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
    ).toISOString();
    let checkOutTime = undefined;
    let duration = undefined;

    if (status === "completed") {
      const checkInDate = new Date(checkInTime);
      const durationMs =
        Math.floor(Math.random() * 2 * 60 * 60 * 1000) + 15 * 60 * 1000; // 15 min to 2 hours
      const checkOutDate = new Date(checkInDate.getTime() + durationMs);
      checkOutTime = checkOutDate.toISOString();
      duration = Math.floor(durationMs / (60 * 1000)); // in minutes
    }

    return {
      id: `visit-${index + 1}`,
      repId: rep.id,
      repName: rep.name,
      clientId: client.id,
      clientName: client.name,
      checkInTime,
      checkOutTime,
      duration,
      status,
      note:
        status === "cancelled"
          ? "Store was closed"
          : status === "completed"
            ? "Visit completed successfully. All tasks done."
            : undefined,
      photos:
        status === "completed"
          ? [
              `https://picsum.photos/seed/visit-${index}-1/200/300`,
              `https://picsum.photos/seed/visit-${index}-2/200/300`,
            ]
          : undefined,
      formResponses:
        status === "completed"
          ? [
              {
                formId: "form-1",
                responses: { "Field 1": "Yes", "Field 2": "Fully stocked" },
              },
            ]
          : undefined,
    };
  });
};

export const generateMockInventory = (
  clients: RepslyClient[],
  reps: RepslyRepresentative[],
  count: number = 100,
): RepslyInventoryItem[] => {
  const products = [
    { id: "prod-1", name: "Premium T-Shirt" },
    { id: "prod-2", name: "Designer Jeans" },
    { id: "prod-3", name: "Leather Jacket" },
    { id: "prod-4", name: "Running Shoes" },
    { id: "prod-5", name: "Winter Coat" },
    { id: "prod-6", name: "Summer Dress" },
    { id: "prod-7", name: "Casual Shirt" },
    { id: "prod-8", name: "Formal Suit" },
    { id: "prod-9", name: "Wool Sweater" },
    { id: "prod-10", name: "Athletic Shorts" },
  ];

  return Array.from({ length: count }).map((_, index) => {
    const client = clients[index % clients.length];
    const product = products[index % products.length];
    const rep = reps[index % reps.length];

    return {
      id: `inv-${index + 1}`,
      clientId: client.id,
      productId: product.id,
      productName: product.name,
      quantity: Math.floor(Math.random() * 50) + 1,
      price: Math.round((Math.random() * 100 + 10) * 100) / 100, // $10-$110 with cents
      lastUpdated: new Date(
        Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      repId: rep.id,
    };
  });
};

// Simulated data for development purposes
let mockReps: RepslyRepresentative[] | null = null;
let mockClients: RepslyClient[] | null = null;
let mockVisits: RepslyVisit[] | null = null;
let mockInventory: RepslyInventoryItem[] | null = null;

export const getMockData = () => {
  if (!mockReps) mockReps = generateMockRepresentatives(10);
  if (!mockClients) mockClients = generateMockClients(20);
  if (!mockVisits) mockVisits = generateMockVisits(mockReps, mockClients, 50);
  if (!mockInventory)
    mockInventory = generateMockInventory(mockClients, mockReps, 100);

  return { mockReps, mockClients, mockVisits, mockInventory };
};

// Function to connect Repsly with Shopify data
export const syncRepslyWithShopify = async () => {
  try {
    console.log("Syncing Repsly data with Shopify...");
    // In a real implementation, this would reconcile Shopify product data with Repsly
    return { success: true, message: "Sync completed successfully" };
  } catch (error) {
    console.error("Error syncing data:", error);
    return { success: false, message: "Error syncing data" };
  }
};
