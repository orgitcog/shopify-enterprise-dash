import { supabase } from './supabase';
import { format } from 'date-fns';

// Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status: 'active' | 'inactive' | 'lead';
  source: string;
  assigned_to?: string;
  tags?: string[];
  created_at: string;
  last_contacted?: string;
  notes?: string;
  total_orders?: number;
  total_spent?: number;
  lifetime_value?: number;
  shopify_customer_id?: string;
}

export interface Interaction {
  id: string;
  customer_id: string;
  customer_name: string;
  type: 'email' | 'call' | 'meeting' | 'note' | 'task';
  description: string;
  created_by: string;
  created_at: string;
  due_date?: string;
  status?: 'pending' | 'completed' | 'cancelled';
  outcome?: string;
}

export interface Deal {
  id: string;
  customer_id: string;
  customer_name: string;
  title: string;
  value: number;
  stage: 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  probability: number;
  expected_close_date: string;
  created_at: string;
  updated_at: string;
  assigned_to?: string;
  products?: string[];
  notes?: string;
}

// API Functions

// Customers
export const getCustomers = async () => {
  try {
    const { data, error } = await supabase
      .from('crm_customers')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};

export const getCustomerById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('crm_customers')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching customer ${id}:`, error);
    return null;
  }
};

export const createCustomer = async (customer: Omit<Customer, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('crm_customers')
      .insert([{
        ...customer,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating customer:', error);
    return null;
  }
};

export const updateCustomer = async (id: string, updates: Partial<Customer>) => {
  try {
    const { data, error } = await supabase
      .from('crm_customers')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating customer ${id}:`, error);
    return null;
  }
};

export const deleteCustomer = async (id: string) => {
  try {
    const { error } = await supabase
      .from('crm_customers')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting customer ${id}:`, error);
    return false;
  }
};

// Interactions
export const getInteractionsByCustomer = async (customerId: string) => {
  try {
    const { data, error } = await supabase
      .from('crm_interactions')
      .select('*')
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching interactions for customer ${customerId}:`, error);
    return [];
  }
};

