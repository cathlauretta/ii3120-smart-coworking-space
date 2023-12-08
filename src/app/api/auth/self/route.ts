import { getCurrentUser } from '@/services/auth';
import { getUserById, getUserByEmail } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
  // execute logout
  const authUser: any = await getCurrentUser();
  // Check for auth errors
  if (authUser.error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'No user is signed in'
      },
      { status: authUser.error.status }
    );
  }

  // execute get user with id from authUser
  console.log("Getting user by email")
  const { data, error } = await getUserById(authUser.data.user?.id);
  console.log(data);
  // Check for supabase errors
  if (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error.message
      },
      { status: 400 }
    );
  }

  // successful return
  return NextResponse.json(
    {
      status: 'success',
      message: 'Current logged in account fetched succesfully',
      data: { user: data }
    },
    { status: 200 }
  );
}
