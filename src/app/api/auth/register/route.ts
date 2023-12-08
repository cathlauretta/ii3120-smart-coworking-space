import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { Payload } from '../../../../lib/databasetypes';
import { registerAndCreateAccount } from '@/services/auth';
import { addUserTable } from '@/services/user';

export async function POST(request: NextRequest) {
  const bodyRequest = await request.json();
  const requestUrl = new URL(request.url);
  const accountPayload: Payload<'users'> = bodyRequest;
  const { password } = bodyRequest;
  // Check for body parameters
  if (
    !accountPayload.email ||
    !accountPayload.full_name ||
    !password
  ) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Bad request! All body parameters should be present'
      },
      { status: 400 }
    );
  }

  console.log(accountPayload)
  
  // execute register
  const { data, error } = await registerAndCreateAccount(
    accountPayload,
    password,
    requestUrl
  );
  console.log(data);

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
  console.log("masuk 4")
  console.log(accountPayload)
  // const { data: userData, error: error2 } = await addUserTable(accountPayload, password);
  // console.log(userData);
  // if (error2) {
  //   return NextResponse.json(
  //     {
  //       status: 'error',
  //       message: error2.message
  //     }
  //   );
  // }
  // successful return
  return NextResponse.json(
    { status: 'success', message: 'Account created succesfully', data: data },
    { status: 200 }
  );
}
