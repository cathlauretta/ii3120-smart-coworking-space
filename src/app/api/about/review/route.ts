import {
    getReviewById,
    getReviews
} from '@/services/review'
import { NextRequest, NextResponse } from 'next/server';
import { Payload } from '@/lib/databasetypes';

// export async function GET(request: NextRequest) {
//     console.log('GET /api/about/review');
//     const reviewPayload: Payload<'reviews'> = await request.json();
//     if (!reviewPayload.id) {
//         const { data, error } = await getReviews();
//         if (error) {
//             return NextResponse.json(
//                 {
//                     status: 'error',
//                     message: error.message
//                 },
//                 { status: 400 }
//             );
//         }
//         return NextResponse.json(
//             {
//                 status: 'success',
//                 message: 'Reviews fetched succesfully',
//                 data: data
//             },
//             { status: 200 }
//         );
//     } else {
//         const { data, error } = await getReviewById(reviewPayload.id);
//         if (error) {
//             return NextResponse.json(
//                 {
//                     status: 'error',
//                     message: error.message
//                 },
//                 { status: 400 }
//             );
//         }
//         return NextResponse.json(
//             {
//                 status: 'success',
//                 message: 'Review fetched succesfully',
//                 data: data
//             },
//             { status: 200 }
//         );
//     }

// }

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            status: 'success',
            message: 'Reviews fetched succesfully',
            data: [
                {
                    id: 1,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 4
                },
                {
                    id: 3,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                },
                {
                    id: 4,
                    name: 'Jane Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 4
                },
                {
                    id: 5,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                },
                {
                    id: 6,
                    name: 'Jane Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 4
                },
                {
                    id: 7,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                },
                {
                    id: 8,
                    name: 'Jane Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 4
                },
                {
                    id: 9,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                },
                {
                    id: 10,
                    name: 'Jane Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 4
                },
                {
                    id: 11,
                    name: 'John Doe',
                    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    rating: 5
                }]

        })
}