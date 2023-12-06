import {
    getFNB,
    getFNBs
} from '@/services/fnb'
import { NextRequest, NextResponse } from 'next/server';
import { Payload } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    const fnbPayload: Payload<'fnb'> = {};
    if (!fnbPayload.id) {
        const { data, error } = await getFNBs();
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
                message: 'Reviews fetched succesfully',
                data: data
            },
            { status: 200 }
        );
    } else {
        const { data, error } = await getFNB(fnbPayload.id);
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
                message: 'Review fetched succesfully',
                data: data
            },
            { status: 200 }
        );
    }

}

