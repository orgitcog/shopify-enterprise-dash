import axios from 'axios';

// POS API configuration
const API_BASE_URL = import.meta.env.VITE_POS_API_URL || 'https://api.shopify.com/pos';
const ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN || '';

// Initialize axios instance for POS API
const posApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Shopify-Access-Token': ACCESS_TOKEN
  }
});

// Types for POS entities
export interface POSRegister {
  id: string;
  name: string;
  locationId: string;
  locationName: string;
  status: 'active' | 'inactive' | 'maintenance';
  lastActive: string;
  deviceType: 'tablet' | 'terminal' | 'mobile';
  operatingSystem: 'ios' | 'android' | 'windows';
  version: string;
  serialNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface POSTransaction {
  id: string;
  orderId: string;
  registerId: string;
  registerName: string;
  locationId: string;
  locationName: string;
  staffId: string;
  staffName: string;
  transactionType: 'sale' | 'return' | 'exchange' | 'void';
  status: 'completed' | 'cancelled' | 'refunded' | 'partially_refunded';
  createdAt: string;
  completedAt?: string;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  lineItems: POSLineItem[];
  customer?: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
  };
  notes?: string;
}

export interface POSLineItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  quantity: number;
  discountAmount?: number;
  taxAmount: number;
  totalAmount: number;
  properties?: Record<string, string>;
  giftCard?: boolean;
}

export interface POSShift {
  id: string;
  registerId: string;
  registerName: string;
  locationId: string;
  locationName: string;
  staffId: string;
  staffName: string;
  openedAt: string;
  closedAt?: string;
  status: 'open' | 'closed' | 'reconciled';
  openingAmount: number;
  expectedAmount: number;
  actualAmount?: number;
  difference?: number;
  notes?: string;
  transactionCount: number;
  totalSales: number;
  payments: {
    method: string;
    count: number;
    amount: number;
  }[];
}

