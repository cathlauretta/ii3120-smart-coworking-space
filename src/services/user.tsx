import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Payload } from '../lib/databasetypes';

export interface UserUpdatePayload {
  username?: String | null;
  first_name?: String | null;
  last_name?: String | null;
  phone_number?: String | null;
}

export const getUserById = async (id: string | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('users')
    .select()
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const updateUser = async (
  userPayload: Payload<'users'>,
  id: string | undefined
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('users')
    .update({ ...userPayload })
    .eq('id', id as string)
    .select()
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const deleteUser = async (id: string | undefined) => {
  const supabase = createClient(cookies());
  const authUser = await supabase.auth.admin.deleteUser(id as string);
  if (authUser.error) {
    const error = authUser.error;
    return { error };
  }
  const { error } = await supabase
    .from('user')
    .delete()
    .eq('id', id as string);
  return { error };
};
