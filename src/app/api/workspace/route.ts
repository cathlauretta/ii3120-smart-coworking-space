import {
    getWorkspaceById,
    getWorkspaces
} from '@/services/workspace'

import { NextRequest, NextResponse } from 'next/server';
import { Payload, Tables } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    const workspacePayload: Payload<'workspaces'> = {};
    if (!workspacePayload.id) {
        const { data, error } = await getWorkspaces();
        if (error) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: error.message
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            {
                status: 'success',
                message: 'Workspaces fetched succesfully',
                data: data
            },
            { status: 200 }
        );
    } else {
        const { data, error } = await getWorkspaceById(workspacePayload.id);
        if (error) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: error.message
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            {
                status: 'success',
                message: 'Workspace fetched succesfully',
                data: data
            },
            { status: 200 }
        );
    }
}