export interface POSStaffMember {
  id: string;
  name: string;
  email: string;
  role: 'manager' | 'cashier' | 'associate';
  active: boolean;
  permissions: string[];
  locationIds: string[];
  passcode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface POSAnalytics {
  period: string;
  totalSales: number;
  transactionCount: number;
  averageOrderValue: number;
  topSellingProducts: {
    id: string;
    name: string;
    quantity: number;
    amount: number;
  }[];
  salesByLocation: {
    locationId: string;
    locationName: string;
    amount: number;
    transactionCount: number;
  }[];
  salesByStaff: {
    staffId: string;
    staffName: string;
    amount: number;
    transactionCount: number;
  }[];
  salesByHour: {
    hour: number;
    amount: number;
    transactionCount: number;
  }[];
  salesByPaymentMethod: {
    method: string;
    amount: number;
    transactionCount: number;
  }[];
}

// API functions

// Registers
export const getRegisters = async (): Promise<POSRegister[]> => {
  try {
    const response = await posApi.get('/registers');
    return response.data.registers;
  } catch (error) {
    console.error('Error fetching POS registers:', error);
    return [];
  }
};

export const getRegister = async (id: string): Promise<POSRegister | null> => {
  try {
    const response = await posApi.get(`/registers/${id}`);
    return response.data.register;
  } catch (error) {
    console.error(`Error fetching POS register ${id}:`, error);
    return null;
  }
};

// Transactions
export const getTransactions = async (
  locationId?: string,
  registerId?: string,
  startDate?: string,
  endDate?: string,
  limit: number = 20,
  offset: number = 0
): Promise<POSTransaction[]> => {
  try {
    const params: Record<string, any> = { limit, offset };
    if (locationId) params.location_id = locationId;
    if (registerId) params.register_id = registerId;
    if (startDate) params.created_at_min = startDate;
    if (endDate) params.created_at_max = endDate;
    
    const response = await posApi.get('/transactions', { params });
    return response.data.transactions;
  } catch (error) {
    console.error('Error fetching POS transactions:', error);
    return [];
  }
};

export const getTransaction = async (id: string): Promise<POSTransaction | null> => {
  try {
    const response = await posApi.get(`/transactions/${id}`);
    return response.data.transaction;
  } catch (error) {
    console.error(`Error fetching POS transaction ${id}:`, error);
    return null;
  }
};

// Shifts
export const getShifts = async (
  locationId?: string,
  registerId?: string,
  staffId?: string,
  status?: string,
  startDate?: string,
  endDate?: string
): Promise<POSShift[]> => {
  try {
    const params: Record<string, any> = {};
    if (locationId) params.location_id = locationId;
    if (registerId) params.register_id = registerId;
    if (staffId) params.staff_id = staffId;
    if (status) params.status = status;
    if (startDate) params.opened_at_min = startDate;
    if (endDate) params.opened_at_max = endDate;
    
    const response = await posApi.get('/shifts', { params });
    return response.data.shifts;
  } catch (error) {
    console.error('Error fetching POS shifts:', error);
    return [];
  }
};

export const getShift = async (id: string): Promise<POSShift | null> => {
  try {
    const response = await posApi.get(`/shifts/${id}`);
    return response.data.shift;
  } catch (error) {
    console.error(`Error fetching POS shift ${id}:`, error);
    return null;
  }
};

// Staff
export const getStaffMembers = async (locationId?: string): Promise<POSStaffMember[]> => {
  try {
    const params: Record<string, any> = {};
    if (locationId) params.location_id = locationId;
    
    const response = await posApi.get('/staff', { params });
    return response.data.staff;
  } catch (error) {
    console.error('Error fetching POS staff members:', error);
    return [];
  }
};

export const getStaffMember = async (id: string): Promise<POSStaffMember | null> => {
  try {
    const response = await posApi.get(`/staff/${id}`);
    return response.data.staff;
  } catch (error) {
    console.error(`Error fetching POS staff member ${id}:`, error);
    return null;
  }
};

// Analytics
export const getAnalytics = async (
  period: 'day' | 'week' | 'month' | 'year',
  locationId?: string,
  startDate?: string,
  endDate?: string
): Promise<POSAnalytics | null> => {
  try {
    const params: Record<string, any> = { period };
    if (locationId) params.location_id = locationId;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    
    const response = await posApi.get('/analytics', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching POS analytics:', error);
    return null;
  }
};

// Sync data
export const syncPOSData = async (): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would sync data between POS and your database
    console.log('Syncing POS data...');
    return { success: true, message: 'POS data sync completed successfully' };
  } catch (error) {
    console.error('Error syncing POS data:', error);
    return { success: false, message: 'Error syncing POS data' };
  }
};

// Mock data for development
export const getMockRegisters = (): POSRegister[] => {
  return [
    {
      id: '1',
      name: 'Main Register',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      status: 'active',
      lastActive: '2025-03-28T15:24:32Z',
      deviceType: 'tablet',
      operatingSystem: 'ios',
      version: '5.2.1',
      serialNumber: 'SHF-T-12345',
      createdAt: '2024-01-15T00:00:00Z',
      updatedAt: '2025-03-28T15:24:32Z'
    },
    {
      id: '2',
      name: 'Register 2',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      status: 'active',
      lastActive: '2025-03-28T14:15:22Z',
      deviceType: 'tablet',
      operatingSystem: 'ios',
      version: '5.2.1',
      serialNumber: 'SHF-T-12346',
      createdAt: '2024-01-15T00:00:00Z',
      updatedAt: '2025-03-28T14:15:22Z'
    },
    {
      id: '3',
      name: 'Mall Kiosk',
      locationId: 'loc2',
      locationName: 'Westfield Mall',
      status: 'active',
      lastActive: '2025-03-28T16:42:11Z',
      deviceType: 'terminal',
      operatingSystem: 'android',
      version: '5.2.0',
      serialNumber: 'SHF-A-54321',
      createdAt: '2024-02-10T00:00:00Z',
      updatedAt: '2025-03-28T16:42:11Z'
    },
    {
      id: '4',
      name: 'Mobile POS',
      locationId: 'loc3',
      locationName: 'Uptown Store',
      status: 'inactive',
      lastActive: '2025-03-25T09:12:45Z',
      deviceType: 'mobile',
      operatingSystem: 'ios',
      version: '5.1.8',
      serialNumber: 'SHF-M-98765',
      createdAt: '2024-03-01T00:00:00Z',
      updatedAt: '2025-03-25T09:12:45Z'
    },
    {
      id: '5',
      name: 'Register 1',
      locationId: 'loc3',
      locationName: 'Uptown Store',
      status: 'maintenance',
      lastActive: '2025-03-26T11:35:18Z',
      deviceType: 'tablet',
      operatingSystem: 'ios',
      version: '5.2.1',
      serialNumber: 'SHF-T-24680',
      createdAt: '2024-01-20T00:00:00Z',
      updatedAt: '2025-03-27T08:30:00Z'
    }
  ];
};

