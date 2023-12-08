import { Flex, Image, Text } from "@chakra-ui/react";
import "@fontsource/monomaniac-one";

interface Props {
    number: string,
    name: string
}

export const MemberCard = ({number, name}: Props) => {
    return (
        <Flex
            w="428px"
            h="270px"
            bgGradient="linear(to-br, pink.200, purple.200)"
            borderRadius="16px"
            overflow="hidden"
            borderColor="white.800"
            borderWidth="2px">
            <Flex flexDir="column" w="100%">
                <Flex h="53px" alignItems="center" pl="28px" bgGradient="linear(to-r, purple.400, purple.100, purple.300)">
                    <Image boxSize="95px" src="assets/image/brand.svg" />
                </Flex>
                <Flex
                    w="100%"
                    h="100%"
                    flexDir="column"
                    pl="29px"
                    overflow="hidden">
                    <Image
                        boxSize="210px"
                        src="assets/image/CardComponent2.svg"
                        overflow="hidden"
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    h="100%"
                    w="100%"
                    position="relative"
                    top="-10px">
                    <Flex flexDir="column">
                        <Flex alignItems="center" gap="8px" pl="30px">
                            <Image
                                boxSize="12px"
                                src="assets/image/CardDiamond.svg"
                            />
                            <Text
                                fontSize="19px"
                                textColor="purple.800"
                                fontWeight="200"
                                fontFamily="Monomaniac One"
                                mb="2px">
                                CENTRICE MEMBER CARD
                            </Text>
                        </Flex>
                        <Flex pl="28px" position="relative" top="-16px">
                            <Text
                                fontSize="34px"
                                textColor="purple.800"
                                fontWeight="200"
                                fontFamily="Monomaniac One">
                                {number}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        bg="white"
                        pl="28px"
                        borderEndRadius="8px"
                        position="relative"
                        top="-8px">
                        <Text
                            fontSize="20px"
                            textColor="purple.800"
                            fontWeight="400"
                            fontFamily="Monomaniac One"
                            mb="1px">
                            {name?.toUpperCase()}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w="200px" h="53px" bgGradient="linear(to-l, purple.400, purple.300)">
                <Image
                    boxSize="200px"
                    src="assets/image/CardComponent.svg"
                    position="relative"
                    top="-8px"
                    right="-16px"
                />
            </Flex>
        </Flex>
    );
};
