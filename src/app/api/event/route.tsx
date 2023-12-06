import {
    getEvent,
    getEvents
} from '@/services/event'

import { NextRequest, NextResponse } from 'next/server';
import { Payload, Tables } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    console.log("Hehe");
    const eventsPayload: Payload<'events'> = {};
    console.log(eventsPayload);
    if (!eventsPayload.id) {

        const { data, error } = await getEvents();
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
        const { data, error } = await getEvent(eventsPayload.id);
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