export const getMockTransactions = (): POSTransaction[] => {
  return [
    {
      id: 'txn1',
      orderId: 'ord-12345',
      registerId: '1',
      registerName: 'Main Register',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff1',
      staffName: 'John Smith',
      transactionType: 'sale',
      status: 'completed',
      createdAt: '2025-03-28T10:15:22Z',
      completedAt: '2025-03-28T10:17:45Z',
      subtotal: 129.99,
      tax: 10.40,
      total: 140.39,
      paymentMethod: 'credit_card',
      lineItems: [
        {
          id: 'li1',
          productId: 'prod1',
          variantId: 'var1',
          name: 'Designer T-Shirt',
          sku: 'TS-1001',
          price: 49.99,
          quantity: 2,
          taxAmount: 8.00,
          totalAmount: 107.98
        },
        {
          id: 'li2',
          productId: 'prod2',
          variantId: 'var2',
          name: 'Fashion Socks',
          sku: 'FS-2002',
          price: 9.99,
          quantity: 3,
          taxAmount: 2.40,
          totalAmount: 32.37
        }
      ],
      customer: {
        id: 'cust1',
        name: 'Alex Johnson',
        email: 'alex@example.com'
      }
    },
    {
      id: 'txn2',
      orderId: 'ord-12346',
      registerId: '2',
      registerName: 'Register 2',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff2',
      staffName: 'Emily Davis',
      transactionType: 'sale',
      status: 'completed',
      createdAt: '2025-03-28T11:22:33Z',
      completedAt: '2025-03-28T11:25:12Z',
      subtotal: 299.99,
      tax: 24.00,
      total: 323.99,
      paymentMethod: 'debit_card',
      lineItems: [
        {
          id: 'li3',
          productId: 'prod3',
          variantId: 'var3',
          name: 'Premium Jacket',
          sku: 'PJ-3003',
          price: 299.99,
          quantity: 1,
          taxAmount: 24.00,
          totalAmount: 323.99
        }
      ],
      customer: {
        id: 'cust2',
        name: 'Sarah Williams',
        email: 'sarah@example.com',
        phone: '555-123-4567'
      }
    },
    {
      id: 'txn3',
      orderId: 'ord-12347',
      registerId: '3',
      registerName: 'Mall Kiosk',
      locationId: 'loc2',
      locationName: 'Westfield Mall',
      staffId: 'staff3',
      staffName: 'Michael Brown',
      transactionType: 'sale',
      status: 'completed',
      createdAt: '2025-03-28T13:05:18Z',
      completedAt: '2025-03-28T13:08:30Z',
      subtotal: 85.97,
      tax: 6.88,
      total: 92.85,
      paymentMethod: 'cash',
      lineItems: [
        {
          id: 'li4',
          productId: 'prod4',
          variantId: 'var4',
          name: 'Casual Shorts',
          sku: 'CS-4004',
          price: 35.99,
          quantity: 1,
          taxAmount: 2.88,
          totalAmount: 38.87
        },
        {
          id: 'li5',
          productId: 'prod5',
          variantId: 'var5',
          name: 'Basic Tee',
          sku: 'BT-5005',
          price: 24.99,
          quantity: 2,
          taxAmount: 4.00,
          totalAmount: 53.98
        }
      ]
    },
    {
      id: 'txn4',
      orderId: 'ord-12348',
      registerId: '1',
      registerName: 'Main Register',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff1',
      staffName: 'John Smith',
      transactionType: 'return',
      status: 'completed',
      createdAt: '2025-03-28T14:30:22Z',
      completedAt: '2025-03-28T14:35:11Z',
      subtotal: -49.99,
      tax: -4.00,
      total: -53.99,
      paymentMethod: 'credit_card',
      lineItems: [
        {
          id: 'li6',
          productId: 'prod1',
          variantId: 'var1',
          name: 'Designer T-Shirt',
          sku: 'TS-1001',
          price: 49.99,
          quantity: 1,
          taxAmount: 4.00,
          totalAmount: 53.99
        }
      ],
      customer: {
        id: 'cust1',
        name: 'Alex Johnson',
        email: 'alex@example.com'
      },
      notes: 'Customer received wrong size'
    },
    {
      id: 'txn5',
      orderId: 'ord-12349',
      registerId: '3',
      registerName: 'Mall Kiosk',
      locationId: 'loc2',
      locationName: 'Westfield Mall',
      staffId: 'staff4',
      staffName: 'Jessica Wilson',
      transactionType: 'sale',
      status: 'completed',
      createdAt: '2025-03-28T15:45:33Z',
      completedAt: '2025-03-28T15:48:12Z',
      subtotal: 159.96,
      tax: 12.80,
      total: 172.76,
      paymentMethod: 'gift_card',
      lineItems: [
        {
          id: 'li7',
          productId: 'prod6',
          variantId: 'var6',
          name: 'Designer Bag',
          sku: 'DB-6006',
          price: 79.98,
          quantity: 2,
          taxAmount: 12.80,
          totalAmount: 172.76
        }
      ],
      customer: {
        id: 'cust3',
        name: 'David Miller',
        phone: '555-987-6543'
      }
    }
  ];
};

