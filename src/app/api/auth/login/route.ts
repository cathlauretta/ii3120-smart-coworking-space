import { createClient } from '@/lib/supabase/server';
import { AccountCredentials, signIn } from '@/services/auth';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
  const accountCredentials: AccountCredentials = await request.json();


  // Check for body parameters
  if (!accountCredentials.email || !accountCredentials.password) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Bad request! All body parameters should be present'
      },
      { status: 400 }
    );
  }


  // execute signni
  const { data, error } = await signIn(accountCredentials);

  // Check for supabase errors
  if (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error.message
      },
      { status: error.status }
    );
  }

  // successful return
  return NextResponse.json(
    { status: 'success', message: 'Account logged in succesfully', data: data },
    { status: 200 }
  );
}
