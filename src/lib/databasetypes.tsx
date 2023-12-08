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
          current_membership_id: string | null;
        };
        Insert: {
          registered_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          phone_number?: string | null;
          current_membership_id?: string | null;
        };
        Update: {
          registered_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          phone_number?: string | null;
          current_membership_id?: string | null;

        };
        Relationships: [];
      };
      workspaces: {
        Row: {
          id: string | null;
          name: string | null;
          contact: string | null;
          location: string | null;
          created_at: string | null;
          city: string | null;
        };
        Insert: {
          id?: string | null;
          name?: string | null;
          contact?: string | null;
          location?: string | null;
          created_at?: string | null;
          city?: string | null;
        };
        
        Update: {
          id?: string | null;
          name?: string | null;
          contact?: string | null;
          location?: string | null;
          created_at?: string | null;
          city?: string | null;

        };
        Relationships: [];
      };
      rooms: {
        Row: {

          id: string;
          name: string | null;
          facilities: string | null;
          capacity: number | null;
          created_at: string | null;
          workspace_id: string | null;
          occupancy: number | null;

        };
        Insert: {
          id?: string;
          name?: string | null;
          facilities?: string | null;
          capacity?: number | null;
          created_at?: string | null;
          workspace_id?: string | null;
          occupancy?: number | null;

        };
        Update: {
          id?: string;
          name?: string | null;
          facilities?: string | null;
          capacity?: number | null;
          created_at?: string | null;
          workspace_id?: string | null;
          occupancy?: number | null;

        };  

        
        Relationships: [];
      };
      memberships: {
        Row: {

          plan: string | null;
          created_at: string | null;
          expired_at: string | null;
          started_at: string | null;
          id: string;

        };
        Insert: {
          plan?: string | null;
          created_at?: string | null;
          expired_at?: string | null;
          started_at?: string | null;
          id?: string;
        };
        Update: {
          plan?: string | null;
          created_at?: string | null;
          expired_at?: string | null;
          started_at?: string | null;
          id?: string;
        

        };
        Relationships: [];
      };
      fnb: {
        Row: {
          id: string;
          name: string | null;
          desc: string | null;
          price: number | null;
          created_at: string | null;
          url_img: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          desc?: string | null;
          price?: number | null;
          created_at?: string | null;
          url_img?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          desc?: string | null;
          price?: number | null;
          created_at?: string | null;
          url_img?: string | null;
        };
        Relationships: [];
      };
      events: {
        Row: {
          id: string;
          name: string | null;
          date: string | null;
          start_time: string | null;
          end_time: string | null;
          contact: string | null;
          desc: string | null;
          workspace_id: string | null;
          workspace_name: string | null;
          location: string | null;
          url_img: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          date?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          contact?: string | null;
          desc?: string | null;
          workspace_id?: string | null;
          workspace_name?: string | null;
          location?: string | null;
          url_img?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          date?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          contact?: string | null;
          desc?: string | null;
          workspace_id?: string | null;
          workspace_name?: string | null;
          location?: string | null;
          url_img?: string | null;
          
        

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

export interface UserPayload {
  registered_at?: string;
  email?: string;
  full_name?: string;
  id?: string;
  phone_number?: string;
  current_membership_id?: string;
}

