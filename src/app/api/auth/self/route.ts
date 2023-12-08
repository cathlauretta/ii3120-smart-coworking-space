import { getCurrentUser } from '@/services/auth';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { getUserById } from '@/services/user';


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

  // getting user id from supabase
  console.log('Getting user by id')
  const { data, error } = await getUserById(authUser.data?.user?.id);
  // Check for supabase errors
  if (error || !data) {
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
