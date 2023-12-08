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
import { AuthContext } from '../services/AuthProvider';
import React from "react"
import { useRouter } from "next/navigation"




export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()

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
                    <DesktopNav />


                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const { push } = useRouter();
    const user = React.useContext(AuthContext)?.user;
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {!user?.id && (
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

            {user?.id && (
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
                            <Avatar name='Naura Valda' src='https://bit.ly/broken-link'/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Naura Valda<br/>nauravalda@gmail.com</MenuItem>
                            <MenuDivider />
                            <MenuItem
                            onClick={() => {
                                fetch('/api/auth/logout', {
                                  method: 'POST'
                                }).then(() => {
                                  push('/');
                                });
                              }}
                            >Log out</MenuItem>
                        </MenuList>
                    </Menu>
                    
                </Flex>
            )}

        </Stack>
    )
}


const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
            </Flex>
        </Stack>
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
