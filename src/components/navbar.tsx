'use client'
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
    Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider
} from "@chakra-ui/react"
import {
    GiHamburgerMenu,
} from "react-icons/gi"
import {
    MdClose
} from "react-icons/md"
import { Brand } from "./brand"
import React, { useState } from "react"
import { useRouter } from "next/navigation"



async function getSelf() {
    try {
        const apiUrl = `/api/auth/self`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

type Data = {
    status: string;
    user: User;
}

type User = {
    id: string;
    email: string;
    full_name: string;
    phone_number: string;
    current_membership_id: string;
}

interface NavbarProps {
    type: 'customer' | 'guest';
}


export default function WithSubnavigation({ type }: NavbarProps) {
    const { isOpen, onToggle } = useDisclosure()
    // const [status, setStatus] = useState('error');
    const [user, setUser] = useState<User>({
        id: '',
        email: '',
        full_name: 'O',
        phone_number: '',
        current_membership_id: ''
    });
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    
    const router = useRouter();

    React.useEffect(() => {
        async function checkLogin() {
            const data = await getSelf();
            // setStatus(data?.status);
            setUser(data?.user);
        }
        checkLogin();
    }, []);

    return (
        <Box position='fixed' zIndex="20" width="100%">
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4, md: 20, lg: 32 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <MdClose w={3} h={3} /> : <GiHamburgerMenu w={5} h={5} />
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <Flex justify={{ base: "center", md: "start" }} minW={160}>
                    <Brand />
                </Flex>
                <Flex w='100%'></Flex>
                <Flex>
                    <Stack direction={"row"} spacing={4}>
                        {(type === 'guest') && (
                            <Flex w='100%' className='gap-8 w=full' display={{ base: "none", md: "flex" }} align={"center"}>
                                {NAV_ITEMS.map((navItem) => (
                                    <Box key={navItem.label}>
                                        <Popover trigger={"hover"} placement={"bottom-start"}>
                                            <PopoverTrigger>
                                                <Link
                                                    p={2}
                                                    href={navItem.href ?? "#"}
                                                    fontSize={"sm"}
                                                    fontWeight={500}
                                                    color={linkColor}
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: linkHoverColor,
                                                    }}
                                                >
                                                    {navItem.label}
                                                </Link>
                                            </PopoverTrigger>
                                        </Popover>
                                    </Box>
                                ))}
                                <Button
                                    as={"a"}
                                    display={{ base: "none", md: "inline-flex" }}
                                    fontSize={"sm"}
                                    fontWeight={600}
                                    color={"white"}
                                    href="/login"
                                    bg={"purple.500"}
                                    _hover={{
                                        bg: "purple.400",
                                    }}
                                >
                                    Log In
                                </Button>
                            </Flex>
                        )}

                        {(type === 'customer') && (
                            <Flex w='100%' className='gap-8 w=full' display={{ base: "none", md: "flex" }} align={"center"}>
                                {NAV_ITEMS_CUST.map((navItem) => (
                                    <Box key={navItem.label}>
                                        <Popover trigger={"hover"} placement={"bottom-start"}>
                                            <PopoverTrigger>
                                                <Link
                                                    p={2}
                                                    href={navItem.href ?? "#"}
                                                    fontSize={"sm"}
                                                    fontWeight={500}
                                                    color={linkColor}
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: linkHoverColor,
                                                    }}
                                                >
                                                    {navItem.label}
                                                </Link>
                                            </PopoverTrigger>
                                        </Popover>
                                    </Box>
                                ))}
                                <Menu>
                                    <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                    >
                                        <Avatar name={user?.full_name} src='https://bit.ly/broken-link' />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem
                                            onClick={() => {
                                                fetch('/api/auth/logout', {
                                                    method: 'POST'
                                                }).then(() => {
                                                    router.push('/login');
                                                });
                                            }}
                                        >Log out</MenuItem>
                                    </MenuList>
                                </Menu>

                            </Flex>
                        )}

                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Facility",
        href: "#",
    },
    {
        label: "Community",
        href: "#",
    },
    {
        label: "Prices",
        href: "#",
    },
    {
        label: "Locations",
        href: "#",
    },
]

const NAV_ITEMS_CUST: Array<NavItem> = [
    {
        label: "Workspace",
        href: "#",
    },
    {
        label: "Community",
        href: "#",
    },
]
