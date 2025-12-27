import axios from 'axios';
// Note: We're removing the direct crypto import to avoid browser compatibility issues
// Instead, we'll use a more browser-compatible approach

// NetSuite API configuration
const API_BASE_URL = import.meta.env.VITE_NETSUITE_API_URL || 'https://rest.netsuite.com/app/site/hosting/restlet.nl';
const ACCOUNT_ID = import.meta.env.VITE_NETSUITE_ACCOUNT_ID || '';
const CONSUMER_KEY = import.meta.env.VITE_NETSUITE_CONSUMER_KEY || '';
const _CONSUMER_SECRET = import.meta.env.VITE_NETSUITE_CONSUMER_SECRET || '';
const TOKEN_ID = import.meta.env.VITE_NETSUITE_TOKEN_ID || '';
const _TOKEN_SECRET = import.meta.env.VITE_NETSUITE_TOKEN_SECRET || '';

// Browser-compatible hashing function (simplified for demo purposes)
const generateSignature = (_method: string, _url: string, _timestamp: string, _nonce: string) => {
  // In a production environment, use the oauth-1.0a library for proper OAuth signatures
  // This is a simplified placeholder that returns a mock signature
  return 'mock_signature_for_demo_purposes';
};

// Initialize axios instance for NetSuite API
const netsuiteApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor to sign all requests
netsuiteApi.interceptors.request.use((config) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = Math.random().toString(36).substring(2);
  
  const signature = generateSignature(
    config.method?.toUpperCase() || 'GET',
    config.url || '',
    timestamp,
    nonce
  );
  
  config.headers['Authorization'] = `OAuth oauth_signature="${encodeURIComponent(signature)}",oauth_version="1.0",oauth_nonce="${nonce}",oauth_signature_method="HMAC-SHA256",oauth_consumer_key="${CONSUMER_KEY}",oauth_token="${TOKEN_ID}",oauth_timestamp="${timestamp}",realm="${ACCOUNT_ID}"`;
  
  return config;
});

// Types for NetSuite entities
export interface NetSuiteCustomer {
  id: string;
  entityId: string;
  companyName: string;
  email: string;
  phone: string;
  subsidiary: {
    id: string;
    name: string;
  };
  isPerson: boolean;
  firstName?: string;
  lastName?: string;
  addressbook?: NetSuiteAddress[];
  dateCreated: string;
  lastModifiedDate: string;
}

export interface NetSuiteAddress {
  id: string;
  addr1: string;
  addr2?: string;
  city: string;
  state?: string;
  zip: string;
  country: string;
  isResidential: boolean;
  isDefaultBilling: boolean;
  isDefaultShipping: boolean;
}

export interface NetSuiteItem {
  id: string;
  itemId: string;
  displayName: string;
  description?: string;
  type: string;
  department?: {
    id: string;
    name: string;
  };
  stockDescription?: string;
  isTaxable: boolean;
  cost?: number;
  rate?: number;
  quantityAvailable?: number;
  reorderPoint?: number;
  leadTime?: number;
  preferredLocation?: {
    id: string;
    name: string;
  };
  dateCreated: string;
  lastModifiedDate: string;
}

export interface NetSuiteTransaction {
  id: string;
  tranId: string;
  type: 'salesorder' | 'invoice' | 'cashsale' | 'creditmemo' | 'customerpayment';
  tranDate: string;
  dueDate?: string;
  customer: {
    id: string;
    name: string;
  };
  subsidiary: {
    id: string;
    name: string;
  };
  department?: {
    id: string;
    name: string;
  };
  location?: {
    id: string;
    name: string;
  };
  currency: {
    id: string;
    name: string;
  };
  exchangeRate: number;
  status: string;
  total: number;
  subtotal: number;
  taxTotal: number;
  shippingCost: number;
  lines: NetSuiteTransactionLine[];
  createdDate: string;
  lastModifiedDate: string;
}

export interface NetSuiteTransactionLine {
  id: string;
  item: {
    id: string;
    name: string;
  };
  description?: string;
  quantity: number;
  rate: number;
  amount: number;
  taxCode?: {
    id: string;
    name: string;
  };
  taxRate?: number;
  department?: {
    id: string;
    name: string;
  };
}

