'use client'

import GuestHome from "./(landing page)/GuestComponent"
import CustomerHome from "./(landing page)/CustomerComponent"
import {Box} from '@chakra-ui/react'
import { use, useEffect, useState } from "react";

async function getSelf() {
  try {
    const apiUrl = `/api/auth/self`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    if (data.message=="No user is signed in") return null;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Home() {
  const [user, setUser] = useState<{ id: string; full_name: string; phone_number: string; email: string; role: string; }>();
  useEffect(() => {
    getSelf().then((data) => {
      setUser(data);
      console.log(user);
    });
  }, []);
  return (
    <Box>
      {user?.id ? ( <CustomerHome /> ) : ( <GuestHome />
      )}
    </Box>
      // <CustomerHome />
      // <GuestHome/>
  );
}
