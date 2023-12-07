
import {
    Flex,
    Button,
    InputGroup,
    Input,
    InputLeftElement,
    Text,
    Divider,
    AbsoluteCenter,
} from "@chakra-ui/react";
import { Password } from "@/components/Password";
import { FaEnvelope, FaEdit, FaGoogle, FaFacebook } from "react-icons/fa";

const desc =
    "Bergabung menjadi bagian dari Centrice Member!\nPilih metode Sign Up:";
    
export default function SignUpForm() {
    const DEFAULT_TEXT_COLOR = "#1A202C";
 
    return (
        <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="40px"
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

            {/* Sign Up Button */}
            <Button w="100%" bg="purple.500" textColor="white">
                Sign Up
            </Button>
        </Flex>
    )
}