import React from "react";
import {
    Flex,
    Image,
    Text,
    Link,
} from "@chakra-ui/react";
import { Brand } from "@/components/brand";
import { LoginContent } from "./LogInComponent";

export default function LoginPage() {
    return (
        <Flex w="100%" h="100vh">
            {/* Kiri */}
            <Flex
                w="50%"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap="80px">
                <Brand />

                <LoginContent />

                {/* Link to Register */}
                <Flex flexDir={"row"} textColor="purple.800" gap="10px">
                    <Text>Don't have an account?</Text>
                    <Link href="/signup" fontWeight="700">
                        Create an Account
                    </Link>
                </Flex>
            </Flex>

            {/* Kanan */}
            <Flex w="50%" position={"relative"} bgColor="#FBB6CE">
                <Flex
                    position={"absolute"}
                    overflow={"hidden"}
                    w="100%"
                    flexDir={"row"}
                    justifyContent={"right"}
                >
                    <Image src="assets/image/Playing-table-tennis.png" />
                </Flex>
                <Flex
                    position={"absolute"}
                    left={0}
                    bottom={0}
                    overflow={"hidden"}
                    w="100%"
                    flexDir={"row"}
                    alignItems={"end"}>
                    <Image src="/assets/image/List-is-empty.png" />
                    <Image
                        src="/assets/image/Friendship.png"
                        minH={0}
                        objectFit={"contain"}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
