import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../databasetypes';

export const createClient = () =>
  createBrowserClient<Database>(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    "https://nkszakyxtqmimbufxqdo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rc3pha3l4dHFtaW1idWZ4cWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDAwMTUsImV4cCI6MjAxNzI3NjAxNX0.AKLggS9uc8MqyqpJPXGKaSlOh6RuHY8ANHmn3wmnesE"
  );
