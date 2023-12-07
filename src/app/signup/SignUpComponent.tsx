"use client";
import React, { useState } from "react";
import {
    Flex,
    Button,
    Text,
    Divider,
    AbsoluteCenter,
} from "@chakra-ui/react";
import { Password } from "@/components/Password";
import { FaEnvelope, FaEdit, FaGoogle, FaFacebook } from "react-icons/fa";
import { BasicInput } from "@/components/Input";
import { registerAndCreateAccount } from "@/services/auth";
import { register } from "@/lib/functions/register";

const desc =
    "Bergabung menjadi bagian dari Centrice Member!\nPilih metode Sign Up:";

export function SignupContent() {
    const DEFAULT_TEXT_COLOR = "#1A202C";

    const [fName, setFName] = useState<string>("default");
    const handleFName = (item: string) => {
        setFName(item);
        // console.log("Changed: " + fName);
    };

    const [email, setEmail] = useState<string>("default");
    const handleEmail = (item: string) => {
        setEmail(item);
        // console.log("Changed: " + email);
    };

    const [pass, setPass] = useState<string>("default");
    const handlePass = (item: string) => {
        setPass(item);
        // console.log("Changed: " + pass);
    };

    return (
        // { /* Sign Up */ }
        <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="40px">
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

                {/* Registration Part */}
                <Flex flexDir="column" gap="10px" w="100%">
                    <BasicInput placeholder="Full Name" type="text" icons={<FaEdit />}  getValue={handleFName}/>
                    <BasicInput placeholder="Email" type="email" icons={<FaEnvelope />}  getValue={handleEmail}/>
                    <Password getPass={handlePass} />
                </Flex>
            </Flex>

            {/* Sign Up Button */}
            <Button
                w="100%"
                bg="purple.500"
                textColor="white"
                _hover={{ bg: "purple.400" }}
                onClick={() => {
                    register(email, fName, pass)
                }}>
                Sign Up
            </Button>
        </Flex>
    );
}
