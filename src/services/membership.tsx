import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';

export const createMembership = async (membershipPayload: Payload<'memberships'>) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('membership_data')
    .insert([{ ...membershipPayload }])
    .select()
    .single();
  const { data, error } = await query;
  return { data, error };
}

export const updateMembership = async (
  id: string | null | undefined,
  membershipPayload: Payload<'memberships'>
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('membership_data')
    .update({ ...membershipPayload })
    .eq('id', id as string)
    .select();
  const { data, error } = await query;
  return { data, error };
};

export const deleteMembership = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('membership_data')
    .delete()
    .eq('id', id as string);
  return { error };
};

export const getMembership = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('membership_data')
    .select('*')
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const getMemberships = async () => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('membership_data')
    .select(
      '*'
    );
  const { data, error } = await query;
  return { data, error };
};
