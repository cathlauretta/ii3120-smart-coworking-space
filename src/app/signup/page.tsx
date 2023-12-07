import React from "react";
import {
    Flex,
    Image,
    Text,
    Link,
} from "@chakra-ui/react";
import { Brand } from "@/components/brand";
import SignUpForm from "@/app/signup/SignUpComponent";

const desc =
    "Bergabung menjadi bagian dari Centrice Member!\nPilih metode Sign Up:";

export default function LoginPage() {
    const DEFAULT_TEXT_COLOR = "#1A202C";

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

                {/* Sign Up */}
                <SignUpForm />

                {/* Link to Login */}
                <Flex flexDir={"row"} textColor="purple.800" gap="10px">
                    <Text>Already have an account?</Text>
                    <Link href="/login" fontWeight="600">Log in</Link>
                </Flex>
            </Flex>

            {/* Kanan */}
            <Flex w="50%" position={"relative"} bgColor="#FBB6CE">
                <Flex
                    position={"absolute"}
                    left={0}
                    bottom={0}
                    overflow={"hidden"}
                    w="100%"
                    flexDir={"row"}
                    alignItems={"end"}>
                    <Image
                        // position={"absolute"}
                        // bottom={"0"}
                        // right={"0"}
                        src="/assets/image/List-is-empty.png"
                    />
                    <Image
                        // position={"absolute"}
                        // bottom={"0"}
                        // left={"0"}
                        src="/assets/image/Friendship.png"
                        // display={"block"}
                        minH={0}
                        objectFit={"contain"}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
