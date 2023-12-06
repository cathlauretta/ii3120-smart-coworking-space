import {
    getRoom,
    getRooms
} from '@/services/room'

import { NextRequest, NextResponse } from 'next/server';
import { Payload, Tables } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    const roomPayload: Payload<'rooms'> = {};
    if (!roomPayload.id) {
        const { data, error } = await getRooms();
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
        const { data, error } = await getRoom(roomPayload.id);
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