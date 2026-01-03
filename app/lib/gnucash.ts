import axios from 'axios';

// GnuCash API Configuration
// Note: GnuCash is typically used with gnucash-rest or piecash for API access
const GNUCASH_API_URL = typeof import.meta !== 'undefined'
  ? (import.meta.env?.VITE_GNUCASH_API_URL || 'http://localhost:5000')
  : process.env.VITE_GNUCASH_API_URL || 'http://localhost:5000';

const GNUCASH_API_KEY = typeof import.meta !== 'undefined'
  ? (import.meta.env?.VITE_GNUCASH_API_KEY || '')
  : process.env.VITE_GNUCASH_API_KEY || '';

const GNUCASH_BOOK_ID = typeof import.meta !== 'undefined'
  ? (import.meta.env?.VITE_GNUCASH_BOOK_ID || 'default')
  : process.env.VITE_GNUCASH_BOOK_ID || 'default';

// Axios client
const gnucashApi = axios.create({
  baseURL: GNUCASH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth interceptor
gnucashApi.interceptors.request.use((config) => {
  if (GNUCASH_API_KEY) {
    config.headers['X-API-Key'] = GNUCASH_API_KEY;
  }
  return config;
});

// ==================== Types ====================

export type AccountType =
  | 'ASSET'
  | 'LIABILITY'
  | 'EQUITY'
  | 'INCOME'
  | 'EXPENSE'
  | 'BANK'
  | 'CASH'
  | 'CREDIT'
  | 'RECEIVABLE'
  | 'PAYABLE';

export interface GnuCashAccount {
  id: string;
  guid: string;
  name: string;
  fullName: string;
  type: AccountType;
  commodity: string; // Currency code (e.g., 'USD')
  parentId: string | null;
  description: string;
  balance: number;
  reconciledBalance: number;
  placeholder: boolean;
  hidden: boolean;
  children?: GnuCashAccount[];
}

export interface GnuCashSplit {
  id: string;
  guid: string;
  accountId: string;
  accountName: string;
  amount: number;
  value: number;
  memo: string;
  reconcileState: 'n' | 'c' | 'y'; // not reconciled, cleared, reconciled
}

export interface GnuCashTransaction {
  id: string;
  guid: string;
  date: string;
  dateEntered: string;
  description: string;
  num: string; // Check number or reference
  currency: string;
  splits: GnuCashSplit[];
  notes?: string;
  isBalanced: boolean;
}

export interface GnuCashCustomer {
  id: string;
  guid: string;
  name: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  taxIncluded: boolean;
  active: boolean;
  balance: number;
  creditLimit: number;
  terms: string;
  notes?: string;
}

export interface GnuCashVendor {
  id: string;
  guid: string;
  name: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  taxIncluded: boolean;
  active: boolean;
  balance: number;
  terms: string;
  notes?: string;
}

export interface GnuCashInvoice {
  id: string;
  guid: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  dateOpened: string;
  dateDue: string;
  datePosted?: string;
  currency: string;
  billingId?: string;
  notes?: string;
  active: boolean;
  entries: GnuCashInvoiceEntry[];
  totalAmount: number;
  amountPaid: number;
  amountDue: number;
  status: 'draft' | 'posted' | 'paid' | 'overdue';
}

export interface GnuCashInvoiceEntry {
  id: string;
  description: string;
  accountId: string;
  accountName: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  taxable: boolean;
  taxIncluded: boolean;
  taxAmount: number;
  total: number;
}

export interface GnuCashBill {
  id: string;
  guid: string;
  billNumber: string;
  vendorId: string;
  vendorName: string;
  dateOpened: string;
  dateDue: string;
  datePosted?: string;
  currency: string;
  notes?: string;
  entries: GnuCashInvoiceEntry[];
  totalAmount: number;
  amountPaid: number;
  amountDue: number;
  status: 'draft' | 'posted' | 'paid' | 'overdue';
}

export interface GnuCashBudget {
  id: string;
  guid: string;
  name: string;
  description: string;
  numPeriods: number;
  periodType: 'month' | 'quarter' | 'year';
  startDate: string;
  entries: GnuCashBudgetEntry[];
}

export interface GnuCashBudgetEntry {
  accountId: string;
  accountName: string;
  periods: { period: number; amount: number }[];
}

export interface FinancialReport {
  reportType: 'profit_loss' | 'balance_sheet' | 'cash_flow' | 'trial_balance';
  title: string;
  startDate: string;
  endDate: string;
  currency: string;
  generatedAt: string;
}

export interface ProfitLossReport extends FinancialReport {
  reportType: 'profit_loss';
  income: {
    accounts: { name: string; amount: number }[];
    total: number;
  };
  expenses: {
    accounts: { name: string; amount: number }[];
    total: number;
  };
  netIncome: number;
}

export interface BalanceSheetReport extends FinancialReport {
  reportType: 'balance_sheet';
  assets: {
    current: { name: string; amount: number }[];
    fixed: { name: string; amount: number }[];
    totalCurrent: number;
    totalFixed: number;
    total: number;
  };
  liabilities: {
    current: { name: string; amount: number }[];
    longTerm: { name: string; amount: number }[];
    totalCurrent: number;
    totalLongTerm: number;
    total: number;
  };
  equity: {
    accounts: { name: string; amount: number }[];
    retainedEarnings: number;
    total: number;
  };
  totalLiabilitiesAndEquity: number;
}

export interface CashFlowReport extends FinancialReport {
  reportType: 'cash_flow';
  operatingActivities: {
    items: { name: string; amount: number }[];
    total: number;
  };
  investingActivities: {
    items: { name: string; amount: number }[];
    total: number;
  };
  financingActivities: {
    items: { name: string; amount: number }[];
    total: number;
  };
  netCashChange: number;
  beginningCash: number;
  endingCash: number;
}

export interface TrialBalanceReport extends FinancialReport {
  reportType: 'trial_balance';
  accounts: {
    accountName: string;
    accountType: AccountType;
    debit: number;
    credit: number;
  }[];
  totalDebits: number;
  totalCredits: number;
  isBalanced: boolean;
}

export interface GnuCashSyncResult {
  success: boolean;
  message: string;
  syncedAt: string;
  details?: {
    accountsSynced: number;
    transactionsSynced: number;
    customersSynced: number;
    invoicesSynced: number;
  };
}

export interface GnuCashConnectionStatus {
  connected: boolean;
  bookName: string;
  lastSync: string | null;
  version: string;
  accounts: number;
  transactions: number;
}

// ==================== API Functions ====================

export async function getConnectionStatus(): Promise<GnuCashConnectionStatus> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockConnectionStatus();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/status`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GnuCash status:', error);
    return getMockConnectionStatus();
  }
}

export async function getAccounts(): Promise<GnuCashAccount[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockAccounts();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/accounts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    return getMockAccounts();
  }
}

export async function getAccountById(accountId: string): Promise<GnuCashAccount | null> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      const accounts = getMockAccounts();
      return accounts.find(a => a.id === accountId) || null;
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/accounts/${accountId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account:', error);
    return null;
  }
}

export async function getTransactions(params?: {
  startDate?: string;
  endDate?: string;
  accountId?: string;
  limit?: number;
}): Promise<GnuCashTransaction[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockTransactions();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/transactions`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return getMockTransactions();
  }
}