export const createInteraction = async (interaction: Omit<Interaction, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('crm_interactions')
      .insert([{
        ...interaction,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    
    // Update last_contacted date for the customer
    await supabase
      .from('crm_customers')
      .update({ last_contacted: new Date().toISOString() })
      .eq('id', interaction.customer_id);
    
    return data;
  } catch (error) {
    console.error('Error creating interaction:', error);
    return null;
  }
};

// Deals
export const getDealsByCustomer = async (customerId: string) => {
  try {
    const { data, error } = await supabase
      .from('crm_deals')
      .select('*')
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching deals for customer ${customerId}:`, error);
    return [];
  }
};

export const getAllDeals = async () => {
  try {
    const { data, error } = await supabase
      .from('crm_deals')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all deals:', error);
    return [];
  }
};

export const createDeal = async (deal: Omit<Deal, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('crm_deals')
      .insert([{
        ...deal,
        created_at: now,
        updated_at: now
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating deal:', error);
    return null;
  }
};

export const updateDeal = async (id: string, updates: Partial<Deal>) => {
  try {
    const { data, error } = await supabase
      .from('crm_deals')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating deal ${id}:`, error);
    return null;
  }
};

// Analytics
export const getCustomerAnalytics = async () => {
  try {
    const { data: customers, error: customerError } = await supabase
      .from('crm_customers')
      .select('*');
    
    if (customerError) throw customerError;
    
    const { data: deals, error: dealsError } = await supabase
      .from('crm_deals')
      .select('*');
    
    if (dealsError) throw dealsError;
    
    // Calculate metrics
    const totalCustomers = customers?.length || 0;
    const activeCustomers = customers?.filter(c => c.status === 'active').length || 0;
    const leads = customers?.filter(c => c.status === 'lead').length || 0;
    
    const totalDeals = deals?.length || 0;
    const openDeals = deals?.filter(d => !['closed_won', 'closed_lost'].includes(d.stage)).length || 0;
    const wonDeals = deals?.filter(d => d.stage === 'closed_won').length || 0;
    const lostDeals = deals?.filter(d => d.stage === 'closed_lost').length || 0;
    
    const pipeline = deals?.reduce((sum, deal) => sum + (
      !['closed_won', 'closed_lost'].includes(deal.stage) ? deal.value : 0
    ), 0) || 0;
    
    const revenue = deals?.reduce((sum, deal) => sum + (
      deal.stage === 'closed_won' ? deal.value : 0
    ), 0) || 0;
    
    return {
      totalCustomers,
      activeCustomers,
      leads,
      totalDeals,
      openDeals,
      wonDeals,
      lostDeals,
      pipeline,
      revenue,
      conversionRate: totalDeals > 0 ? (wonDeals / totalDeals * 100) : 0
    };
  } catch (error) {
    console.error('Error calculating customer analytics:', error);
    return null;
  }
};

// Mock data
export const getMockCustomers = (): Customer[] => {
  return [
    {
      id: 'cust1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      company: 'Acme Corp',
      status: 'active',
      source: 'Website',
      assigned_to: 'user1',
      tags: ['retail', 'premium'],
      created_at: '2025-02-15T14:22:00Z',
      last_contacted: '2025-03-20T09:15:00Z',
      notes: 'Regular customer with high volume orders',
      total_orders: 12,
      total_spent: 4850,
      lifetime_value: 6500,
      shopify_customer_id: 'shp_12345'
    },
    {
      id: 'cust2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 987-6543',
      company: 'Smith Enterprises',
      status: 'lead',
      source: 'Referral',
      assigned_to: 'user2',
      tags: ['wholesale', 'new'],
      created_at: '2025-03-05T11:30:00Z',
      last_contacted: '2025-03-25T14:45:00Z',
      notes: 'Interested in wholesale partnership',
      shopify_customer_id: 'shp_67890'
    },
    {
      id: 'cust3',
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      phone: '(555) 234-5678',
      company: 'Johnson & Co',
      status: 'active',
      source: 'Trade Show',
      assigned_to: 'user1',
      tags: ['retail', 'international'],
      created_at: '2024-11-20T16:45:00Z',
      last_contacted: '2025-03-18T10:30:00Z',
      notes: 'International customer with quarterly bulk orders',
      total_orders: 8,
      total_spent: 12750,
      lifetime_value: 15000,
      shopify_customer_id: 'shp_24680'
    },
    {
      id: 'cust4',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '(555) 345-6789',
      company: 'Davis Design',
      status: 'inactive',
      source: 'Website',
      assigned_to: 'user3',
      tags: ['retail', 'lapsed'],
      created_at: '2024-09-12T09:15:00Z',
      last_contacted: '2025-01-10T11:20:00Z',
      notes: 'Previously active customer, no purchases in last 3 months',
      total_orders: 5,
      total_spent: 2350,
      lifetime_value: 2350,
      shopify_customer_id: 'shp_13579'
    },
    {
      id: 'cust5',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      phone: '(555) 456-7890',
      company: 'Chen Imports',
      status: 'active',
      source: 'Google Ads',
      assigned_to: 'user2',
      tags: ['wholesale', 'premium'],
      created_at: '2025-01-25T13:45:00Z',
      last_contacted: '2025-03-22T15:00:00Z',
      notes: 'Wholesale partner with monthly orders',
      total_orders: 6,
      total_spent: 23500,
      lifetime_value: 35000,
      shopify_customer_id: 'shp_97531'
    }
  ];
};

export const getMockInteractions = (): Interaction[] => {
  return [
    {
      id: 'int1',
      customer_id: 'cust1',
      customer_name: 'John Doe',
      type: 'email',
      description: 'Sent product catalog and pricing information',
      created_by: 'user1',
      created_at: '2025-03-20T09:15:00Z'
    },
    {
      id: 'int2',
      customer_id: 'cust1',
      customer_name: 'John Doe',
      type: 'call',
      description: 'Discussed upcoming spring collection',
      created_by: 'user1',
      created_at: '2025-03-15T14:30:00Z',
      outcome: 'Customer interested in placing pre-order'
    },
    {
      id: 'int3',
      customer_id: 'cust2',
      customer_name: 'Jane Smith',
      type: 'meeting',
      description: 'Initial consultation for wholesale partnership',
      created_by: 'user2',
      created_at: '2025-03-25T14:45:00Z',
      outcome: 'Shared wholesale terms and application'
    },
    {
      id: 'int4',
      customer_id: 'cust2',
      customer_name: 'Jane Smith',
      type: 'task',
      description: 'Send wholesale agreement and pricing',
      created_by: 'user2',
      created_at: '2025-03-25T15:00:00Z',
      due_date: '2025-03-29T17:00:00Z',
      status: 'pending'
    },
    {
      id: 'int5',
      customer_id: 'cust3',
      customer_name: 'Robert Johnson',
      type: 'email',
      description: 'Quarterly order reminder',
      created_by: 'user1',
      created_at: '2025-03-18T10:30:00Z'
    },
    {
      id: 'int6',
      customer_id: 'cust5',
      customer_name: 'Michael Chen',
      type: 'call',
      description: 'Discussed inventory issues and shipping delays',
      created_by: 'user2',
      created_at: '2025-03-22T15:00:00Z',
      outcome: 'Resolved shipping concerns, order will proceed as planned'
    }
  ];
};

export const getMockDeals = (): Deal[] => {
  return [
    {
      id: 'deal1',
      customer_id: 'cust1',
      customer_name: 'John Doe',
      title: 'Summer Collection Bulk Order',
      value: 8500,
      stage: 'negotiation',
      probability: 75,
      expected_close_date: '2025-04-15T00:00:00Z',
      created_at: '2025-03-10T11:00:00Z',
      updated_at: '2025-03-20T09:30:00Z',
      assigned_to: 'user1',
      products: ['Summer T-Shirts', 'Shorts', 'Sandals'],
      notes: 'Customer requesting 10% volume discount'
    },
    {
      id: 'deal2',
      customer_id: 'cust2',
      customer_name: 'Jane Smith',
      title: 'Wholesale Partnership Agreement',
      value: 25000,
      stage: 'proposal',
      probability: 50,
      expected_close_date: '2025-05-01T00:00:00Z',
      created_at: '2025-03-05T14:30:00Z',
      updated_at: '2025-03-25T15:15:00Z',
      assigned_to: 'user2',
      products: ['Full Product Line'],
      notes: 'Initial 3-month trial with minimum order quantity'
    },
    {
      id: 'deal3',
      customer_id: 'cust3',
      customer_name: 'Robert Johnson',
      title: 'Q2 Inventory Restock',
      value: 15000,
      stage: 'closed_won',
      probability: 100,
      expected_close_date: '2025-03-22T00:00:00Z',
      created_at: '2025-02-28T09:15:00Z',
      updated_at: '2025-03-22T16:45:00Z',
      assigned_to: 'user1',
      products: ['Premium Collection', 'Basics Line'],
      notes: 'Regular quarterly order, payment terms net-30'
    },
    {
      id: 'deal4',
      customer_id: 'cust5',
      customer_name: 'Michael Chen',
      title: 'International Distribution Agreement',
      value: 75000,
      stage: 'qualified',
      probability: 40,
      expected_close_date: '2025-06-15T00:00:00Z',
      created_at: '2025-03-15T10:30:00Z',
      updated_at: '2025-03-22T15:30:00Z',
      assigned_to: 'user2',
      products: ['Full Product Line'],
      notes: 'Exclusive distribution rights for Asia Pacific region'
    },
    {
      id: 'deal5',
      customer_id: 'cust4',
      customer_name: 'Emily Davis',
      title: 'Website Redesign Project',
      value: 4500,
      stage: 'closed_lost',
      probability: 0,
      expected_close_date: '2025-02-15T00:00:00Z',
      created_at: '2025-01-10T11:45:00Z',
      updated_at: '2025-02-10T14:30:00Z',
      assigned_to: 'user3',
      products: ['Design Services'],
      notes: 'Lost to competitor offering lower price'
    }
  ];
};