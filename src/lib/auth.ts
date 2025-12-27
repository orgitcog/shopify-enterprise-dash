import { supabase } from "./supabase";

export type AuthUser = {
  id: string;
  email: string;
  role?: string;
  avatar_url?: string;
  display_name?: string;
};

export type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  error: Error | null;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ error: Error | null; data: any }>;
  signUp: (
    email: string,
    password: string,
  ) => Promise<{ error: Error | null; data: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null; data: any }>;
  updateProfile: (
    data: Partial<AuthUser>,
  ) => Promise<{ error: Error | null; data: any }>;
  isTestMode: boolean;
  toggleTestMode: () => void;
};

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error, data: null };
  }

  // Get user profile data
  const { data: profileData, error: profileError } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", data.user?.id)
    .single();

  if (profileError && profileError.code !== "PGRST116") {
    // PGRST116 is "no rows returned" error, which is ok for a new user
    console.error("Error fetching user profile:", profileError);
  }

  return { error: null, data: { user: data.user, profile: profileData } };
};

// Sign up with email and password
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error, data: null };
  }

  // Create a user profile if the user was created successfully
  if (data?.user) {
    const { error: profileError } = await supabase
      .from("user_profiles")
      .insert([
        {
          id: data.user.id,
          email: data.user.email,
          status: "active",
          last_active: new Date().toISOString(),
        },
      ]);

    if (profileError) {
      console.error("Error creating user profile:", profileError);
    }
  }

  return { error: null, data };
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  }
};

// Reset password
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  return { error, data };
};

// Update user profile
export const updateProfile = async (
  user: AuthUser,
  updates: Partial<AuthUser>,
) => {
  const { error } = await supabase
    .from("user_profiles")
    .update(updates)
    .eq("id", user.id);

  return { error, data: updates };
};

// Get current session and user
export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const { data } = await supabase.auth.getSession();

  if (!data.session?.user) {
    return null;
  }

  const { data: profileData } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", data.session.user.id)
    .single();

  return {
    id: data.session.user.id,
    email: data.session.user.email || "",
    ...profileData,
  };
};
