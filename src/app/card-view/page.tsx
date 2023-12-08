import { Flex } from "@chakra-ui/react";
import { MemberCard } from "@/components/membercard";

import React from 'react'

const page = () => {
  return (
    <Flex w="100%" h="500px" alignItems="center" justifyContent="center" bg="purple.800">
      <MemberCard number="0182 2117 1001" name="hans Stephano edbert n" />
    </Flex>
  )
}

export default page