"use client";
import { BasicInput } from "@/components/Input";
import { Password } from "@/components/Password";
import { Button, Checkbox, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaFacebook, FaGoogle } from "react-icons/fa";

export function LoginContent() {
    const DEFAULT_TEXT_COLOR = "gray.800";

    const [email, setEmail] = useState<string>();
    const handleEmail = (item: string) => {
        setEmail(item);
        // console.log("Changed: " + email);
    };

    const [pass, setPass] = useState<string>();
    const handlePass = (item: string) => {
        setPass(item);
        // console.log("Changed: " + pass);
    };

    return (
        // {/* Login */}
        <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="40px">
            {/* Login Info */}
            <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap="10px"
                textColor={DEFAULT_TEXT_COLOR}>
                <Text fontSize="36px" fontWeight="800">
                    Login to Your Account
                </Text>
                <Text fontSize="16px" fontWeight="600">
                    Selamat datang kembali! Silakan login
                </Text>
            </Flex>

            {/* Input Groups */}
            <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap="10px"
                textColor={DEFAULT_TEXT_COLOR}
                w="100%">
                <BasicInput
                    placeholder="Email"
                    type="email"
                    icons={<FaEnvelope />}
                    getValue={handleEmail}
                />
                <Password getPass={handlePass} />

                {/* Remember Me & Forgot Password */}
                <Flex justifyContent={"space-between"} alignSelf={"stretch"}>
                    <Checkbox size="sm" textColor={DEFAULT_TEXT_COLOR}>
                        Remember me
                    </Checkbox>
                    <Link
                        href="/forgot-password"
                        fontSize="14px"
                        fontWeight="700"
                        textColor="purple.800">
                        Forgot Password?
                    </Link>
                </Flex>
            </Flex>

            {/* Google & Facebook */}
            <Flex flexDir="column" gap="20px" w="100%">
                <Flex gap="20px">
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

                {/* Log In Button */}
                <Button
                    bg="purple.500"
                    color="white"
                    _hover={{ bg: "purple.400" }}
                    onClick={() => {
                        // login
                    }}>
                    Log In
                </Button>
            </Flex>
        </Flex>
    );
}
