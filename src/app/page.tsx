import Image from 'next/image'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { Brand } from "@/components/brand"

export default function Home() {
  return (
    <Flex justify={{ base: "center", md: "start" }} minW={160}>
      <Brand/>
    </Flex>
  )
}
