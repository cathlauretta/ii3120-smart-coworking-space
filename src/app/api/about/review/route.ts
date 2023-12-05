import {
    getReviewById,
    getReviews
} from '@/services/review'
import { NextRequest, NextResponse } from 'next/server';
import { Payload } from '@/lib/databasetypes';

export async function GET(request: NextRequest) {
    const reviewPayload: Payload<'reviews'> = await request.json();
    if (!reviewPayload.id) {
        const { data, error } = await getReviews();
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
        const { data, error } = await getReviewById(reviewPayload.id);
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