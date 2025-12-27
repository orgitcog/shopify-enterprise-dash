import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = typeof window === 'undefined' 
  ? process.env.VITE_SUPABASE_URL || '' 
  : import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = typeof window === 'undefined' 
  ? process.env.VITE_SUPABASE_ANON_KEY || '' 
  : import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient<Database>(
  supabaseUrl || 'http://localhost:54321',  // Fallback for development
  supabaseAnonKey || 'placeholder-key',     // Fallback for development
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

export const getStores = async () => {
  const { data, error } = await supabase
    .from('stores')
    .select('*');
  
  if (error) {
    console.error('Error fetching stores:', error);
    return [];
  }
  
  return data || [];
};

export const getStoreById = async (id: string) => {
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching store:', error);
    return null;
  }
  
  return data;
};

export const createStore = async (store: {
  name: string;
  url: string;
  status?: string;
}) => {
  const { data, error } = await supabase
    .from('stores')
    .insert([
      { 
        name: store.name, 
        url: store.url, 
        status: store.status || 'pending',
        owner_id: (await supabase.auth.getUser()).data.user?.id
      }
    ])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating store:', error);
    return null;
  }
  
  return data;
};

export const updateStore = async (id: string, updates: {
  name?: string;
  url?: string;
  revenue?: number;
  orders?: number;
  status?: string;
}) => {
  const { data, error } = await supabase
    .from('stores')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating store:', error);
    return null;
  }
  
  return data;
};

export const deleteStore = async (id: string) => {
  const { error } = await supabase
    .from('stores')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting store:', error);
    return false;
  }
  
  return true;
};