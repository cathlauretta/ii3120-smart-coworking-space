import React from 'react'
import { Flex, Button, Image, InputGroup, Input, InputLeftElement, Icon, Text } from '@chakra-ui/react'
import { Brand } from '@/components/brand'
import { Password } from '@/components/Password'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

export default function LoginPage() {
    const DEFAULT_TEXT_COLOR = '#1A202C'

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
                    >
                        <InputGroup size={'md'}>
                            <InputLeftElement children={<Icon name="email" color="gray.400"/>} />
                            <Input placeholder='Email' alignItems={'flex-start'}/>
                        </InputGroup>
                        <Password/>
                    </Flex>
                    <Flex gap='20px'>
                        <Button leftIcon={<FaGoogle />} colorScheme='purple' variant='outline' size="lg" width="100%">
                            Google
                        </Button>
                        <Button leftIcon={<FaFacebook />} colorScheme='purple' variant='outline' size="lg" width="100%">
                            Facebook
                        </Button>
                    </Flex>
                    <Button>
                        Log In
                    </Button>
                </Flex>

                {/* Link to Register */}
                <Flex flexDir={'row'} textColor={DEFAULT_TEXT_COLOR}>
                    <Text>Don't have an account?</Text>
                    <a href="/signup">Create an Account</a>
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