export const getMockShifts = (): POSShift[] => {
  return [
    {
      id: 'shift1',
      registerId: '1',
      registerName: 'Main Register',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff1',
      staffName: 'John Smith',
      openedAt: '2025-03-28T09:00:00Z',
      closedAt: '2025-03-28T17:00:00Z',
      status: 'reconciled',
      openingAmount: 200.00,
      expectedAmount: 1256.78,
      actualAmount: 1256.78,
      difference: 0,
      transactionCount: 32,
      totalSales: 1056.78,
      payments: [
        {
          method: 'credit_card',
          count: 18,
          amount: 685.44
        },
        {
          method: 'debit_card',
          count: 8,
          amount: 242.35
        },
        {
          method: 'cash',
          count: 5,
          amount: 115.25
        },
        {
          method: 'gift_card',
          count: 1,
          amount: 13.74
        }
      ]
    },
    {
      id: 'shift2',
      registerId: '2',
      registerName: 'Register 2',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff2',
      staffName: 'Emily Davis',
      openedAt: '2025-03-28T09:00:00Z',
      closedAt: '2025-03-28T17:00:00Z',
      status: 'reconciled',
      openingAmount: 200.00,
      expectedAmount: 978.55,
      actualAmount: 975.25,
      difference: -3.30,
      notes: 'Small discrepancy in cash drawer',
      transactionCount: 25,
      totalSales: 778.55,
      payments: [
        {
          method: 'credit_card',
          count: 14,
          amount: 512.22
        },
        {
          method: 'debit_card',
          count: 6,
          amount: 187.45
        },
        {
          method: 'cash',
          count: 5,
          amount: 78.88
        }
      ]
    },
    {
      id: 'shift3',
      registerId: '3',
      registerName: 'Mall Kiosk',
      locationId: 'loc2',
      locationName: 'Westfield Mall',
      staffId: 'staff3',
      staffName: 'Michael Brown',
      openedAt: '2025-03-28T10:00:00Z',
      closedAt: '2025-03-28T21:00:00Z',
      status: 'reconciled',
      openingAmount: 150.00,
      expectedAmount: 1450.88,
      actualAmount: 1450.88,
      difference: 0,
      transactionCount: 47,
      totalSales: 1300.88,
      payments: [
        {
          method: 'credit_card',
          count: 26,
          amount: 845.22
        },
        {
          method: 'debit_card',
          count: 12,
          amount: 322.45
        },
        {
          method: 'cash',
          count: 7,
          amount: 133.21
        },
        {
          method: 'gift_card',
          count: 2,
          amount: 150.00
        }
      ]
    },
    {
      id: 'shift4',
      registerId: '5',
      registerName: 'Register 1',
      locationId: 'loc3',
      locationName: 'Uptown Store',
      staffId: 'staff5',
      staffName: 'Robert Taylor',
      openedAt: '2025-03-28T08:00:00Z',
      status: 'open',
      openingAmount: 200.00,
      expectedAmount: 876.22,
      transactionCount: 22,
      totalSales: 676.22,
      payments: [
        {
          method: 'credit_card',
          count: 13,
          amount: 425.88
        },
        {
          method: 'debit_card',
          count: 6,
          amount: 187.45
        },
        {
          method: 'cash',
          count: 3,
          amount: 62.89
        }
      ]
    },
    {
      id: 'shift5',
      registerId: '1',
      registerName: 'Main Register',
      locationId: 'loc1',
      locationName: 'Downtown Store',
      staffId: 'staff6',
      staffName: 'Amanda Lee',
      openedAt: '2025-03-27T09:00:00Z',
      closedAt: '2025-03-27T17:00:00Z',
      status: 'reconciled',
      openingAmount: 200.00,
      expectedAmount: 1189.33,
      actualAmount: 1190.00,
      difference: 0.67,
      transactionCount: 30,
      totalSales: 989.33,
      payments: [
        {
          method: 'credit_card',
          count: 17,
          amount: 622.45
        },
        {
          method: 'debit_card',
          count: 7,
          amount: 245.22
        },
        {
          method: 'cash',
          count: 6,
          amount: 121.66
        }
      ]
    }
  ];
};

