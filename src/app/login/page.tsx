import React from 'react'
import {
    Flex,
    Button,
    Image,
    InputGroup,
    Input,
    InputLeftElement,
    Text,
    Checkbox,
    Link,
} from '@chakra-ui/react'
import { Brand } from '@/components/brand'
import { Password } from '@/components/Password'
import { FaEdit, FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function LoginPage() {
    const DEFAULT_TEXT_COLOR = 'gray.800'

    return (
        <Flex
            w = "100%"
            h = "100vh"
        >
            {/* Kiri */}
            <Flex
                w = "50%"
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap='80px'
            >
                <Brand/>

                {/* Login */}
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap='40px'
                >
                    {/* Login Info */}
                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap='10px'
                        textColor={DEFAULT_TEXT_COLOR}
                    >
                        <Text fontSize='36px' fontWeight='800'>Login to Your Account</Text>
                        <Text fontSize='16px' fontWeight='600'>Selamat datang kembali! Silakan login</Text>
                    </Flex>

                    {/* Input Groups */}
                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap='10px'
                        textColor={DEFAULT_TEXT_COLOR}
                        w = '100%'
                    >
                        <InputGroup size={'md'}>
                            <InputLeftElement color="gray.400"><FaEnvelope/></InputLeftElement>
                            <Input placeholder='Email' alignItems={'flex-start'} pl='40px'/>
                        </InputGroup>
                        <Password/>
                        <Flex justifyContent={'space-between'} alignSelf={'stretch'}>
                            <Checkbox size='sm' textColor={DEFAULT_TEXT_COLOR}>Remember me</Checkbox>
                            <Link href="/forgot-password" fontSize='14px' fontWeight='700' textColor='purple.800'>Forgot Password?</Link>
                        </Flex>
                    </Flex>

                    {/* Button */}
                    <Flex flexDir='column' gap='20px' w='100%'>
                        <Flex gap='20px'>
                            <Button leftIcon={<FaGoogle />} colorScheme='purple' variant='outline' size="lg" width="100%">
                                Google
                            </Button>
                            <Button leftIcon={<FaFacebook />} colorScheme='purple' variant='outline' size="lg" width="100%">
                                Facebook
                            </Button>
                        </Flex>
                        <Button
                            bg='purple.500'
                            color='white'
                            _hover={{bg: 'purple.400'}}
                        >
                            Log In
                        </Button>
                    </Flex>
                </Flex>

                {/* Link to Register */}
                <Flex flexDir={'row'} textColor='purple.800' gap='10px'>
                    <Text>Don't have an account?</Text>
                    <Link href="/signup" fontWeight='700'>Create an Account</Link>
                </Flex>
            
            </Flex>

            {/* Kanan */}
            <Flex
                w = "50%"
                position={"relative"}
                bgColor = '#FBB6CE'
            >
                <Flex
                    position={"absolute"}
                    left={0}
                    bottom={0}
                    overflow={'hidden'}
                    w='100%'
                    flexDir={'row'}
                    alignItems={'end'}
                >
                    <Image
                        // position={"absolute"}
                        // bottom={"0"}
                        // right={"0"}
                        src = "/assets/image/List-is-empty.png"
                    />
                    <Image
                        // position={"absolute"}
                        // bottom={"0"}
                        // left={"0"}
                        src = "/assets/image/Friendship.png"
                        // display={"block"}
                        minH={0}
                        objectFit={'contain'}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}
