import axios, { AxiosInstance } from "axios";

// Partner API Configuration
const PARTNER_API_VERSION = "2026-01";

export interface PartnerApiConfig {
  organizationId: string;
  accessToken: string;
}

export interface PartnerTransaction {
  id: string;
  createdAt: string;
  shopId?: string;
  appId?: string;
  myshopifyDomain?: string;
}

export interface PartnerApp {
  id: string;
  name: string;
  apiKey: string;
}

export interface AppEvent {
  type: string;
  occurredAt: string;
  shop?: {
    id: string;
    name: string;
    myshopifyDomain: string;
  };
}

export interface AppEventConnection {
  edges: Array<{
    node: AppEvent;
    cursor: string;
  }>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface TransactionConnection {
  edges: Array<{
    node: PartnerTransaction;
    cursor: string;
  }>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface PartnerApiResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
    extensions?: Record<string, unknown>;
  }>;
}

/**
 * Shopify Partner API Client
 * Provides access to Partner Dashboard data including apps, transactions, and events
 */
export class PartnerApiClient {
  private client: AxiosInstance;
  private organizationId: string;

  constructor(config: PartnerApiConfig) {
    this.organizationId = config.organizationId;
    this.client = axios.create({
      baseURL: `https://partners.shopify.com/${config.organizationId}/api/${PARTNER_API_VERSION}/graphql.json`,
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": config.accessToken,
      },
    });
  }

  /**
   * Execute a GraphQL query against the Partner API
   */
  async query<T>(query: string, variables?: Record<string, unknown>): Promise<PartnerApiResponse<T>> {
    try {
      const response = await this.client.post("", {
        query,
        variables,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          errors: [
            {
              message: error.response?.data?.errors?.[0]?.message || error.message,
              extensions: { code: error.response?.status?.toString() || "NETWORK_ERROR" },
            },
          ],
        };
      }
      throw error;
    }
  }

  /**
   * Get available API versions
   */
  async getApiVersions(): Promise<Array<{ handle: string; displayName: string; supported: boolean }>> {
    const result = await this.query<{
      publicApiVersions: Array<{ handle: string; displayName: string; supported: boolean }>;
    }>(`
      query GetApiVersions {
        publicApiVersions {
          handle
          displayName
          supported
        }
      }
    `);

    return result.data?.publicApiVersions || [];
  }

  /**
   * Get app by ID
   */
  async getApp(appId: string): Promise<PartnerApp | null> {
    const result = await this.query<{ app: PartnerApp }>(`
      query GetApp($id: ID!) {
        app(id: $id) {
          id
          name
          apiKey
        }
      }
    `, { id: appId });

    if (result.errors) {
      console.error("Error fetching app:", result.errors);
      return null;
    }

    return result.data?.app || null;
  }

  /**
   * Get app events (installs, uninstalls, charges, etc.)
   */
  async getAppEvents(appId: string, first = 50): Promise<AppEventConnection | null> {
    const result = await this.query<{ app: { events: AppEventConnection } }>(`
      query GetAppEvents($id: ID!, $first: Int!) {
        app(id: $id) {
          events(first: $first) {
            edges {
              node {
                type
                occurredAt
                ... on AppSubscriptionChargeEvent {
                  shop {
                    id
                    name
                    myshopifyDomain
                  }
                }
                ... on AppInstallEvent {
                  shop {
                    id
                    name
                    myshopifyDomain
                  }
                }
                ... on AppUninstallEvent {
                  shop {
                    id
                    name
                    myshopifyDomain
                  }
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    `, { id: appId, first });

    if (result.errors) {
      console.error("Error fetching app events:", result.errors);
      return null;
    }

    return result.data?.app?.events || null;
  }

  /**
   * Get transactions with optional filters
   */
  async getTransactions(options: {
    first?: number;
    after?: string;
    appId?: string;
    shopId?: string;
    myshopifyDomain?: string;
    createdAtMin?: string;
    createdAtMax?: string;
    types?: string[];
  } = {}): Promise<TransactionConnection | null> {
    const { first = 50, after, appId, shopId, myshopifyDomain, createdAtMin, createdAtMax, types } = options;

    const result = await this.query<{ transactions: TransactionConnection }>(`
      query GetTransactions(
        $first: Int
        $after: String
        $appId: ID
        $shopId: ID
        $myshopifyDomain: String
        $createdAtMin: DateTime
        $createdAtMax: DateTime
        $types: [TransactionType!]
      ) {
        transactions(
          first: $first
          after: $after
          appId: $appId
          shopId: $shopId
          myshopifyDomain: $myshopifyDomain
          createdAtMin: $createdAtMin
          createdAtMax: $createdAtMax
          types: $types
        ) {
          edges {
            node {
              id
              createdAt
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `, { first, after, appId, shopId, myshopifyDomain, createdAtMin, createdAtMax, types });

    if (result.errors) {
      console.error("Error fetching transactions:", result.errors);
      return null;
    }

    return result.data?.transactions || null;
  }

  /**
   * Get transaction by ID
   */
  async getTransaction(transactionId: string): Promise<PartnerTransaction | null> {
    const result = await this.query<{ transaction: PartnerTransaction }>(`
      query GetTransaction($id: ID!) {
        transaction(id: $id) {
          id
          createdAt
        }
      }
    `, { id: transactionId });

    if (result.errors) {
      console.error("Error fetching transaction:", result.errors);
      return null;
    }

    return result.data?.transaction || null;
  }

  /**
   * Get organization ID
   */
  getOrganizationId(): string {
    return this.organizationId;
  }
}

/**
 * Create a Partner API client from environment variables
 */
export function createPartnerApiClient(): PartnerApiClient | null {
  const organizationId = import.meta.env.VITE_SHOPIFY_PARTNER_ORG_ID;
  const accessToken = import.meta.env.VITE_SHOPIFY_PARTNER_API_TOKEN;

  if (!organizationId || !accessToken) {
    console.warn("Partner API credentials not configured");
    return null;
  }

  return new PartnerApiClient({
    organizationId,
    accessToken,
  });
}

/**
 * Create a Partner API client with explicit credentials
 */
export function createPartnerApiClientWithCredentials(
  organizationId: string,
  accessToken: string
): PartnerApiClient {
  return new PartnerApiClient({
    organizationId,
    accessToken,
  });
}

export default PartnerApiClient;
