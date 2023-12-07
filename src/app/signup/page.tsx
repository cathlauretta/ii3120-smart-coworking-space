import React from "react";
import {
    Flex,
    Button,
    Image,
    InputGroup,
    Input,
    InputLeftElement,
    Text,
    Divider,
    AbsoluteCenter,
} from "@chakra-ui/react";
import { Brand } from "@/components/brand";
import { Password } from "@/components/Password";
import { FaEnvelope, FaEdit, FaGoogle, FaFacebook } from "react-icons/fa";

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

                {/* Login */}
                <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap="40px"
                    // bg="yellow"
                >
                    <Flex
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textColor={DEFAULT_TEXT_COLOR}
                        gap={"10px"}>
                        <Text fontSize="36px" fontWeight="800">
                            Create an Account
                        </Text>
                        <Text
                            fontSize="16px"
                            fontWeight="600"
                            fontStyle="inter"
                            whiteSpace="pre-line"
                            textAlign="center">
                            {desc}
                        </Text>
                    </Flex>

                    {/* Google & Facebook */}
                    <Flex gap="20px" w="100%">
                        <Button
                            leftIcon={<FaGoogle />}
                            colorScheme="purple"
                            variant="outline"
                            size="lg"
                            width="100%">
                            Google
                        </Button>
                        <Button
                            leftIcon={<FaFacebook />}
                            colorScheme="purple"
                            variant="outline"
                            size="lg"
                            width="100%">
                            Facebook
                        </Button>
                    </Flex>

                    {/* Input Groups */}
                    <Flex
                        w="100%"
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap="20px"
                        textColor={DEFAULT_TEXT_COLOR}>
                        {/* Divider */}
                        <Flex w="100%" position="relative">
                            <Divider />
                            <AbsoluteCenter
                                px="1"
                                fontWeight="600"
                                bg="white"
                                w="68%"
                                textAlign="center"
                                textColor="gray.400">
                                atau lanjut menggunakan email
                            </AbsoluteCenter>
                        </Flex>

                        {/* Email */}
                        <Flex flexDir="column" gap="10px" w="100%">
                            <InputGroup>
                                <InputLeftElement
                                    color="gray.400"
                                    pointerEvents="none">
                                    <FaEdit />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    pl="40px"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement
                                    color="gray.400"
                                    pointerEvents="none">
                                    <FaEnvelope />
                                </InputLeftElement>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    pl="40px"
                                />
                            </InputGroup>
                            <Password />
                        </Flex>
                    </Flex>
                    <Button>Log In</Button>
                </Flex>

                {/* Link to Register */}
                <Flex flexDir={"row"} textColor={DEFAULT_TEXT_COLOR}>
                    <Text>Don't have an account?</Text>
                    <a href="/register">Create an Account</a>
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
