import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';
import exp from 'constants';


export const createRoom = async (roomPayload: Payload<'rooms'>) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('room')
    .insert([{ ...roomPayload }])
    .select()
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const updateRoom = async (
  id: string | null | undefined,
  roomPayload: Payload<'rooms'>
) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('room')
    .update({ ...roomPayload })
    .eq('id', id as string)
    .select();
  const { data, error } = await query;
  return { data, error };
};

export const deleteRoom = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('room')
    .delete()
    .eq('id', id as string);
  return { error };
};

export const getRoom = async (id: string | null | undefined) => {
  const supabase = createClient(cookies());
  const query = supabase
    .from('room')
    .select('id, workspace_id, name, facilities, capacity, created_at, occupancy')
    .eq('id', id as string)
    .single();
  const { data, error } = await query;
  return { data, error };
};

export const getRooms = async () => {
    const supabase = createClient(cookies());
    const query = supabase
        .from('room')
        .select(
        'id, workspace_id, name, facilities, capacity, created_at, occupancy'
        );
    const { data, error } = await query;
    return { data, error };
    };