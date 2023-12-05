import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { DbResult, Payload, Tables } from '../lib/databasetypes';
import exp from 'constants';

export const createWorkspace = async (workspacePayload: Payload<'workspaces'>) => {
    const supabase = createClient(cookies());
    const query = supabase
        .from('workspaces')
        .insert([{ ...workspacePayload }])
        .select()
        .single();
    const { data, error } = await query;
    return { data, error };
    };

export const updateWorkspace = async (
    id: string | null | undefined,
    workspacePayload: Payload<'workspaces'>
) => {
    const supabase = createClient(cookies());
    const query = supabase
        .from('workspaces')
        .update({ ...workspacePayload })
        .eq('id', id as string)
        .select()
        .select();
    const { data, error } = await query;
    return { data, error };
}

export const deleteWorkspace = async (id: string | null | undefined) => {
    const supabase = createClient(cookies());
    const { error } = await supabase
        .from('workspaces')
        .delete()
        .eq('id', id as string);
    return { error };
}

export const getWorkspaceById = async (id: string | null | undefined) => {
    const supabase = createClient(cookies());
    const query = supabase
        .from('workspaces')
        .select(
            'id, name,desc, facilities, price, capacity, created_at'
        )
        .eq('id', id as string)
        .single();
    const { data, error } = await query;
    return { data, error };
}

export const getWorkspaces = async () => {
    const supabase = createClient(cookies());
    const query = supabase
        .from('workspaces')
        .select(
            'id, name,desc, facilities, price, capacity, created_at'
        );
    const { data, error } = await query;
    return { data, error };
}