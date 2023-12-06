import {
    getMembership,
    getMemberships
} from '@/services/membership'

import { NextRequest, NextResponse } from 'next/server';
import { Payload, Tables } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    const membershipPayload: Payload<'memberships'> = {};
    if (!membershipPayload.id) {
        const { data, error } = await getMemberships();
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
        const { data, error } = await getMembership(membershipPayload.id);
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