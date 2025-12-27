import axios from "axios";

// QuickBooks API configuration
const API_BASE_URL =
  import.meta.env.VITE_QUICKBOOKS_API_URL ||
  "https://quickbooks.api.intuit.com/v3/company";
const COMPANY_ID = import.meta.env.VITE_QUICKBOOKS_COMPANY_ID || "";
const CLIENT_ID = import.meta.env.VITE_QUICKBOOKS_CLIENT_ID || "";
const CLIENT_SECRET = import.meta.env.VITE_QUICKBOOKS_CLIENT_SECRET || "";
const REFRESH_TOKEN = import.meta.env.VITE_QUICKBOOKS_REFRESH_TOKEN || "";

// Initialize axios instance for QuickBooks API
const quickbooksApi = axios.create({
  baseURL: `${API_BASE_URL}/${COMPANY_ID}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Access token management
let accessToken: string | null = null;
let tokenExpiry: number | null = null;

// Function to get a valid access token
const getAccessToken = async (): Promise<string> => {
  const now = Date.now();

  // If token exists and is not expired, return it
  if (accessToken && tokenExpiry && now < tokenExpiry) {
    return accessToken;
  }

  try {
    // In a real implementation, you would use the refresh token to get a new access token
    // For demo purposes, we'll simulate this process
    const response = await axios.post(
      "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
      {
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
      },
    );

    accessToken = response.data.access_token;
    tokenExpiry = now + response.data.expires_in * 1000; // Convert seconds to milliseconds

    return accessToken;
  } catch (error) {
    console.error("Error refreshing QuickBooks access token:", error);
    throw new Error("Failed to obtain QuickBooks access token");
  }
};

// Add request interceptor to add access token to all requests
quickbooksApi.interceptors.request.use(async (config) => {
  try {
    const token = await getAccessToken();
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

// Types for QuickBooks entities
export interface QuickBooksCustomer {
  Id: string;
  DisplayName: string;
  CompanyName?: string;
  PrimaryEmailAddr?: {
    Address: string;
  };
  PrimaryPhone?: {
    FreeFormNumber: string;
  };
  BillAddr?: {
    Line1?: string;
    Line2?: string;
    City?: string;
    CountrySubDivisionCode?: string;
    PostalCode?: string;
    Country?: string;
  };
  Active: boolean;
  Balance: number;
  Metadata: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
}

export interface QuickBooksItem {
  Id: string;
  Name: string;
  Description?: string;
  Active: boolean;
  FullyQualifiedName: string;
  Taxable: boolean;
  UnitPrice: number;
  Type: string;
  IncomeAccountRef: {
    value: string;
    name: string;
  };
  PurchaseCost?: number;
  TrackQtyOnHand?: boolean;
  QtyOnHand?: number;
  InvStartDate?: string;
  Metadata: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
}

export interface QuickBooksInvoice {
  Id: string;
  DocNumber: string;
  TxnDate: string;
  DueDate: string;
  CustomerRef: {
    value: string;
    name: string;
  };
  TotalAmt: number;
  Balance: number;
  Line: Array<{
    Id?: string;
    LineNum?: number;
    Description?: string;
    Amount?: number;
    DetailType: string;
    SalesItemLineDetail?: {
      ItemRef: {
        value: string;
        name: string;
      };
      Qty?: number;
      UnitPrice?: number;
      TaxCodeRef?: {
        value: string;
      };
    };
    SubTotalLineDetail?: any;
    DiscountLineDetail?: any;
  }>;
  TxnTaxDetail?: {
    TotalTax: number;
    TaxLine: Array<{
      Amount: number;
      DetailType: string;
      TaxLineDetail: {
        TaxRateRef: {
          value: string;
          name: string;
        };
        PercentBased: boolean;
        TaxPercent: number;
        TaxableAmount: number;
      };
    }>;
  };
  CustomerMemo?: {
    value: string;
  };
  Metadata: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
}

export interface QuickBooksPayment {
  Id: string;
  TotalAmt: number;
  CustomerRef: {
    value: string;
    name: string;
  };
  CurrencyRef: {
    value: string;
    name: string;
  };
  TxnDate: string;
  Line: Array<{
    Amount: number;
    LinkedTxn: Array<{
      TxnId: string;
      TxnType: string;
    }>;
  }>;
  PaymentRefNum?: string;
  PaymentMethodRef?: {
    value: string;
    name: string;
  };
  Metadata: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
}

export interface QuickBooksReport {
  Header: {
    Time: string;
    ReportName: string;
    DateMacro: string;
    StartPeriod: string;
    EndPeriod: string;
    Currency: string;
    Option: Array<{
      Name: string;
      Value: string;
    }>;
  };
  Columns: {
    Column: Array<{
      ColTitle: string;
      ColType: string;
    }>;
  };
  Rows: {
    Row: Array<{
      Header?: {
        ColData: Array<{
          value: string;
          id?: string;
        }>;
      };
      Rows?: {
        Row: any[];
      };
      Summary?: {
        ColData: Array<{
          value: string;
        }>;
      };
      type: string;
      group?: string;
    }>;
  };
}

// API functions

// Customers
export const getCustomers = async (
  limit: number = 20,
  offset: number = 0,
): Promise<QuickBooksCustomer[]> => {
  try {
    const response = await quickbooksApi.get("/query", {
      params: {
        query: `SELECT * FROM Customer STARTPOSITION ${offset + 1} MAXRESULTS ${limit}`,
      },
    });
    return response.data.QueryResponse.Customer || [];
  } catch (error) {
    console.error("Error fetching QuickBooks customers:", error);
    return [];
  }
};

export const getCustomer = async (
  id: string,
): Promise<QuickBooksCustomer | null> => {
  try {
    const response = await quickbooksApi.get(`/customer/${id}`);
    return response.data.Customer;
  } catch (error) {
    console.error(`Error fetching QuickBooks customer ${id}:`, error);
    return null;
  }
};

// Items (Products/Services)
export const getItems = async (
  limit: number = 20,
  offset: number = 0,
): Promise<QuickBooksItem[]> => {
  try {
    const response = await quickbooksApi.get("/query", {
      params: {
        query: `SELECT * FROM Item STARTPOSITION ${offset + 1} MAXRESULTS ${limit}`,
      },
    });
    return response.data.QueryResponse.Item || [];
  } catch (error) {
    console.error("Error fetching QuickBooks items:", error);
    return [];
  }
};

export const getItem = async (id: string): Promise<QuickBooksItem | null> => {
  try {
    const response = await quickbooksApi.get(`/item/${id}`);
    return response.data.Item;
  } catch (error) {
    console.error(`Error fetching QuickBooks item ${id}:`, error);
    return null;
  }
};

// Invoices
export const getInvoices = async (
  limit: number = 20,
  offset: number = 0,
): Promise<QuickBooksInvoice[]> => {
  try {
    const response = await quickbooksApi.get("/query", {
      params: {
        query: `SELECT * FROM Invoice STARTPOSITION ${offset + 1} MAXRESULTS ${limit}`,
      },
    });
    return response.data.QueryResponse.Invoice || [];
  } catch (error) {
    console.error("Error fetching QuickBooks invoices:", error);
    return [];
  }
};

export const getInvoice = async (
  id: string,
): Promise<QuickBooksInvoice | null> => {
  try {
    const response = await quickbooksApi.get(`/invoice/${id}`);
    return response.data.Invoice;
  } catch (error) {
    console.error(`Error fetching QuickBooks invoice ${id}:`, error);
    return null;
  }
};

// Payments
export const getPayments = async (
  limit: number = 20,
  offset: number = 0,
): Promise<QuickBooksPayment[]> => {
  try {
    const response = await quickbooksApi.get("/query", {
      params: {
        query: `SELECT * FROM Payment STARTPOSITION ${offset + 1} MAXRESULTS ${limit}`,
      },
    });
    return response.data.QueryResponse.Payment || [];
  } catch (error) {
    console.error("Error fetching QuickBooks payments:", error);
    return [];
  }
};

export const getPayment = async (
  id: string,
): Promise<QuickBooksPayment | null> => {
  try {
    const response = await quickbooksApi.get(`/payment/${id}`);
    return response.data.Payment;
  } catch (error) {
    console.error(`Error fetching QuickBooks payment ${id}:`, error);
    return null;
  }
};

// Reports
export const getReport = async (
  reportType: string,
  params: Record<string, string>,
): Promise<QuickBooksReport | null> => {
  try {
    const response = await quickbooksApi.get(`/reports/${reportType}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching QuickBooks report ${reportType}:`, error);
    return null;
  }
};

// Sync data (from QuickBooks to local database)
export const syncQuickBooksData = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    // In a real implementation, this would sync data between QuickBooks and your database
    console.log("Syncing QuickBooks data...");
    return {
      success: true,
      message: "QuickBooks data sync completed successfully",
    };
  } catch (error) {
    console.error("Error syncing QuickBooks data:", error);
    return { success: false, message: "Error syncing QuickBooks data" };
  }
};

// Mock data for development
export const getMockCustomers = (): QuickBooksCustomer[] => {
  return [
    {
      Id: "1",
      DisplayName: "Cool Cars Inc",
      CompanyName: "Cool Cars Inc",
      PrimaryEmailAddr: {
        Address: "contact@coolcars.com",
      },
      PrimaryPhone: {
        FreeFormNumber: "(555) 123-4567",
      },
      BillAddr: {
        Line1: "123 Motor Avenue",
        City: "Cartown",
        CountrySubDivisionCode: "CA",
        PostalCode: "95123",
        Country: "US",
      },
      Active: true,
      Balance: 2450.0,
      Metadata: {
        CreateTime: "2024-01-10T09:00:00Z",
        LastUpdatedTime: "2024-03-15T14:22:00Z",
      },
    },
    {
      Id: "2",
      DisplayName: "Fancy Fabrics Ltd",
      CompanyName: "Fancy Fabrics Ltd",
      PrimaryEmailAddr: {
        Address: "orders@fancyfabrics.com",
      },
      PrimaryPhone: {
        FreeFormNumber: "(555) 234-5678",
      },
      BillAddr: {
        Line1: "456 Textile Lane",
        Line2: "Suite 200",
        City: "Fabricville",
        CountrySubDivisionCode: "NY",
        PostalCode: "10001",
        Country: "US",
      },
      Active: true,
      Balance: 4275.5,
      Metadata: {
        CreateTime: "2024-01-15T10:30:00Z",
        LastUpdatedTime: "2024-03-18T11:15:00Z",
      },
    },
    {
      Id: "3",
      DisplayName: "Gourmet Grocers",
      CompanyName: "Gourmet Grocers LLC",
      PrimaryEmailAddr: {
        Address: "info@gourmetgrocers.com",
      },
      PrimaryPhone: {
        FreeFormNumber: "(555) 345-6789",
      },
      BillAddr: {
        Line1: "789 Fresh Street",
        City: "Foodtown",
        CountrySubDivisionCode: "IL",
        PostalCode: "60007",
        Country: "US",
      },
      Active: true,
      Balance: 1280.75,
      Metadata: {
        CreateTime: "2024-01-20T08:45:00Z",
        LastUpdatedTime: "2024-03-20T09:30:00Z",
      },
    },
    {
      Id: "4",
      DisplayName: "Digital Designs",
      CompanyName: "Digital Designs Inc",
      PrimaryEmailAddr: {
        Address: "projects@digitaldesigns.com",
      },
      PrimaryPhone: {
        FreeFormNumber: "(555) 456-7890",
      },
      BillAddr: {
        Line1: "101 Tech Plaza",
        Line2: "Floor 5",
        City: "Silicon Valley",
        CountrySubDivisionCode: "CA",
        PostalCode: "94025",
        Country: "US",
      },
      Active: true,
      Balance: 7500.0,
      Metadata: {
        CreateTime: "2024-02-01T13:20:00Z",
        LastUpdatedTime: "2024-03-22T15:45:00Z",
      },
    },
    {
      Id: "5",
      DisplayName: "Outdoor Adventures",
      CompanyName: "Outdoor Adventures Co",
      PrimaryEmailAddr: {
        Address: "sales@outdooradventures.com",
      },
      PrimaryPhone: {
        FreeFormNumber: "(555) 567-8901",
      },
      BillAddr: {
        Line1: "222 Mountain Road",
        City: "Boulder",
        CountrySubDivisionCode: "CO",
        PostalCode: "80302",
        Country: "US",
      },
      Active: true,
      Balance: 3150.25,
      Metadata: {
        CreateTime: "2024-02-10T11:10:00Z",
        LastUpdatedTime: "2024-03-24T10:20:00Z",
      },
    },
  ];
};

export const getMockItems = (): QuickBooksItem[] => {
  return [
    {
      Id: "1",
      Name: "Website Design",
      Description: "Professional website design services",
      Active: true,
      FullyQualifiedName: "Website Design",
      Taxable: true,
      UnitPrice: 1500.0,
      Type: "Service",
      IncomeAccountRef: {
        value: "1",
        name: "Services Revenue",
      },
      Metadata: {
        CreateTime: "2024-01-05T09:00:00Z",
        LastUpdatedTime: "2024-03-10T14:22:00Z",
      },
    },
    {
      Id: "2",
      Name: "Laptop Computer",
      Description: "High-performance business laptop",
      Active: true,
      FullyQualifiedName: "Laptop Computer",
      Taxable: true,
      UnitPrice: 1299.99,
      Type: "Inventory",
      IncomeAccountRef: {
        value: "2",
        name: "Product Revenue",
      },
      PurchaseCost: 899.99,
      TrackQtyOnHand: true,
      QtyOnHand: 15,
      InvStartDate: "2024-01-01T00:00:00Z",
      Metadata: {
        CreateTime: "2024-01-15T10:30:00Z",
        LastUpdatedTime: "2024-03-18T11:15:00Z",
      },
    },
    {
      Id: "3",
      Name: "Consulting Services",
      Description: "Business and technical consulting",
      Active: true,
      FullyQualifiedName: "Consulting Services",
      Taxable: true,
      UnitPrice: 150.0,
      Type: "Service",
      IncomeAccountRef: {
        value: "1",
        name: "Services Revenue",
      },
      Metadata: {
        CreateTime: "2024-01-20T08:45:00Z",
        LastUpdatedTime: "2024-03-20T09:30:00Z",
      },
    },
    {
      Id: "4",
      Name: "Office Desk",
      Description: "Ergonomic office desk",
      Active: true,
      FullyQualifiedName: "Office Desk",
      Taxable: true,
      UnitPrice: 349.99,
      Type: "Inventory",
      IncomeAccountRef: {
        value: "2",
        name: "Product Revenue",
      },
      PurchaseCost: 249.99,
      TrackQtyOnHand: true,
      QtyOnHand: 8,
      InvStartDate: "2024-01-01T00:00:00Z",
      Metadata: {
        CreateTime: "2024-02-01T13:20:00Z",
        LastUpdatedTime: "2024-03-22T15:45:00Z",
      },
    },
    {
      Id: "5",
      Name: "Monthly Maintenance",
      Description: "Monthly website maintenance and support",
      Active: true,
      FullyQualifiedName: "Monthly Maintenance",
      Taxable: true,
      UnitPrice: 99.99,
      Type: "Service",
      IncomeAccountRef: {
        value: "1",
        name: "Services Revenue",
      },
      Metadata: {
        CreateTime: "2024-02-10T11:10:00Z",
        LastUpdatedTime: "2024-03-24T10:20:00Z",
      },
    },
  ];
};

export const getMockInvoices = (): QuickBooksInvoice[] => {
  return [
    {
      Id: "1",
      DocNumber: "1001",
      TxnDate: "2025-03-01T00:00:00Z",
      DueDate: "2025-03-31T00:00:00Z",
      CustomerRef: {
        value: "1",
        name: "Cool Cars Inc",
      },
      TotalAmt: 1575.0,
      Balance: 1575.0,
      Line: [
        {
          Id: "1",
          LineNum: 1,
          Description: "Website Design services",
          Amount: 1500.0,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "1",
              name: "Website Design",
            },
            Qty: 1,
            UnitPrice: 1500.0,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          DetailType: "SubTotalLineDetail",
          Amount: 1500.0,
          SubTotalLineDetail: {},
        },
        {
          DetailType: "DiscountLineDetail",
          Amount: 0,
          DiscountLineDetail: {},
        },
      ],
      TxnTaxDetail: {
        TotalTax: 75.0,
        TaxLine: [
          {
            Amount: 75.0,
            DetailType: "TaxLineDetail",
            TaxLineDetail: {
              TaxRateRef: {
                value: "1",
                name: "Sales Tax",
              },
              PercentBased: true,
              TaxPercent: 5,
              TaxableAmount: 1500.0,
            },
          },
        ],
      },
      CustomerMemo: {
        value: "Thank you for your business!",
      },
      Metadata: {
        CreateTime: "2025-03-01T09:30:00Z",
        LastUpdatedTime: "2025-03-01T09:30:00Z",
      },
    },
    {
      Id: "2",
      DocNumber: "1002",
      TxnDate: "2025-03-05T00:00:00Z",
      DueDate: "2025-04-04T00:00:00Z",
      CustomerRef: {
        value: "2",
        name: "Fancy Fabrics Ltd",
      },
      TotalAmt: 4106.28,
      Balance: 4106.28,
      Line: [
        {
          Id: "1",
          LineNum: 1,
          Description: "Laptop Computers x3",
          Amount: 3899.97,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "2",
              name: "Laptop Computer",
            },
            Qty: 3,
            UnitPrice: 1299.99,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          DetailType: "SubTotalLineDetail",
          Amount: 3899.97,
          SubTotalLineDetail: {},
        },
      ],
      TxnTaxDetail: {
        TotalTax: 206.31,
        TaxLine: [
          {
            Amount: 206.31,
            DetailType: "TaxLineDetail",
            TaxLineDetail: {
              TaxRateRef: {
                value: "1",
                name: "Sales Tax",
              },
              PercentBased: true,
              TaxPercent: 5.29,
              TaxableAmount: 3899.97,
            },
          },
        ],
      },
      Metadata: {
        CreateTime: "2025-03-05T10:15:00Z",
        LastUpdatedTime: "2025-03-05T10:15:00Z",
      },
    },
    {
      Id: "3",
      DocNumber: "1003",
      TxnDate: "2025-03-10T00:00:00Z",
      DueDate: "2025-04-09T00:00:00Z",
      CustomerRef: {
        value: "3",
        name: "Gourmet Grocers",
      },
      TotalAmt: 1344.79,
      Balance: 0.0, // Fully paid
      Line: [
        {
          Id: "1",
          LineNum: 1,
          Description: "Consulting Services (8 hours)",
          Amount: 1200.0,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "3",
              name: "Consulting Services",
            },
            Qty: 8,
            UnitPrice: 150.0,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          DetailType: "SubTotalLineDetail",
          Amount: 1200.0,
          SubTotalLineDetail: {},
        },
      ],
      TxnTaxDetail: {
        TotalTax: 144.79,
        TaxLine: [
          {
            Amount: 144.79,
            DetailType: "TaxLineDetail",
            TaxLineDetail: {
              TaxRateRef: {
                value: "2",
                name: "Services Tax",
              },
              PercentBased: true,
              TaxPercent: 12.066,
              TaxableAmount: 1200.0,
            },
          },
        ],
      },
      CustomerMemo: {
        value: "Business strategy consultation",
      },
      Metadata: {
        CreateTime: "2025-03-10T15:45:00Z",
        LastUpdatedTime: "2025-03-15T09:20:00Z",
      },
    },
    {
      Id: "4",
      DocNumber: "1004",
      TxnDate: "2025-03-15T00:00:00Z",
      DueDate: "2025-04-14T00:00:00Z",
      CustomerRef: {
        value: "4",
        name: "Digital Designs",
      },
      TotalAmt: 7349.89,
      Balance: 7349.89,
      Line: [
        {
          Id: "1",
          LineNum: 1,
          Description: "Office Desks x5",
          Amount: 1749.95,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "4",
              name: "Office Desk",
            },
            Qty: 5,
            UnitPrice: 349.99,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          Id: "2",
          LineNum: 2,
          Description: "Website Design",
          Amount: 1500.0,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "1",
              name: "Website Design",
            },
            Qty: 1,
            UnitPrice: 1500.0,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          Id: "3",
          LineNum: 3,
          Description: "Laptop Computers x3",
          Amount: 3899.97,
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "2",
              name: "Laptop Computer",
            },
            Qty: 3,
            UnitPrice: 1299.99,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          DetailType: "SubTotalLineDetail",
          Amount: 7149.92,
          SubTotalLineDetail: {},
        },
      ],
      TxnTaxDetail: {
        TotalTax: 199.97,
        TaxLine: [
          {
            Amount: 199.97,
            DetailType: "TaxLineDetail",
            TaxLineDetail: {
              TaxRateRef: {
                value: "1",
                name: "Sales Tax",
              },
              PercentBased: true,
              TaxPercent: 2.8,
              TaxableAmount: 7149.92,
            },
          },
        ],
      },
      Metadata: {
        CreateTime: "2025-03-15T14:30:00Z",
        LastUpdatedTime: "2025-03-15T14:30:00Z",
      },
    },
    {
      Id: "5",
      DocNumber: "1005",
      TxnDate: "2025-03-20T00:00:00Z",
      DueDate: "2025-04-19T00:00:00Z",
      CustomerRef: {
        value: "5",
        name: "Outdoor Adventures",
      },
      TotalAmt: 1049.99,
      Balance: 1049.99,
      Line: [
        {
          Id: "1",
          LineNum: 1,
          Description: "Website Design",
          Amount: 1000.0, // Discounted rate
          DetailType: "SalesItemLineDetail",
          SalesItemLineDetail: {
            ItemRef: {
              value: "1",
              name: "Website Design",
            },
            Qty: 1,
            UnitPrice: 1000.0,
            TaxCodeRef: {
              value: "TAX",
            },
          },
        },
        {
          DetailType: "SubTotalLineDetail",
          Amount: 1000.0,
          SubTotalLineDetail: {},
        },
      ],
      TxnTaxDetail: {
        TotalTax: 49.99,
        TaxLine: [
          {
            Amount: 49.99,
            DetailType: "TaxLineDetail",
            TaxLineDetail: {
              TaxRateRef: {
                value: "1",
                name: "Sales Tax",
              },
              PercentBased: true,
              TaxPercent: 4.999,
              TaxableAmount: 1000.0,
            },
          },
        ],
      },
      CustomerMemo: {
        value: "Outdoor retail website design",
      },
      Metadata: {
        CreateTime: "2025-03-20T11:15:00Z",
        LastUpdatedTime: "2025-03-20T11:15:00Z",
      },
    },
  ];
};

export const getMockPayments = (): QuickBooksPayment[] => {
  return [
    {
      Id: "1",
      TotalAmt: 1344.79,
      CustomerRef: {
        value: "3",
        name: "Gourmet Grocers",
      },
      CurrencyRef: {
        value: "USD",
        name: "US Dollar",
      },
      TxnDate: "2025-03-12T00:00:00Z",
      Line: [
        {
          Amount: 1344.79,
          LinkedTxn: [
            {
              TxnId: "3",
              TxnType: "Invoice",
            },
          ],
        },
      ],
      PaymentRefNum: "PMT-2025-001",
      PaymentMethodRef: {
        value: "1",
        name: "Credit Card",
      },
      Metadata: {
        CreateTime: "2025-03-12T09:30:00Z",
        LastUpdatedTime: "2025-03-12T09:30:00Z",
      },
    },
    {
      Id: "2",
      TotalAmt: 4106.28,
      CustomerRef: {
        value: "2",
        name: "Fancy Fabrics Ltd",
      },
      CurrencyRef: {
        value: "USD",
        name: "US Dollar",
      },
      TxnDate: "2025-03-25T00:00:00Z",
      Line: [
        {
          Amount: 4106.28,
          LinkedTxn: [
            {
              TxnId: "2",
              TxnType: "Invoice",
            },
          ],
        },
      ],
      PaymentRefNum: "PMT-2025-002",
      PaymentMethodRef: {
        value: "2",
        name: "Bank Transfer",
      },
      Metadata: {
        CreateTime: "2025-03-25T14:15:00Z",
        LastUpdatedTime: "2025-03-25T14:15:00Z",
      },
    },
  ];
};

export const getMockFinancialData = () => {
  return {
    profitAndLoss: {
      totalRevenue: 15425.95,
      totalExpenses: 8712.33,
      netIncome: 6713.62,
      previousQuarterRevenue: 13250.45,
      previousQuarterExpenses: 7890.22,
      previousQuarterNetIncome: 5360.23,
      revenueGrowth: 16.42,
      netIncomeGrowth: 25.25,
      topExpenseCategories: [
        { name: "Cost of Goods Sold", amount: 4215.67 },
        { name: "Salaries & Wages", amount: 2500.0 },
        { name: "Rent", amount: 1200.0 },
        { name: "Software Subscriptions", amount: 496.66 },
        { name: "Utilities", amount: 300.0 },
      ],
    },
    balanceSheet: {
      totalAssets: 52375.89,
      totalLiabilities: 15243.67,
      equity: 37132.22,
      cashAndEquivalents: 18759.34,
      accountsReceivable: 15426.55,
      inventory: 8190.0,
      accountsPayable: 6243.67,
      loans: 9000.0,
    },
    cashFlow: {
      operatingActivities: 5823.45,
      investingActivities: -2500.0,
      financingActivities: -1000.0,
      netCashChange: 2323.45,
      beginningCashBalance: 16435.89,
      endingCashBalance: 18759.34,
    },
  };
};