export interface NetSuiteSubsidiary {
  id: string;
  name: string;
  legalName: string;
  isInactive: boolean;
  parent?: {
    id: string;
    name: string;
  };
  currency: {
    id: string;
    name: string;
  };
  country: string;
  mainAddress?: NetSuiteAddress;
  isElimination: boolean;
  fiscalCalendar: {
    id: string;
    name: string;
  };
  taxFiscalCalendar: {
    id: string;
    name: string;
  };
}

export interface NetSuiteFinancialData {
  period: string;
  subsidiary: string;
  accounts: {
    account: string;
    amount: number;
    previousAmount: number;
  }[];
}

// API functions

// Customers
export const getCustomers = async (limit: number = 20, offset: number = 0): Promise<NetSuiteCustomer[]> => {
  try {
    const response = await netsuiteApi.get('/customers', {
      params: { limit, offset }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching NetSuite customers:', error);
    return [];
  }
};

export const getCustomer = async (id: string): Promise<NetSuiteCustomer | null> => {
  try {
    const response = await netsuiteApi.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching NetSuite customer ${id}:`, error);
    return null;
  }
};

// Items
export const getItems = async (limit: number = 20, offset: number = 0): Promise<NetSuiteItem[]> => {
  try {
    const response = await netsuiteApi.get('/items', {
      params: { limit, offset }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching NetSuite items:', error);
    return [];
  }
};

export const getItem = async (id: string): Promise<NetSuiteItem | null> => {
  try {
    const response = await netsuiteApi.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching NetSuite item ${id}:`, error);
    return null;
  }
};

// Transactions
export const getTransactions = async (
  type?: string,
  startDate?: string,
  endDate?: string,
  limit: number = 20,
  offset: number = 0
): Promise<NetSuiteTransaction[]> => {
  try {
    const params: Record<string, any> = { limit, offset };
    if (type) params.type = type;
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    
    const response = await netsuiteApi.get('/transactions', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching NetSuite transactions:', error);
    return [];
  }
};

export const getTransaction = async (id: string): Promise<NetSuiteTransaction | null> => {
  try {
    const response = await netsuiteApi.get(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching NetSuite transaction ${id}:`, error);
    return null;
  }
};

// Subsidiaries
export const getSubsidiaries = async (): Promise<NetSuiteSubsidiary[]> => {
  try {
    const response = await netsuiteApi.get('/subsidiaries');
    return response.data;
  } catch (error) {
    console.error('Error fetching NetSuite subsidiaries:', error);
    return [];
  }
};

export const getSubsidiary = async (id: string): Promise<NetSuiteSubsidiary | null> => {
  try {
    const response = await netsuiteApi.get(`/subsidiaries/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching NetSuite subsidiary ${id}:`, error);
    return null;
  }
};

// Financial reports
export const getFinancialData = async (
  period: string,
  subsidiaryId?: string
): Promise<NetSuiteFinancialData | null> => {
  try {
    const params: Record<string, any> = { period };
    if (subsidiaryId) params.subsidiaryId = subsidiaryId;
    
    const response = await netsuiteApi.get('/financial-data', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching NetSuite financial data:', error);
    return null;
  }
};

// Sync data (from NetSuite to Shopify or local database)
export const syncNetSuiteData = async (): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would sync data between NetSuite and your database
    console.log('Syncing NetSuite data...');
    return { success: true, message: 'NetSuite data sync completed successfully' };
  } catch (error) {
    console.error('Error syncing NetSuite data:', error);
    return { success: false, message: 'Error syncing NetSuite data' };
  }
};

// Mock data for development
export const getMockCustomers = (): NetSuiteCustomer[] => {
  return [
    {
      id: '12345',
      entityId: 'CUST001',
      companyName: 'Acme Corporation',
      email: 'info@acme.com',
      phone: '123-456-7890',
      subsidiary: {
        id: '1',
        name: 'Parent Company'
      },
      isPerson: false,
      addressbook: [
        {
          id: 'addr1',
          addr1: '123 Business St',
          city: 'Los Angeles',
          state: 'CA',
          zip: '90001',
          country: 'US',
          isResidential: false,
          isDefaultBilling: true,
          isDefaultShipping: true
        }
      ],
      dateCreated: '2024-01-15T00:00:00Z',
      lastModifiedDate: '2024-03-20T00:00:00Z'
    },
    {
      id: '12346',
      entityId: 'CUST002',
      companyName: 'Globex Corporation',
      email: 'sales@globex.com',
      phone: '987-654-3210',
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      isPerson: false,
      addressbook: [
        {
          id: 'addr2',
          addr1: '456 Commerce Ave',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'US',
          isResidential: false,
          isDefaultBilling: true,
          isDefaultShipping: true
        }
      ],
      dateCreated: '2024-01-20T00:00:00Z',
      lastModifiedDate: '2024-03-18T00:00:00Z'
    },
    {
      id: '12347',
      entityId: 'CUST003',
      companyName: 'Oceanic Airlines',
      email: 'reservations@oceanic.com',
      phone: '555-123-4567',
      subsidiary: {
        id: '3',
        name: 'International Subsidiary'
      },
      isPerson: false,
      addressbook: [
        {
          id: 'addr3',
          addr1: '789 Aviation Blvd',
          city: 'Sydney',
          zip: '2000',
          country: 'AU',
          isResidential: false,
          isDefaultBilling: true,
          isDefaultShipping: true
        }
      ],
      dateCreated: '2024-02-01T00:00:00Z',
      lastModifiedDate: '2024-03-15T00:00:00Z'
    },
    {
      id: '12348',
      entityId: 'CUST004',
      companyName: 'Wayne Enterprises',
      email: 'procurement@wayne.com',
      phone: '555-876-5432',
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      isPerson: false,
      addressbook: [
        {
          id: 'addr4',
          addr1: '1007 Mountain Drive',
          city: 'Gotham',
          state: 'NJ',
          zip: '07101',
          country: 'US',
          isResidential: false,
          isDefaultBilling: true,
          isDefaultShipping: true
        }
      ],
      dateCreated: '2024-02-10T00:00:00Z',
      lastModifiedDate: '2024-03-10T00:00:00Z'
    },
    {
      id: '12349',
      entityId: 'CUST005',
      companyName: 'Stark Industries',
      email: 'sales@stark.com',
      phone: '555-987-6543',
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      isPerson: false,
      addressbook: [
        {
          id: 'addr5',
          addr1: '10880 Malibu Point',
          city: 'Malibu',
          state: 'CA',
          zip: '90265',
          country: 'US',
          isResidential: false,
          isDefaultBilling: true,
          isDefaultShipping: true
        }
      ],
      dateCreated: '2024-02-15T00:00:00Z',
      lastModifiedDate: '2024-03-05T00:00:00Z'
    }
  ];
};

export const getMockTransactions = (): NetSuiteTransaction[] => {
  return [
    {
      id: 'trx1',
      tranId: 'SO12345',
      type: 'salesorder',
      tranDate: '2025-03-01T00:00:00Z',
      dueDate: '2025-03-31T00:00:00Z',
      customer: {
        id: '12345',
        name: 'Acme Corporation'
      },
      subsidiary: {
        id: '1',
        name: 'Parent Company'
      },
      department: {
        id: 'dept1',
        name: 'Sales'
      },
      location: {
        id: 'loc1',
        name: 'Warehouse A'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      exchangeRate: 1,
      status: 'Pending Fulfillment',
      total: 5250,
      subtotal: 5000,
      taxTotal: 250,
      shippingCost: 0,
      lines: [
        {
          id: 'line1',
          item: {
            id: 'item1',
            name: 'Widget Pro'
          },
          description: 'Professional widget with extended warranty',
          quantity: 5,
          rate: 1000,
          amount: 5000,
          taxCode: {
            id: 'tax1',
            name: 'Sales Tax'
          },
          taxRate: 5
        }
      ],
      createdDate: '2025-03-01T00:00:00Z',
      lastModifiedDate: '2025-03-01T00:00:00Z'
    },
    {
      id: 'trx2',
      tranId: 'INV54321',
      type: 'invoice',
      tranDate: '2025-03-05T00:00:00Z',
      dueDate: '2025-04-04T00:00:00Z',
      customer: {
        id: '12346',
        name: 'Globex Corporation'
      },
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      department: {
        id: 'dept1',
        name: 'Sales'
      },
      location: {
        id: 'loc2',
        name: 'Warehouse B'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      exchangeRate: 1,
      status: 'Open',
      total: 10500,
      subtotal: 10000,
      taxTotal: 500,
      shippingCost: 0,
      lines: [
        {
          id: 'line2',
          item: {
            id: 'item2',
            name: 'Enterprise Software License'
          },
          description: 'Annual enterprise software license',
          quantity: 1,
          rate: 10000,
          amount: 10000,
          taxCode: {
            id: 'tax1',
            name: 'Sales Tax'
          },
          taxRate: 5
        }
      ],
      createdDate: '2025-03-05T00:00:00Z',
      lastModifiedDate: '2025-03-05T00:00:00Z'
    },
    {
      id: 'trx3',
      tranId: 'SO67890',
      type: 'salesorder',
      tranDate: '2025-03-10T00:00:00Z',
      dueDate: '2025-04-09T00:00:00Z',
      customer: {
        id: '12347',
        name: 'Oceanic Airlines'
      },
      subsidiary: {
        id: '3',
        name: 'International Subsidiary'
      },
      department: {
        id: 'dept2',
        name: 'International Sales'
      },
      location: {
        id: 'loc3',
        name: 'International Warehouse'
      },
      currency: {
        id: 'AUD',
        name: 'Australian Dollar'
      },
      exchangeRate: 1.5,
      status: 'Pending Approval',
      total: 22500,
      subtotal: 20000,
      taxTotal: 2000,
      shippingCost: 500,
      lines: [
        {
          id: 'line3',
          item: {
            id: 'item3',
            name: 'Aviation Parts'
          },
          description: 'Maintenance parts for commercial aircraft',
          quantity: 20,
          rate: 1000,
          amount: 20000,
          taxCode: {
            id: 'tax2',
            name: 'GST'
          },
          taxRate: 10
        }
      ],
      createdDate: '2025-03-10T00:00:00Z',
      lastModifiedDate: '2025-03-12T00:00:00Z'
    },
    {
      id: 'trx4',
      tranId: 'PAY12345',
      type: 'customerpayment',
      tranDate: '2025-03-15T00:00:00Z',
      customer: {
        id: '12348',
        name: 'Wayne Enterprises'
      },
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      exchangeRate: 1,
      status: 'Deposited',
      total: 75000,
      subtotal: 75000,
      taxTotal: 0,
      shippingCost: 0,
      lines: [
        {
          id: 'line4',
          item: {
            id: 'payment',
            name: 'Customer Payment'
          },
          description: 'Payment for invoice INV87654',
          quantity: 1,
          rate: 75000,
          amount: 75000
        }
      ],
      createdDate: '2025-03-15T00:00:00Z',
      lastModifiedDate: '2025-03-15T00:00:00Z'
    },
    {
      id: 'trx5',
      tranId: 'INV98765',
      type: 'invoice',
      tranDate: '2025-03-20T00:00:00Z',
      dueDate: '2025-04-19T00:00:00Z',
      customer: {
        id: '12349',
        name: 'Stark Industries'
      },
      subsidiary: {
        id: '2',
        name: 'US Subsidiary'
      },
      department: {
        id: 'dept3',
        name: 'R&D Sales'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      exchangeRate: 1,
      status: 'Paid In Full',
      total: 52500,
      subtotal: 50000,
      taxTotal: 2500,
      shippingCost: 0,
      lines: [
        {
          id: 'line5',
          item: {
            id: 'item4',
            name: 'Advanced Research Equipment'
          },
          description: 'Custom research equipment',
          quantity: 1,
          rate: 50000,
          amount: 50000,
          taxCode: {
            id: 'tax1',
            name: 'Sales Tax'
          },
          taxRate: 5
        }
      ],
      createdDate: '2025-03-20T00:00:00Z',
      lastModifiedDate: '2025-03-25T00:00:00Z'
    }
  ];
};

export const getMockSubsidiaries = (): NetSuiteSubsidiary[] => {
  return [
    {
      id: '1',
      name: 'Parent Company',
      legalName: 'Enterprise Holdings Inc.',
      isInactive: false,
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      country: 'US',
      mainAddress: {
        id: 'addr1',
        addr1: '123 Corporate Plaza',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        country: 'US',
        isResidential: false,
        isDefaultBilling: true,
        isDefaultShipping: true
      },
      isElimination: false,
      fiscalCalendar: {
        id: 'cal1',
        name: 'Standard Calendar'
      },
      taxFiscalCalendar: {
        id: 'taxcal1',
        name: 'Standard Tax Calendar'
      }
    },
    {
      id: '2',
      name: 'US Subsidiary',
      legalName: 'Enterprise USA LLC',
      isInactive: false,
      parent: {
        id: '1',
        name: 'Parent Company'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      country: 'US',
      mainAddress: {
        id: 'addr2',
        addr1: '456 American Blvd',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'US',
        isResidential: false,
        isDefaultBilling: true,
        isDefaultShipping: true
      },
      isElimination: false,
      fiscalCalendar: {
        id: 'cal1',
        name: 'Standard Calendar'
      },
      taxFiscalCalendar: {
        id: 'taxcal1',
        name: 'Standard Tax Calendar'
      }
    },
    {
      id: '3',
      name: 'International Subsidiary',
      legalName: 'Enterprise International Pty Ltd',
      isInactive: false,
      parent: {
        id: '1',
        name: 'Parent Company'
      },
      currency: {
        id: 'AUD',
        name: 'Australian Dollar'
      },
      country: 'AU',
      mainAddress: {
        id: 'addr3',
        addr1: '789 Global Street',
        city: 'Sydney',
        zip: '2000',
        country: 'AU',
        isResidential: false,
        isDefaultBilling: true,
        isDefaultShipping: true
      },
      isElimination: false,
      fiscalCalendar: {
        id: 'cal1',
        name: 'Standard Calendar'
      },
      taxFiscalCalendar: {
        id: 'taxcal1',
        name: 'Standard Tax Calendar'
      }
    },
    {
      id: '4',
      name: 'European Subsidiary',
      legalName: 'Enterprise Europe GmbH',
      isInactive: false,
      parent: {
        id: '1',
        name: 'Parent Company'
      },
      currency: {
        id: 'EUR',
        name: 'Euro'
      },
      country: 'DE',
      mainAddress: {
        id: 'addr4',
        addr1: '10 Europaplatz',
        city: 'Berlin',
        zip: '10557',
        country: 'DE',
        isResidential: false,
        isDefaultBilling: true,
        isDefaultShipping: true
      },
      isElimination: false,
      fiscalCalendar: {
        id: 'cal1',
        name: 'Standard Calendar'
      },
      taxFiscalCalendar: {
        id: 'taxcal1',
        name: 'Standard Tax Calendar'
      }
    },
    {
      id: '5',
      name: 'Elimination Subsidiary',
      legalName: 'Enterprise Elimination Entity',
      isInactive: false,
      parent: {
        id: '1',
        name: 'Parent Company'
      },
      currency: {
        id: 'USD',
        name: 'US Dollar'
      },
      country: 'US',
      isElimination: true,
      fiscalCalendar: {
        id: 'cal1',
        name: 'Standard Calendar'
      },
      taxFiscalCalendar: {
        id: 'taxcal1',
        name: 'Standard Tax Calendar'
      }
    }
  ];
};

export const getMockFinancialData = (): NetSuiteFinancialData => {
  return {
    period: 'Q1 2025',
    subsidiary: 'Parent Company',
    accounts: [
      {
        account: 'Revenue',
        amount: 1250000,
        previousAmount: 1050000
      },
      {
        account: 'Cost of Goods Sold',
        amount: 625000,
        previousAmount: 535000
      },
      {
        account: 'Gross Profit',
        amount: 625000,
        previousAmount: 515000
      },
      {
        account: 'Operating Expenses',
        amount: 350000,
        previousAmount: 320000
      },
      {
        account: 'Net Income',
        amount: 275000,
        previousAmount: 195000
      },
      {
        account: 'Accounts Receivable',
        amount: 450000,
        previousAmount: 380000
      },
      {
        account: 'Accounts Payable',
        amount: 215000,
        previousAmount: 245000
      },
      {
        account: 'Inventory',
        amount: 320000,
        previousAmount: 290000
      }
    ]
  };
};