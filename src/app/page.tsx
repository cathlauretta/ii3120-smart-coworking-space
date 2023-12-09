import GuestHome from "./(landing page)/GuestComponent"
import CustomerHome from "./(landing page)/CustomerComponent"
import {Box} from '@chakra-ui/react'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from "@/lib/databasetypes"
import WithSubnavigation from "@/components/navbar"

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies})
  const {
    data: { session }
  } = await supabase.auth.getSession()
  console.log('session', session)

  const user = {
    id: session?.user.id ?? '',
    email: session?.user.email ?? '',
    full_name: session?.user.user_metadata.full_name,
    phone_number: session?.user.user_metadata.phone_number,
    current_membership_id: session?.user.user_metadata.current_membership_id
  }

  return (
    <Box>
      {
        session ? 
        <div>
          <WithSubnavigation type='customer' user={user}/> 
          <CustomerHome user={user} />
        </div>
        : 
        <div>
          <WithSubnavigation type='guest'/>
          <GuestHome />
        </div>
      }
    </Box>
      // <CustomerHome />
      // <GuestHome/>
  );
}
