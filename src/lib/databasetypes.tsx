import { PostgrestError } from '@supabase/supabase-js';

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
export type Payload<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update'];

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
      users: {
        Row: {
          registered_at: string | null;
          email: string | null;
          full_name: string | null;
          id: string;
          phone_number: string | null;
          membership_status: boolean | null;
        };
        Insert: {
          registered_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          phone_number?: string | null;
          membership_status?: boolean | null;
        };
        Update: {
          registered_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          phone_number?: string | null;
          membership_status?: boolean | null;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
            created_at: string | null;
            user_id: string | null;
            id: string;
            rating : GLfloat | null;
            kommentar: string | null;
          };
          Insert: {
            created_at?: string | null;
            user_id?: string | null;
            id?: string;
            rating? : GLfloat | null;
            kommentar?: string | null;
          };
          Update: {
            created_at?: string | null;
            user_id?: string | null;
            id?: string;
            rating? : GLfloat | null;
            kommentar?: string | null;
          };
          Relationships: [];
          };
        workspaces:{
            Row: {
                created_at: string | null;
                id: string;
                name : string | null;
                desc: string | null;
                facilities: string | null;
                price: number | null;
                capacity: number | null;
            };
            Insert: {
                created_at?: string | null;
                id?: string;
                name? : string | null;
                desc?: string | null;
                facilities?: string | null;
                price?: number | null;
                capacity?: number | null;
            };
            Update: {
                created_at?: string | null;
                id?: string;
                name? : string | null;
                desc?: string | null;
                facilities?: string | null;
                price?: number | null;
                capacity?: number | null;
            };
            Relationships: [];
            };
        }
      
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };

  };

