export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      roles: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          permissions: string[];
          created_at: string;
          is_custom: boolean;
          priority_level: number;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          permissions?: string[];
          created_at?: string;
          is_custom?: boolean;
          priority_level?: number;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          permissions?: string[];
          created_at?: string;
          is_custom?: boolean;
          priority_level?: number;
        };
      };
      stores: {
        Row: {
          id: string;
          name: string;
          url: string;
          revenue: number;
          orders: number;
          status: string;
          last_sync: string;
          created_at: string;
          owner_id: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          url: string;
          revenue?: number;
          orders?: number;
          status?: string;
          last_sync?: string;
          created_at?: string;
          owner_id?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          url?: string;
          revenue?: number;
          orders?: number;
          status?: string;
          last_sync?: string;
          created_at?: string;
          owner_id?: string | null;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          email: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
          status: string;
          last_active: string;
          preferences: Json;
          timezone: string;
          login_count: number;
        };
        Insert: {
          id?: string;
          email: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          status?: string;
          last_active?: string;
          preferences?: Json;
          timezone?: string;
          login_count?: number;
        };
        Update: {
          id?: string;
          email?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          status?: string;
          last_active?: string;
          preferences?: Json;
          timezone?: string;
          login_count?: number;
        };
      };
      user_roles: {
        Row: {
          user_id: string;
          role_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          role_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          role_id?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      user_has_permission: {
        Args: {
          user_uuid: string;
          required_permission: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
