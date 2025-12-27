import axios from 'axios';
import { supabase } from './supabase';

// Paystack API configuration
const PAYSTACK_SECRET_KEY = import.meta.env.VITE_PAYSTACK_SECRET_KEY || '';
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

// Initialize axios instance for Paystack API
const paystackApi = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Types
export interface PaystackCustomer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  metadata?: Record<string, any>;
  risk_action: 'default' | 'allow' | 'deny';
  created_at: string;
  updated_at: string;
}

export interface PaystackTransaction {
  id: number;
  reference: string;
  amount: number;
  currency: string;
  status: 'success' | 'failed' | 'abandoned';
  paid_at: string | null;
  channel: string;
  metadata?: Record<string, any>;
  customer: {
    id: number;
    email: string;
    name: string;
    phone?: string;
  };
  created_at: string;
}

export interface PaystackPlan {
  id: number;
  name: string;
  amount: number;
  interval: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'annually';
  currency: string;
  description?: string;
  send_invoices: boolean;
  send_sms: boolean;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaystackSubscription {
  id: number;
  customer: number;
  plan: number;
  status: 'active' | 'cancelled' | 'completed';
  start_date: string;
  next_payment_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaystackTransfer {
  id: number;
  reference: string;
  amount: number;
  currency: string;
  status: 'pending' | 'success' | 'failed';
  recipient: {
    id: number;
    type: 'nuban' | 'mobile_money';
    name: string;
    account_number: string;
    bank_code: string;
    currency: string;
  };
  created_at: string;
  updated_at: string;
}

// API Functions

// Transactions
export const initializeTransaction = async (data: {
  email: string;
  amount: number;
  currency?: string;
  reference?: string;
  callback_url?: string;
  metadata?: Record<string, any>;
}) => {
  try {
    const response = await paystackApi.post('/transaction/initialize', data);
    return response.data.data;
  } catch (error) {
    console.error('Error initializing transaction:', error);
    throw error;
  }
};

export const verifyTransaction = async (reference: string) => {
  try {
    const response = await paystackApi.get(`/transaction/verify/${reference}`);
    return response.data.data as PaystackTransaction;
  } catch (error) {
    console.error('Error verifying transaction:', error);
    throw error;
  }
};

export const listTransactions = async (params?: {
  perPage?: number;
  page?: number;
  customer?: number;
  status?: string;
  from?: string;
  to?: string;
}) => {
  try {
    const response = await paystackApi.get('/transaction', { params });
    return response.data.data as PaystackTransaction[];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

// Customers
export const createCustomer = async (data: {
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  metadata?: Record<string, any>;
}) => {
  try {
    const response = await paystackApi.post('/customer', data);
    return response.data.data as PaystackCustomer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

export const getCustomer = async (email_or_id: string | number) => {
  try {
    const response = await paystackApi.get(`/customer/${email_or_id}`);
    return response.data.data as PaystackCustomer;
  } catch (error) {
    console.error('Error fetching customer:', error);
    return null;
  }
};

// Plans
export const createPlan = async (data: {
  name: string;
  amount: number;
  interval: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'annually';
  description?: string;
  currency?: string;
}) => {
  try {
    const response = await paystackApi.post('/plan', data);
    return response.data.data as PaystackPlan;
  } catch (error) {
    console.error('Error creating plan:', error);
    throw error;
  }
};

export const listPlans = async () => {
  try {
    const response = await paystackApi.get('/plan');
    return response.data.data as PaystackPlan[];
  } catch (error) {
    console.error('Error fetching plans:', error);
    return [];
  }
};

// Subscriptions
export const createSubscription = async (data: {
  customer: string;
  plan: string;
  start_date?: string;
}) => {
  try {
    const response = await paystackApi.post('/subscription', data);
    return response.data.data as PaystackSubscription;
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
};

export const listSubscriptions = async () => {
  try {
    const response = await paystackApi.get('/subscription');
    return response.data.data as PaystackSubscription[];
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return [];
  }
};

// Transfers
export const initiateTransfer = async (data: {
  source: string;
  amount: number;
  recipient: string;
  reason?: string;
  currency?: string;
}) => {
  try {
    const response = await paystackApi.post('/transfer', data);
    return response.data.data as PaystackTransfer;
  } catch (error) {
    console.error('Error initiating transfer:', error);
    throw error;
  }
};

// Webhook handling
export const handleWebhook = async (
  signature: string,
  payload: any
) => {
  try {
    // Verify webhook signature
    // In production, implement proper signature verification

    const event = payload;

    // Handle different event types
    switch (event.event) {
      case 'charge.success':
        await handleSuccessfulCharge(event.data);
        break;
      case 'subscription.create':
        await handleSubscriptionCreated(event.data);
        break;
      case 'transfer.success':
        await handleTransferSuccess(event.data);
        break;
      // Add more event handlers as needed
    }

    return { success: true };
  } catch (error) {
    console.error('Error handling Paystack webhook:', error);
    throw error;
  }
};

// Webhook event handlers
const handleSuccessfulCharge = async (data: any) => {
  // Update order status in your database
  const { error } = await supabase
    .from('orders')
    .update({ 
      status: 'paid',
      paystack_reference: data.reference,
      payment_date: new Date().toISOString()
    })
    .eq('paystack_reference', data.reference);

  if (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

const handleSubscriptionCreated = async (data: any) => {
  // Store subscription details in your database
  const { error } = await supabase
    .from('subscriptions')
    .insert({
      paystack_subscription_id: data.id,
      customer_id: data.customer.id,
      plan_id: data.plan.id,
      status: data.status,
      start_date: data.start_date,
      next_payment_date: data.next_payment_date
    });

  if (error) {
    console.error('Error storing subscription:', error);
    throw error;
  }
};

const handleTransferSuccess = async (data: any) => {
  // Update transfer status in your database
  const { error } = await supabase
    .from('transfers')
    .update({
      status: 'success',
      completed_at: new Date().toISOString()
    })
    .eq('paystack_reference', data.reference);

  if (error) {
    console.error('Error updating transfer status:', error);
    throw error;
  }
};

// Export public key for frontend use
export const PAYSTACK_PUBLIC_KEY_EXPORT = PAYSTACK_PUBLIC_KEY;