export async function createTransaction(transaction: Omit<GnuCashTransaction, 'id' | 'guid' | 'dateEntered' | 'isBalanced'>): Promise<GnuCashTransaction | null> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      console.log('Mock: Creating transaction', transaction);
      return { ...transaction, id: `txn-${Date.now()}`, guid: `guid-${Date.now()}`, dateEntered: new Date().toISOString(), isBalanced: true } as GnuCashTransaction;
    }
    const response = await gnucashApi.post(`/books/${GNUCASH_BOOK_ID}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    return null;
  }
}

export async function getCustomers(): Promise<GnuCashCustomer[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockCustomers();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    return getMockCustomers();
  }
}

export async function getVendors(): Promise<GnuCashVendor[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockVendors();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/vendors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return getMockVendors();
  }
}

export async function getInvoices(status?: string): Promise<GnuCashInvoice[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockInvoices();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/invoices`, { params: { status } });
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return getMockInvoices();
  }
}

export async function getBills(status?: string): Promise<GnuCashBill[]> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockBills();
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/bills`, { params: { status } });
    return response.data;
  } catch (error) {
    console.error('Error fetching bills:', error);
    return getMockBills();
  }
}

export async function getProfitLossReport(startDate: string, endDate: string): Promise<ProfitLossReport> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockProfitLossReport(startDate, endDate);
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/reports/profit-loss`, {
      params: { startDate, endDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching P&L report:', error);
    return getMockProfitLossReport(startDate, endDate);
  }
}