export const getMockStaffMembers = (): POSStaffMember[] => {
  return [
    {
      id: 'staff1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'manager',
      active: true,
      permissions: ['all'],
      locationIds: ['loc1', 'loc2', 'loc3'],
      createdAt: '2024-01-05T00:00:00Z',
      updatedAt: '2025-03-15T00:00:00Z'
    },
    {
      id: 'staff2',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'cashier',
      active: true,
      permissions: ['sales', 'returns', 'exchanges'],
      locationIds: ['loc1'],
      createdAt: '2024-01-10T00:00:00Z',
      updatedAt: '2025-02-20T00:00:00Z'
    },
    {
      id: 'staff3',
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'cashier',
      active: true,
      permissions: ['sales', 'returns', 'exchanges'],
      locationIds: ['loc2'],
      createdAt: '2024-02-01T00:00:00Z',
      updatedAt: '2025-03-10T00:00:00Z'
    },
    {
      id: 'staff4',
      name: 'Jessica Wilson',
      email: 'jessica.wilson@example.com',
      role: 'associate',
      active: true,
      permissions: ['sales'],
      locationIds: ['loc2'],
      createdAt: '2024-02-15T00:00:00Z',
      updatedAt: '2025-03-05T00:00:00Z'
    },
    {
      id: 'staff5',
      name: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      role: 'manager',
      active: true,
      permissions: ['all'],
      locationIds: ['loc3'],
      createdAt: '2024-01-20T00:00:00Z',
      updatedAt: '2025-02-28T00:00:00Z'
    },
    {
      id: 'staff6',
      name: 'Amanda Lee',
      email: 'amanda.lee@example.com',
      role: 'cashier',
      active: true,
      permissions: ['sales', 'returns', 'exchanges'],
      locationIds: ['loc1'],
      createdAt: '2024-02-10T00:00:00Z',
      updatedAt: '2025-03-01T00:00:00Z'
    }
  ];
};

