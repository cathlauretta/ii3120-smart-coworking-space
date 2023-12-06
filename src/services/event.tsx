import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';

export const createEvent = async (eventsPayload: Payload<'events'>) => {
    const supabase = createClient(cookies());
    const query = supabase
      .from('event')
      .insert([{ ...eventsPayload }])
      .select()
      .single();
    const { data, error } = await query;
    return { data, error };
  };
  
  export const updateEvents = async (
    id: string | null | undefined,
    eventsPayload: Payload<'events'>
  ) => {
    const supabase = createClient(cookies());
    const query = supabase
      .from('event')
      .update({ ...eventsPayload })
      .eq('id', id as string)
      .select();
    const { data, error } = await query;
    return { data, error };
  };
  
  export const deleteEvents = async (id: string | null | undefined) => {
    const supabase = createClient(cookies());
    const { error } = await supabase
      .from('event')
      .delete()
      .eq('id', id as string);
    return { error };
  };
  
  export const getEvent = async (id: string | null | undefined) => {
    const supabase = createClient(cookies());
    const query = supabase
      .from('event')
      .select('name, workspace_id, desc, date, start_time, end_time, created_at, contact, id')
      .eq('id', id as string)
      .single();
    const { data, error } = await query;
    return { data, error };
  };
  
  export const getEvents = async () => {
    const supabase = createClient(cookies());
    const query = supabase
      .from('event')
      .select('name, workspace_id, desc, date, start_time, end_time, created_at, contact, id');
    const { data, error } = await query;
    return { data, error };
  };
  
  