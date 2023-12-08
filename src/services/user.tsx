import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Payload } from '../lib/databasetypes';

export interface UserUpdatePayload {
  email?: String | null;
  first_name?: String | null;
  last_name?: String | null;
  phone_number?: String | null;
  current_membership?: string | null;
}

export interface UserPayloadUpdate {
  email?: String | null;
  full_name?: String | null;
  phone_number?: String | null;
  password?: String | null;
}

export const addUserTable = async (userPayload: Payload<'users'>, password: string) => {
  const supabase = createClient(cookies());
  const newUser = {...userPayload, password:password};
  const query = supabase.from('user').insert(newUser);
  const { data, error } = await query;
  return { data, error };
}

export const getUserById = async (id: string | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('user')
    .select()
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const getUserByEmail = async (email: string | undefined) => {
  try {
    console.log('id seng login', email);
    const supabase = createClient(cookies());
    const query = supabase
      .from('user')
      .select('id, email, full_name, phone_number, current_membership_id')
      .eq('email', email as string)
      .single();
    console.log('query', query);
    const { data, error } = await query;
    if (error) {
      console.log(error);
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateUser = async (
  userPayload: Payload<'users'>,
  id: string | undefined
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('user')
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