export const getMockAnalytics = (): POSAnalytics => {
  return {
    period: 'month',
    totalSales: 45682.75,
    transactionCount: 1254,
    averageOrderValue: 36.43,
    topSellingProducts: [
      {
        id: 'prod1',
        name: 'Designer T-Shirt',
        quantity: 245,
        amount: 12247.55
      },
      {
        id: 'prod6',
        name: 'Designer Bag',
        quantity: 78,
        amount: 6238.44
      },
      {
        id: 'prod3',
        name: 'Premium Jacket',
        quantity: 52,
        amount: 15599.48
      },
      {
        id: 'prod5',
        name: 'Basic Tee',
        quantity: 187,
        amount: 4673.13
      },
      {
        id: 'prod4',
        name: 'Casual Shorts',
        quantity: 95,
        amount: 3419.05
      }
    ],
    salesByLocation: [
      {
        locationId: 'loc1',
        locationName: 'Downtown Store',
        amount: 18742.55,
        transactionCount: 487
      },
      {
        locationId: 'loc2',
        locationName: 'Westfield Mall',
        amount: 16890.33,
        transactionCount: 523
      },
      {
        locationId: 'loc3',
        locationName: 'Uptown Store',
        amount: 10049.87,
        transactionCount: 244
      }
    ],
    salesByStaff: [
      {
        staffId: 'staff1',
        staffName: 'John Smith',
        amount: 9875.44,
        transactionCount: 256
      },
      {
        staffId: 'staff3',
        staffName: 'Michael Brown',
        amount: 9245.22,
        transactionCount: 287
      },
      {
        staffId: 'staff2',
        staffName: 'Emily Davis',
        amount: 8867.33,
        transactionCount: 231
      },
      {
        staffId: 'staff5',
        staffName: 'Robert Taylor',
        amount: 7654.55,
        transactionCount: 198
      },
      {
        staffId: 'staff4',
        staffName: 'Jessica Wilson',
        amount: 5487.11,
        transactionCount: 162
      },
      {
        staffId: 'staff6',
        staffName: 'Amanda Lee',
        amount: 4553.10,
        transactionCount: 120
      }
    ],
    salesByHour: [
      { hour: 9, amount: 2345.66, transactionCount: 67 },
      { hour: 10, amount: 3256.77, transactionCount: 89 },
      { hour: 11, amount: 4125.88, transactionCount: 112 },
      { hour: 12, amount: 5677.99, transactionCount: 156 },
      { hour: 13, amount: 6788.11, transactionCount: 187 },
      { hour: 14, amount: 5433.22, transactionCount: 150 },
      { hour: 15, amount: 4322.33, transactionCount: 119 },
      { hour: 16, amount: 4998.44, transactionCount: 138 },
      { hour: 17, amount: 5344.55, transactionCount: 147 },
      { hour: 18, amount: 3389.80, transactionCount: 89 }
    ],
    salesByPaymentMethod: [
      {
        method: 'credit_card',
        amount: 27409.65,
        transactionCount: 752
      },
      {
        method: 'debit_card',
        amount: 10036.21,
        transactionCount: 276
      },
      {
        method: 'cash',
        amount: 4568.28,
        transactionCount: 125
      },
      {
        method: 'gift_card',
        amount: 3668.61,
        transactionCount: 101
      }
    ]
  };
};