import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';


export const createFNB = async (fnbPayload: Payload<'fnb'>) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('fnb_data')
    .insert([{ ...fnbPayload }])
    .select()
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const updateFNB = async (
  id: string | null | undefined,
  fnbPayload: Payload<'fnb'>
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('fnb_data')
    .update({ ...fnbPayload })
    .eq('id', id as string)
    .select();
  const { data, error } = await query;
  return { data, error };
};

export const deleteFNB = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('fnb_data')
    .delete()
    .eq('id', id as string);
  return { error };
};

export const getFNB = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('fnb_data')
    .select('*')
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const getFNBs = async () => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('fnb_data')
    .select(
      '*'
    );
  const { data, error } = await query;
  return { data, error };
};

