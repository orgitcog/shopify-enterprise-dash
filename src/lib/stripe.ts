import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import { supabase } from './supabase';

// Initialize Stripe
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || '';
const stripeSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY || '';

export const stripePromise = loadStripe(stripePublicKey);
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
});

// Types
export interface StripeCustomer {
  id: string;
  name: string;
  email: string;
  description?: string;
  created: number;
  currency?: string;
  default_source?: string;
  invoice_prefix: string;
  preferred_locales: string[];
  metadata: Record<string, string>;
}

export interface StripeProduct {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  created: number;
  default_price?: string;
  images: string[];
  metadata: Record<string, string>;
  unit_label?: string;
}

export interface StripePrice {
  id: string;
  product: string;
  active: boolean;
  currency: string;
  unit_amount: number;
  type: 'one_time' | 'recurring';
  recurring?: {
    interval: 'day' | 'week' | 'month' | 'year';
    interval_count: number;
  };
  metadata: Record<string, string>;
}

export interface StripeSubscription {
  id: string;
  customer: string;
  status: 'active' | 'past_due' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'unpaid';
  current_period_start: number;
  current_period_end: number;
  items: {
    data: Array<{
      id: string;
      price: StripePrice;
      quantity: number;
    }>;
  };
  metadata: Record<string, string>;
}

export interface StripeInvoice {
  id: string;
  customer: string;
  status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
  amount_due: number;
  amount_paid: number;
  currency: string;
  created: number;
  due_date?: number;
  subscription?: string;
  metadata: Record<string, string>;
}

// API Functions

// Customers
export const createCustomer = async (data: {
  email: string;
  name?: string;
  metadata?: Record<string, string>;
}): Promise<StripeCustomer> => {
  try {
    const customer = await stripe.customers.create(data);
    return customer as StripeCustomer;
  } catch (error) {
    console.error('Error creating Stripe customer:', error);
    throw error;
  }
};

export const getCustomer = async (customerId: string): Promise<StripeCustomer | null> => {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    return customer as StripeCustomer;
  } catch (error) {
    console.error(`Error fetching Stripe customer ${customerId}:`, error);
    return null;
  }
};

export const updateCustomer = async (
  customerId: string,
  data: Partial<StripeCustomer>
): Promise<StripeCustomer | null> => {
  try {
    const customer = await stripe.customers.update(customerId, data);
    return customer as StripeCustomer;
  } catch (error) {
    console.error(`Error updating Stripe customer ${customerId}:`, error);
    return null;
  }
};

// Products
export const createProduct = async (data: {
  name: string;
  description?: string;
  metadata?: Record<string, string>;
}): Promise<StripeProduct> => {
  try {
    const product = await stripe.products.create(data);
    return product as StripeProduct;
  } catch (error) {
    console.error('Error creating Stripe product:', error);
    throw error;
  }
};

export const getProduct = async (productId: string): Promise<StripeProduct | null> => {
  try {
    const product = await stripe.products.retrieve(productId);
    return product as StripeProduct;
  } catch (error) {
    console.error(`Error fetching Stripe product ${productId}:`, error);
    return null;
  }
};

// Prices
export const createPrice = async (data: {
  product: string;
  unit_amount: number;
  currency: string;
  recurring?: {
    interval: 'day' | 'week' | 'month' | 'year';
    interval_count?: number;
  };
}): Promise<StripePrice> => {
  try {
    const price = await stripe.prices.create(data);
    return price as StripePrice;
  } catch (error) {
    console.error('Error creating Stripe price:', error);
    throw error;
  }
};

export const getPrice = async (priceId: string): Promise<StripePrice | null> => {
  try {
    const price = await stripe.prices.retrieve(priceId);
    return price as StripePrice;
  } catch (error) {
    console.error(`Error fetching Stripe price ${priceId}:`, error);
    return null;
  }
};

// Subscriptions
export const createSubscription = async (data: {
  customer: string;
  items: Array<{ price: string; quantity?: number }>;
}): Promise<StripeSubscription> => {
  try {
    const subscription = await stripe.subscriptions.create(data);
    return subscription as StripeSubscription;
  } catch (error) {
    console.error('Error creating Stripe subscription:', error);
    throw error;
  }
};

export const getSubscription = async (subscriptionId: string): Promise<StripeSubscription | null> => {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    return subscription as StripeSubscription;
  } catch (error) {
    console.error(`Error fetching Stripe subscription ${subscriptionId}:`, error);
    return null;
  }
};

export const cancelSubscription = async (subscriptionId: string): Promise<StripeSubscription | null> => {
  try {
    const subscription = await stripe.subscriptions.cancel(subscriptionId);
    return subscription as StripeSubscription;
  } catch (error) {
    console.error(`Error canceling Stripe subscription ${subscriptionId}:`, error);
    return null;
  }
};

// Invoices
export const getInvoice = async (invoiceId: string): Promise<StripeInvoice | null> => {
  try {
    const invoice = await stripe.invoices.retrieve(invoiceId);
    return invoice as StripeInvoice;
  } catch (error) {
    console.error(`Error fetching Stripe invoice ${invoiceId}:`, error);
    return null;
  }
};

// Payment Intents
export const createPaymentIntent = async (data: {
  amount: number;
  currency: string;
  customer?: string;
  payment_method_types?: string[];
  metadata?: Record<string, string>;
}) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(data);
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

// Webhook handling
export const handleWebhook = async (
  signature: string,
  payload: string | Buffer,
  webhookSecret: string
) => {
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdate(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionCancellation(event.data.object);
        break;
      // Add more event handlers as needed
    }

    return { success: true };
  } catch (error) {
    console.error('Error handling Stripe webhook:', error);
    throw error;
  }
};

// Webhook event handlers
const handlePaymentSuccess = async (paymentIntent: any) => {
  // Update order status in your database
  const { error } = await supabase
    .from('orders')
    .update({ status: 'paid', stripe_payment_id: paymentIntent.id })
    .eq('stripe_payment_intent', paymentIntent.id);

  if (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

const handleSubscriptionUpdate = async (subscription: any) => {
  // Update subscription status in your database
  const { error } = await supabase
    .from('subscriptions')
    .update({
      status: subscription.status,
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString()
    })
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    console.error('Error updating subscription status:', error);
    throw error;
  }
};

const handleSubscriptionCancellation = async (subscription: any) => {
  // Update subscription status in your database
  const { error } = await supabase
    .from('subscriptions')
    .update({
      status: 'cancelled',
      cancelled_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    console.error('Error updating subscription cancellation:', error);
    throw error;
  }
};