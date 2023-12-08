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
    console.log(data.status);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Home() {
  (async () => {
    const status = await getSelf();
  })();
  return (
    <Box>
      {status === 'success' ? ( <CustomerHome /> ) : ( <GuestHome />
      )}
    </Box>
      // <CustomerHome />
      // <GuestHome/>
  );
}