export async function getBalanceSheetReport(asOfDate: string): Promise<BalanceSheetReport> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockBalanceSheetReport(asOfDate);
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/reports/balance-sheet`, {
      params: { asOfDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    return getMockBalanceSheetReport(asOfDate);
  }
}

export async function getCashFlowReport(startDate: string, endDate: string): Promise<CashFlowReport> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockCashFlowReport(startDate, endDate);
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/reports/cash-flow`, {
      params: { startDate, endDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cash flow report:', error);
    return getMockCashFlowReport(startDate, endDate);
  }
}

export async function getTrialBalanceReport(asOfDate: string): Promise<TrialBalanceReport> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return getMockTrialBalanceReport(asOfDate);
    }
    const response = await gnucashApi.get(`/books/${GNUCASH_BOOK_ID}/reports/trial-balance`, {
      params: { asOfDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trial balance:', error);
    return getMockTrialBalanceReport(asOfDate);
  }
}

export async function syncGnuCashData(): Promise<GnuCashSyncResult> {
  try {
    if (!GNUCASH_API_URL || !GNUCASH_API_KEY) {
      return {
        success: true,
        message: 'Mock sync completed successfully',
        syncedAt: new Date().toISOString(),
        details: {
          accountsSynced: 45,
          transactionsSynced: 1250,
          customersSynced: 28,
          invoicesSynced: 156
        }
      };
    }
    const response = await gnucashApi.post(`/books/${GNUCASH_BOOK_ID}/sync`);
    return response.data;
  } catch (error) {
    console.error('Error syncing GnuCash data:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Sync failed',
      syncedAt: new Date().toISOString()
    };
  }
}

// ==================== Mock Data ====================

function getMockConnectionStatus(): GnuCashConnectionStatus {
  return {
    connected: true,
    bookName: 'Enterprise Accounts',
    lastSync: new Date(Date.now() - 3600000).toISOString(),
    version: '4.14',
    accounts: 45,
    transactions: 1250
  };
}

export function getMockAccounts(): GnuCashAccount[] {
  return [
    // Assets
    { id: 'acc-1', guid: 'guid-1', name: 'Assets', fullName: 'Assets', type: 'ASSET', commodity: 'USD', parentId: null, description: 'All assets', balance: 485000, reconciledBalance: 485000, placeholder: true, hidden: false },
    { id: 'acc-2', guid: 'guid-2', name: 'Current Assets', fullName: 'Assets:Current Assets', type: 'ASSET', commodity: 'USD', parentId: 'acc-1', description: 'Current assets', balance: 285000, reconciledBalance: 285000, placeholder: true, hidden: false },
    { id: 'acc-3', guid: 'guid-3', name: 'Checking Account', fullName: 'Assets:Current Assets:Checking', type: 'BANK', commodity: 'USD', parentId: 'acc-2', description: 'Primary checking', balance: 125000, reconciledBalance: 124500, placeholder: false, hidden: false },
    { id: 'acc-4', guid: 'guid-4', name: 'Savings Account', fullName: 'Assets:Current Assets:Savings', type: 'BANK', commodity: 'USD', parentId: 'acc-2', description: 'Savings account', balance: 85000, reconciledBalance: 85000, placeholder: false, hidden: false },
    { id: 'acc-5', guid: 'guid-5', name: 'Accounts Receivable', fullName: 'Assets:Current Assets:AR', type: 'RECEIVABLE', commodity: 'USD', parentId: 'acc-2', description: 'Customer receivables', balance: 75000, reconciledBalance: 75000, placeholder: false, hidden: false },
    { id: 'acc-6', guid: 'guid-6', name: 'Petty Cash', fullName: 'Assets:Current Assets:Petty Cash', type: 'CASH', commodity: 'USD', parentId: 'acc-2', description: 'Petty cash fund', balance: 500, reconciledBalance: 500, placeholder: false, hidden: false },
    { id: 'acc-7', guid: 'guid-7', name: 'Fixed Assets', fullName: 'Assets:Fixed Assets', type: 'ASSET', commodity: 'USD', parentId: 'acc-1', description: 'Long-term assets', balance: 200000, reconciledBalance: 200000, placeholder: true, hidden: false },
    { id: 'acc-8', guid: 'guid-8', name: 'Equipment', fullName: 'Assets:Fixed Assets:Equipment', type: 'ASSET', commodity: 'USD', parentId: 'acc-7', description: 'Office equipment', balance: 75000, reconciledBalance: 75000, placeholder: false, hidden: false },
    { id: 'acc-9', guid: 'guid-9', name: 'Vehicles', fullName: 'Assets:Fixed Assets:Vehicles', type: 'ASSET', commodity: 'USD', parentId: 'acc-7', description: 'Company vehicles', balance: 45000, reconciledBalance: 45000, placeholder: false, hidden: false },
    { id: 'acc-10', guid: 'guid-10', name: 'Building', fullName: 'Assets:Fixed Assets:Building', type: 'ASSET', commodity: 'USD', parentId: 'acc-7', description: 'Office building', balance: 80000, reconciledBalance: 80000, placeholder: false, hidden: false },
    // Liabilities
    { id: 'acc-11', guid: 'guid-11', name: 'Liabilities', fullName: 'Liabilities', type: 'LIABILITY', commodity: 'USD', parentId: null, description: 'All liabilities', balance: 135000, reconciledBalance: 135000, placeholder: true, hidden: false },
    { id: 'acc-12', guid: 'guid-12', name: 'Accounts Payable', fullName: 'Liabilities:AP', type: 'PAYABLE', commodity: 'USD', parentId: 'acc-11', description: 'Vendor payables', balance: 45000, reconciledBalance: 45000, placeholder: false, hidden: false },
    { id: 'acc-13', guid: 'guid-13', name: 'Credit Card', fullName: 'Liabilities:Credit Card', type: 'CREDIT', commodity: 'USD', parentId: 'acc-11', description: 'Business credit card', balance: 12000, reconciledBalance: 12000, placeholder: false, hidden: false },
    { id: 'acc-14', guid: 'guid-14', name: 'Bank Loan', fullName: 'Liabilities:Bank Loan', type: 'LIABILITY', commodity: 'USD', parentId: 'acc-11', description: 'Business loan', balance: 78000, reconciledBalance: 78000, placeholder: false, hidden: false },
    // Equity
    { id: 'acc-15', guid: 'guid-15', name: 'Equity', fullName: 'Equity', type: 'EQUITY', commodity: 'USD', parentId: null, description: 'Owner equity', balance: 350000, reconciledBalance: 350000, placeholder: true, hidden: false },
    { id: 'acc-16', guid: 'guid-16', name: 'Opening Balance', fullName: 'Equity:Opening Balance', type: 'EQUITY', commodity: 'USD', parentId: 'acc-15', description: 'Opening balances', balance: 250000, reconciledBalance: 250000, placeholder: false, hidden: false },
    { id: 'acc-17', guid: 'guid-17', name: 'Retained Earnings', fullName: 'Equity:Retained Earnings', type: 'EQUITY', commodity: 'USD', parentId: 'acc-15', description: 'Retained earnings', balance: 100000, reconciledBalance: 100000, placeholder: false, hidden: false },
    // Income
    { id: 'acc-18', guid: 'guid-18', name: 'Income', fullName: 'Income', type: 'INCOME', commodity: 'USD', parentId: null, description: 'All income', balance: 425000, reconciledBalance: 425000, placeholder: true, hidden: false },
    { id: 'acc-19', guid: 'guid-19', name: 'Sales Revenue', fullName: 'Income:Sales', type: 'INCOME', commodity: 'USD', parentId: 'acc-18', description: 'Product sales', balance: 380000, reconciledBalance: 380000, placeholder: false, hidden: false },
    { id: 'acc-20', guid: 'guid-20', name: 'Service Revenue', fullName: 'Income:Services', type: 'INCOME', commodity: 'USD', parentId: 'acc-18', description: 'Service income', balance: 35000, reconciledBalance: 35000, placeholder: false, hidden: false },
    { id: 'acc-21', guid: 'guid-21', name: 'Interest Income', fullName: 'Income:Interest', type: 'INCOME', commodity: 'USD', parentId: 'acc-18', description: 'Bank interest', balance: 10000, reconciledBalance: 10000, placeholder: false, hidden: false },
    // Expenses
    { id: 'acc-22', guid: 'guid-22', name: 'Expenses', fullName: 'Expenses', type: 'EXPENSE', commodity: 'USD', parentId: null, description: 'All expenses', balance: 285000, reconciledBalance: 285000, placeholder: true, hidden: false },
    { id: 'acc-23', guid: 'guid-23', name: 'Cost of Goods Sold', fullName: 'Expenses:COGS', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Product costs', balance: 152000, reconciledBalance: 152000, placeholder: false, hidden: false },
    { id: 'acc-24', guid: 'guid-24', name: 'Payroll', fullName: 'Expenses:Payroll', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Employee wages', balance: 85000, reconciledBalance: 85000, placeholder: false, hidden: false },
    { id: 'acc-25', guid: 'guid-25', name: 'Rent', fullName: 'Expenses:Rent', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Office rent', balance: 24000, reconciledBalance: 24000, placeholder: false, hidden: false },
    { id: 'acc-26', guid: 'guid-26', name: 'Utilities', fullName: 'Expenses:Utilities', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Utility bills', balance: 8500, reconciledBalance: 8500, placeholder: false, hidden: false },
    { id: 'acc-27', guid: 'guid-27', name: 'Marketing', fullName: 'Expenses:Marketing', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Marketing expenses', balance: 12000, reconciledBalance: 12000, placeholder: false, hidden: false },
    { id: 'acc-28', guid: 'guid-28', name: 'Insurance', fullName: 'Expenses:Insurance', type: 'EXPENSE', commodity: 'USD', parentId: 'acc-22', description: 'Business insurance', balance: 3500, reconciledBalance: 3500, placeholder: false, hidden: false }
  ];
}

export function getMockTransactions(): GnuCashTransaction[] {
  const transactions: GnuCashTransaction[] = [];
  const descriptions = [
    'Customer payment received',
    'Office supplies purchase',
    'Monthly rent payment',
    'Utility bill payment',
    'Product sale',
    'Vendor payment',
    'Bank transfer',
    'Payroll expense',
    'Marketing expense',
    'Equipment purchase'
  ];

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const amount = Math.floor(Math.random() * 5000) + 100;

    transactions.push({
      id: `txn-${i + 1}`,
      guid: `guid-txn-${i + 1}`,
      date: date.toISOString(),
      dateEntered: date.toISOString(),
      description: descriptions[i % descriptions.length],
      num: `${1000 + i}`,
      currency: 'USD',
      splits: [
        {
          id: `split-${i}-1`,
          guid: `guid-split-${i}-1`,
          accountId: 'acc-3',
          accountName: 'Checking Account',
          amount: i % 2 === 0 ? amount : -amount,
          value: i % 2 === 0 ? amount : -amount,
          memo: '',
          reconcileState: i % 3 === 0 ? 'y' : 'c'
        },
        {
          id: `split-${i}-2`,
          guid: `guid-split-${i}-2`,
          accountId: i % 2 === 0 ? 'acc-19' : 'acc-23',
          accountName: i % 2 === 0 ? 'Sales Revenue' : 'Cost of Goods Sold',
          amount: i % 2 === 0 ? -amount : amount,
          value: i % 2 === 0 ? -amount : amount,
          memo: '',
          reconcileState: i % 3 === 0 ? 'y' : 'c'
        }
      ],
      isBalanced: true
    });
  }

  return transactions;
}

export function getMockCustomers(): GnuCashCustomer[] {
  return [
    { id: 'cust-1', guid: 'guid-cust-1', name: 'Acme Corporation', address: { line1: '123 Business Ave', city: 'New York', state: 'NY', postalCode: '10001', country: 'USA' }, phone: '(212) 555-0100', email: 'billing@acme.com', taxIncluded: false, active: true, balance: 15000, creditLimit: 50000, terms: 'Net 30', notes: 'Preferred customer' },
    { id: 'cust-2', guid: 'guid-cust-2', name: 'TechStart Inc', address: { line1: '456 Innovation Blvd', city: 'San Francisco', state: 'CA', postalCode: '94102', country: 'USA' }, phone: '(415) 555-0200', email: 'ap@techstart.io', taxIncluded: false, active: true, balance: 8500, creditLimit: 25000, terms: 'Net 15' },
    { id: 'cust-3', guid: 'guid-cust-3', name: 'Global Retail Ltd', address: { line1: '789 Commerce St', city: 'Chicago', state: 'IL', postalCode: '60601', country: 'USA' }, phone: '(312) 555-0300', email: 'finance@globalretail.com', taxIncluded: true, active: true, balance: 22000, creditLimit: 75000, terms: 'Net 45' },
    { id: 'cust-4', guid: 'guid-cust-4', name: 'Small Biz Solutions', address: { line1: '321 Main St', city: 'Austin', state: 'TX', postalCode: '78701', country: 'USA' }, phone: '(512) 555-0400', email: 'owner@smallbiz.com', taxIncluded: false, active: true, balance: 3200, creditLimit: 10000, terms: 'Due on Receipt' },
    { id: 'cust-5', guid: 'guid-cust-5', name: 'Enterprise Systems', address: { line1: '555 Corporate Pkwy', city: 'Seattle', state: 'WA', postalCode: '98101', country: 'USA' }, phone: '(206) 555-0500', email: 'accounts@enterprise.com', taxIncluded: false, active: true, balance: 45000, creditLimit: 100000, terms: 'Net 60' }
  ];
}

export function getMockVendors(): GnuCashVendor[] {
  return [
    { id: 'vend-1', guid: 'guid-vend-1', name: 'Office Supplies Co', address: { line1: '100 Supply Lane', city: 'Denver', state: 'CO', postalCode: '80202', country: 'USA' }, phone: '(303) 555-1000', email: 'orders@officesupplies.com', taxIncluded: false, active: true, balance: 2500, terms: 'Net 30' },
    { id: 'vend-2', guid: 'guid-vend-2', name: 'Tech Hardware Inc', address: { line1: '200 Tech Park', city: 'San Jose', state: 'CA', postalCode: '95110', country: 'USA' }, phone: '(408) 555-2000', email: 'sales@techhardware.com', taxIncluded: false, active: true, balance: 12000, terms: 'Net 45' },
    { id: 'vend-3', guid: 'guid-vend-3', name: 'Cloud Services LLC', address: { line1: '300 Cloud Ave', city: 'Portland', state: 'OR', postalCode: '97201', country: 'USA' }, phone: '(503) 555-3000', email: 'billing@cloudservices.io', taxIncluded: false, active: true, balance: 1500, terms: 'Net 15' },
    { id: 'vend-4', guid: 'guid-vend-4', name: 'Shipping Partners', address: { line1: '400 Logistics Blvd', city: 'Memphis', state: 'TN', postalCode: '38103', country: 'USA' }, phone: '(901) 555-4000', email: 'accounts@shippingpartners.com', taxIncluded: false, active: true, balance: 8500, terms: 'Net 30' }
  ];
}

export function getMockInvoices(): GnuCashInvoice[] {
  return [
    {
      id: 'inv-1', guid: 'guid-inv-1', invoiceNumber: 'INV-2024-001', customerId: 'cust-1', customerName: 'Acme Corporation',
      dateOpened: '2024-01-05', dateDue: '2024-02-05', datePosted: '2024-01-05', currency: 'USD', active: true,
      entries: [
        { id: 'entry-1', description: 'Enterprise Software License', accountId: 'acc-19', accountName: 'Sales Revenue', quantity: 1, unitPrice: 12000, discount: 0, taxable: true, taxIncluded: false, taxAmount: 960, total: 12960 }
      ],
      totalAmount: 12960, amountPaid: 0, amountDue: 12960, status: 'posted'
    },
    {
      id: 'inv-2', guid: 'guid-inv-2', invoiceNumber: 'INV-2024-002', customerId: 'cust-2', customerName: 'TechStart Inc',
      dateOpened: '2024-01-10', dateDue: '2024-01-25', datePosted: '2024-01-10', currency: 'USD', active: true,
      entries: [
        { id: 'entry-2', description: 'Consulting Services', accountId: 'acc-20', accountName: 'Service Revenue', quantity: 20, unitPrice: 150, discount: 10, taxable: true, taxIncluded: false, taxAmount: 216, total: 2916 }
      ],
      totalAmount: 2916, amountPaid: 2916, amountDue: 0, status: 'paid'
    },
    {
      id: 'inv-3', guid: 'guid-inv-3', invoiceNumber: 'INV-2024-003', customerId: 'cust-3', customerName: 'Global Retail Ltd',
      dateOpened: '2024-01-15', dateDue: '2024-03-01', currency: 'USD', active: true,
      entries: [
        { id: 'entry-3', description: 'Product Bundle A', accountId: 'acc-19', accountName: 'Sales Revenue', quantity: 50, unitPrice: 200, discount: 5, taxable: true, taxIncluded: false, taxAmount: 760, total: 10260 },
        { id: 'entry-4', description: 'Implementation Support', accountId: 'acc-20', accountName: 'Service Revenue', quantity: 10, unitPrice: 175, discount: 0, taxable: true, taxIncluded: false, taxAmount: 140, total: 1890 }
      ],
      totalAmount: 12150, amountPaid: 5000, amountDue: 7150, status: 'posted'
    }
  ];
}

export function getMockBills(): GnuCashBill[] {
  return [
    {
      id: 'bill-1', guid: 'guid-bill-1', billNumber: 'BILL-001', vendorId: 'vend-1', vendorName: 'Office Supplies Co',
      dateOpened: '2024-01-08', dateDue: '2024-02-08', datePosted: '2024-01-08', currency: 'USD',
      entries: [
        { id: 'b-entry-1', description: 'Office Supplies Q1', accountId: 'acc-23', accountName: 'Cost of Goods Sold', quantity: 1, unitPrice: 2500, discount: 0, taxable: true, taxIncluded: false, taxAmount: 200, total: 2700 }
      ],
      totalAmount: 2700, amountPaid: 0, amountDue: 2700, status: 'posted'
    },
    {
      id: 'bill-2', guid: 'guid-bill-2', billNumber: 'BILL-002', vendorId: 'vend-2', vendorName: 'Tech Hardware Inc',
      dateOpened: '2024-01-12', dateDue: '2024-02-26', currency: 'USD',
      entries: [
        { id: 'b-entry-2', description: 'Server Equipment', accountId: 'acc-8', accountName: 'Equipment', quantity: 2, unitPrice: 5000, discount: 0, taxable: true, taxIncluded: false, taxAmount: 800, total: 10800 }
      ],
      totalAmount: 10800, amountPaid: 10800, amountDue: 0, status: 'paid'
    }
  ];
}

export function getMockProfitLossReport(startDate: string, endDate: string): ProfitLossReport {
  return {
    reportType: 'profit_loss',
    title: 'Profit & Loss Statement',
    startDate,
    endDate,
    currency: 'USD',
    generatedAt: new Date().toISOString(),
    income: {
      accounts: [
        { name: 'Sales Revenue', amount: 380000 },
        { name: 'Service Revenue', amount: 35000 },
        { name: 'Interest Income', amount: 10000 }
      ],
      total: 425000
    },
    expenses: {
      accounts: [
        { name: 'Cost of Goods Sold', amount: 152000 },
        { name: 'Payroll', amount: 85000 },
        { name: 'Rent', amount: 24000 },
        { name: 'Utilities', amount: 8500 },
        { name: 'Marketing', amount: 12000 },
        { name: 'Insurance', amount: 3500 }
      ],
      total: 285000
    },
    netIncome: 140000
  };
}

export function getMockBalanceSheetReport(asOfDate: string): BalanceSheetReport {
  return {
    reportType: 'balance_sheet',
    title: 'Balance Sheet',
    startDate: asOfDate,
    endDate: asOfDate,
    currency: 'USD',
    generatedAt: new Date().toISOString(),
    assets: {
      current: [
        { name: 'Checking Account', amount: 125000 },
        { name: 'Savings Account', amount: 85000 },
        { name: 'Accounts Receivable', amount: 75000 },
        { name: 'Petty Cash', amount: 500 }
      ],
      fixed: [
        { name: 'Equipment', amount: 75000 },
        { name: 'Vehicles', amount: 45000 },
        { name: 'Building', amount: 80000 }
      ],
      totalCurrent: 285500,
      totalFixed: 200000,
      total: 485500
    },
    liabilities: {
      current: [
        { name: 'Accounts Payable', amount: 45000 },
        { name: 'Credit Card', amount: 12000 }
      ],
      longTerm: [
        { name: 'Bank Loan', amount: 78000 }
      ],
      totalCurrent: 57000,
      totalLongTerm: 78000,
      total: 135000
    },
    equity: {
      accounts: [
        { name: 'Opening Balance', amount: 250000 }
      ],
      retainedEarnings: 100500,
      total: 350500
    },
    totalLiabilitiesAndEquity: 485500
  };
}

export function getMockCashFlowReport(startDate: string, endDate: string): CashFlowReport {
  return {
    reportType: 'cash_flow',
    title: 'Statement of Cash Flows',
    startDate,
    endDate,
    currency: 'USD',
    generatedAt: new Date().toISOString(),
    operatingActivities: {
      items: [
        { name: 'Net Income', amount: 140000 },
        { name: 'Depreciation', amount: 15000 },
        { name: 'Increase in Accounts Receivable', amount: -25000 },
        { name: 'Increase in Accounts Payable', amount: 10000 }
      ],
      total: 140000
    },
    investingActivities: {
      items: [
        { name: 'Purchase of Equipment', amount: -35000 },
        { name: 'Sale of Vehicle', amount: 8000 }
      ],
      total: -27000
    },
    financingActivities: {
      items: [
        { name: 'Loan Repayment', amount: -12000 },
        { name: 'Owner Distribution', amount: -25000 }
      ],
      total: -37000
    },
    netCashChange: 76000,
    beginningCash: 134000,
    endingCash: 210000
  };
}

export function getMockTrialBalanceReport(asOfDate: string): TrialBalanceReport {
  return {
    reportType: 'trial_balance',
    title: 'Trial Balance',
    startDate: asOfDate,
    endDate: asOfDate,
    currency: 'USD',
    generatedAt: new Date().toISOString(),
    accounts: [
      { accountName: 'Checking Account', accountType: 'BANK', debit: 125000, credit: 0 },
      { accountName: 'Savings Account', accountType: 'BANK', debit: 85000, credit: 0 },
      { accountName: 'Accounts Receivable', accountType: 'RECEIVABLE', debit: 75000, credit: 0 },
      { accountName: 'Equipment', accountType: 'ASSET', debit: 75000, credit: 0 },
      { accountName: 'Vehicles', accountType: 'ASSET', debit: 45000, credit: 0 },
      { accountName: 'Building', accountType: 'ASSET', debit: 80000, credit: 0 },
      { accountName: 'Accounts Payable', accountType: 'PAYABLE', debit: 0, credit: 45000 },
      { accountName: 'Credit Card', accountType: 'CREDIT', debit: 0, credit: 12000 },
      { accountName: 'Bank Loan', accountType: 'LIABILITY', debit: 0, credit: 78000 },
      { accountName: 'Opening Balance', accountType: 'EQUITY', debit: 0, credit: 250000 },
      { accountName: 'Retained Earnings', accountType: 'EQUITY', debit: 0, credit: 100000 },
      { accountName: 'Sales Revenue', accountType: 'INCOME', debit: 0, credit: 380000 },
      { accountName: 'Service Revenue', accountType: 'INCOME', debit: 0, credit: 35000 },
      { accountName: 'Cost of Goods Sold', accountType: 'EXPENSE', debit: 152000, credit: 0 },
      { accountName: 'Payroll', accountType: 'EXPENSE', debit: 85000, credit: 0 },
      { accountName: 'Rent', accountType: 'EXPENSE', debit: 24000, credit: 0 },
      { accountName: 'Utilities', accountType: 'EXPENSE', debit: 8500, credit: 0 },
      { accountName: 'Marketing', accountType: 'EXPENSE', debit: 12000, credit: 0 },
      { accountName: 'Insurance', accountType: 'EXPENSE', debit: 3500, credit: 0 }
    ],
    totalDebits: 900000,
    totalCredits: 900000,
    isBalanced: true
  };
}
