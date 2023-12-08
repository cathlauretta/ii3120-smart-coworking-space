import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Payload } from '../lib/databasetypes';
import { PostgrestError } from '@supabase/supabase-js';


export interface AccountCredentials {
  email: string;
  password: string;
}

// Registers a new user in auth.users; Then, a new duplicate row in public.users is created using a trigger
export const registerAndCreateAccount = async (
  accountPayload: Payload<'users'>,
  password: string,
  requestUrl: URL
) => {
  const supabase = createClient(cookies());
  const query = supabase.auth.signUp({
    email: accountPayload.email as string,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/api/auth/callback`,
      data: {
        username: accountPayload.email,
        full_name: accountPayload.full_name,
        phone_number: accountPayload.phone_number,

      }
    }
  });
  const { data, error } = await query;
  return { data, error };
};

export const signIn = async (accountCredentials: AccountCredentials) => {
  const supabase = createClient(cookies());

  // const query = supabase.auth.signInWithPassword({
  //   ...accountCredentials
  // });
  // const { data, error } = await query;
  // return { data, error };


  const query = supabase.from('user').select('*').eq('email', accountCredentials.email);
  const { data, error } = await query;

  if (data){
    const dataEmail = data[0].email;
    const dataPassword = data[0].password;
    if (dataEmail === accountCredentials.email){
      if (dataPassword === accountCredentials.password){
        const result = "Login Success";	
        const error : PostgrestError | null = null ;
        return {result, error};
      } else {
        const result = null;
        const error = {message: "Invalid Password", status: 402};
        return {result, error};
      }
    } else {
      const result = null;
      const error = {message: "Invalid Username", status: 402};
      return {result, error};
    }
  } else {
    const error = {message: "Invalid Login Credentials", status: 400};
    return { data, error };
  }
};

export const signOut = async () => {
  const supabase = createClient(cookies());
  const query = supabase.auth.signOut();
  const { error } = await query;
  return { error };
};

export const getCurrentUser = async () => {
  const supabase = createClient(cookies());
  const query = supabase.auth.getUser();
  const { data, error } = await query;
  return { data, error };
};
