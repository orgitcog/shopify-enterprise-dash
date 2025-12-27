import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Get environment variables with proper fallbacks
const getEnvVar = (key: string): string => {
  if (typeof window === "undefined") {
    // Server-side: use process.env
    return process.env[key] || "";
  }
  // Client-side: use import.meta.env
  return import.meta.env?.[key] || "";
};

const supabaseUrl = getEnvVar("VITE_SUPABASE_URL");
const supabaseAnonKey = getEnvVar("VITE_SUPABASE_ANON_KEY");

// Check if we have valid Supabase configuration
const hasValidConfig =
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes("placeholder") &&
  supabaseUrl.startsWith("https://");

if (!hasValidConfig) {
  console.warn(
    "Missing or invalid Supabase environment variables. Running in offline/mock mode.",
  );
}

// Create a mock client for when Supabase is not configured
const createMockClient = (): SupabaseClient<Database> => {
  const mockResponse = {
    data: null,
    error: null,
    count: null,
    status: 200,
    statusText: "OK",
  };

  const mockQueryBuilder = {
    select: () => mockQueryBuilder,
    insert: () => mockQueryBuilder,
    update: () => mockQueryBuilder,
    delete: () => mockQueryBuilder,
    eq: () => mockQueryBuilder,
    single: () => Promise.resolve(mockResponse),
    order: () => mockQueryBuilder,
    then: (resolve: (value: typeof mockResponse) => void) =>
      Promise.resolve(mockResponse).then(resolve),
  };

  const mockAuth = {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () =>
      Promise.resolve({ data: { user: null, session: null }, error: null }),
    signUp: () =>
      Promise.resolve({ data: { user: null, session: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
  };

  return {
    from: () => mockQueryBuilder,
    auth: mockAuth,
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: null }),
        download: () => Promise.resolve({ data: null, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: "" } }),
      }),
    },
  } as unknown as SupabaseClient<Database>;
};

// Export the Supabase client - either real or mock
export const supabase: SupabaseClient<Database> = hasValidConfig
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : createMockClient();

// Export a flag to check if we're in mock mode
export const isSupabaseMockMode = !hasValidConfig;

export const getStores = async () => {
  if (!hasValidConfig) {
    console.log("Supabase not configured - returning empty stores array");
    return [];
  }

  const { data, error } = await supabase
    .from("stores")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching stores from Supabase:", error);
    return [];
  }

  return data || [];
};

export const getStoreById = async (id: string) => {
  if (!hasValidConfig) {
    return null;
  }

  const { data, error } = await supabase
    .from("stores")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching store:", error);
    return null;
  }

  return data;
};

export const createStore = async (store: {
  name: string;
  url: string;
  status?: string;
}) => {
  if (!hasValidConfig) {
    console.warn("Supabase not configured - cannot create store");
    return null;
  }

  const { data, error } = await supabase
    .from("stores")
    .insert([
      {
        name: store.name,
        url: store.url,
        status: store.status || "pending",
        owner_id: (await supabase.auth.getUser()).data.user?.id,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating store:", error);
    return null;
  }

  return data;
};

export const updateStore = async (
  id: string,
  updates: {
    name?: string;
    url?: string;
    revenue?: number;
    orders?: number;
    status?: string;
  },
) => {
  if (!hasValidConfig) {
    console.warn("Supabase not configured - cannot update store");
    return null;
  }

  const { data, error } = await supabase
    .from("stores")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating store:", error);
    return null;
  }

  return data;
};

export const deleteStore = async (id: string) => {
  if (!hasValidConfig) {
    console.warn("Supabase not configured - cannot delete store");
    return false;
  }

  const { error } = await supabase.from("stores").delete().eq("id", id);

  if (error) {
    console.error("Error deleting store:", error);
    return false;
  }

  return true;
};
