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
} from "@chakra-ui/react"
import {
    GiHamburgerMenu,
} from "react-icons/gi"
import {
    MdClose
} from "react-icons/md"
import { Brand } from "./brand"
import { AuthContext } from '../services/AuthProvider';

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
                    <Brand/>
                </Flex>
                <Flex  w='100%'></Flex>
                <Flex>
                    <Flex display={{ base: "none", md: "flex" }} px={{ base: 4, md: 20, lg: 32 }} align={"center"}>
                        <DesktopNav />
                    </Flex>

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
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200")
    const linkHoverColor = useColorModeValue("gray.800", "white")
    const popoverContentBgColor = useColorModeValue("white", "gray.800")

    return (
        <Stack direction={"row"} spacing={4}>
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