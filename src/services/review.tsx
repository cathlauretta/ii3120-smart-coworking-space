import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';


export const createReview = async (reviewPayload: Payload<'reviews'>) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('reviews')
    .insert([{ ...reviewPayload }])
    .select()
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const updateReview = async (
  id: string | null | undefined,
  reviewPayload: Payload<'reviews'>
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('reviews')
    .update({ ...reviewPayload })
    .eq('id', id as string)
    .select();
  const { data, error } = await query;
  return { data, error };
};

export const deleteReview = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', id as string);
  return { error };
};

export const getReviewById = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('reviews')
    .select(
      'id, rating, komentar, created_at, users (id, full_name, phone_number)'
    )
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const getReviews = async () => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('reviews')
    .select(
      'id, rating, komentar, created_at, users (id, full_name, phone_number)'
    );
  const { data, error } = await query;
  return { data, error };
};

