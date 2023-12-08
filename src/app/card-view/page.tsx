import { Flex } from "@chakra-ui/react";
import { MemberCard } from "@/components/membercard";

import React from 'react'

const page = () => {
  return (
    <Flex w="100%" h="500px" alignItems="center" justifyContent="center" bg="purple.800">
        <MemberCard />
    </Flex>
  )
}

export default page