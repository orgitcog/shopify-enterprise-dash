import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Store {
  id: string;
  name: string;
  url: string;
  revenue: number;
  orders: number;
  status: 'active' | 'inactive' | 'pending';
  last_sync: string;
  created_at: string;
  owner_id?: string;
}

export async function getStores(): Promise<Store[]> {
  try {
    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching stores from Supabase:", error);
      // Return mock data if database is not set up
      return getMockStores();
    }

    return data || [];
  } catch (error) {
    console.error("Error fetching stores:", error);
    return getMockStores();
  }
}

function getMockStores(): Store[] {
  return [
    {
      id: "1",
      name: "Store 1",
      url: "store1.myshopify.com",
      revenue: 12500,
      orders: 125,
      status: "active",
      last_sync: new Date().toISOString(),
      created_at: new Date().toISOString()
    },
    {
      id: "2",
      name: "Store 2",
      url: "store2.myshopify.com",
      revenue: 9800,
      orders: 98,
      status: "active",
      last_sync: new Date().toISOString(),
      created_at: new Date().toISOString()
    }
  ];
}

export async function createStore(store: Omit<Store, 'id' | 'created_at' | 'last_sync'>) {
  try {
    const { data, error } = await supabase
      .from('stores')
      .insert([{
        ...store,
        last_sync: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating store:", error);
    return { data: null, error };
  }
}

export async function updateStore(id: string, updates: Partial<Store>) {
  try {
    const { data, error } = await supabase
      .from('stores')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating store:", error);
    return { data: null, error };
  }
}

export async function deleteStore(id: string) {
  try {
    const { error } = await supabase
      .from('stores')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error deleting store:", error);
    return { error };
  }
}

export async function syncStore(id: string) {
  try {
    const { data, error } = await supabase
      .from('stores')
      .update({ last_sync: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error syncing store:", error);
    return { data: null, error };
  }
}