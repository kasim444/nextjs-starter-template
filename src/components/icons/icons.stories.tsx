import { Flex, SimpleGrid, Heading, Text, TextProps } from "@chakra-ui/react";
import {
    BrandLogo,
    LinkIcon,
    TimeIcon,
    SearchIcon,
    CloseIcon,
    HamburgerIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowBackIcon,
    ArrowNextIcon,
    DoubleArrowDownIcon,
    FilterIcon,
    LocationIcon,
    PhoneIcon,
    MailIcon,
    TickIcon,
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    AddCircleIcon,
    CloseCircleIcon,
    PlusIcon,
    MinusIcon,
} from "./";

export default {
    title: "Icons",
    component: BrandLogo,
};

export const Icons = () => (
    <Flex flexDirection="column" alignItems="center">
        <Heading my="8">Icons</Heading>
        <SimpleGrid columns={7} spacing={2} placeItems="center">
            <Flex flexDirection="column" alignItems="center">
                <PlusIcon />
                <IconNameText>PlusIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <MinusIcon />
                <IconNameText>MinusIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <ArrowUpIcon />
                <IconNameText>ArrowUpIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <ArrowDownIcon />
                <IconNameText>ArrowDownIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <ArrowBackIcon />
                <IconNameText>ArrowBackIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <ArrowNextIcon />
                <IconNameText>ArrowNextIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <DoubleArrowDownIcon />
                <IconNameText>DoubleArrowDownIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <AddCircleIcon />
                <IconNameText>AddCircleIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <CloseCircleIcon />
                <IconNameText>CloseCircleIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <LinkIcon />
                <IconNameText>LinkIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <TimeIcon />
                <IconNameText>TimeIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <SearchIcon />
                <IconNameText>SearchIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <CloseIcon />
                <IconNameText>CloseIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <HamburgerIcon />
                <IconNameText>HamburgerIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <FilterIcon />
                <IconNameText>FilterIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <LocationIcon />
                <IconNameText>LocationIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <PhoneIcon />
                <IconNameText>PhoneIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <MailIcon />
                <IconNameText>MailIcon</IconNameText>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <TickIcon />
                <IconNameText>TickIcon</IconNameText>
            </Flex>
        </SimpleGrid>
    </Flex>
);

export const Social = () => (
    <Flex flexDirection="column" alignItems="center">
        <Heading my="8">Social Icons</Heading>
        <SimpleGrid columns={7} spacing={2} placeItems="center">
            <Flex flexDirection="column" alignItems="center">
                <InstagramIcon />
                <IconNameText>InstagramIcon</IconNameText>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
                <FacebookIcon />
                <IconNameText>FacebookIcon</IconNameText>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
                <TwitterIcon />
                <IconNameText>TwitterIcon</IconNameText>
            </Flex>
        </SimpleGrid>
    </Flex>
);

export const Brand = () => (
    <Flex flexDirection="column" alignItems="center" background="black.default">
        <Heading my="8" color="white.default">
            Brand Logos
        </Heading>
        <SimpleGrid columns={2} spacing={10} placeItems="center">
            <Flex flexDirection="column" alignItems="center">
                <BrandLogo />
                <IconNameText>BrandVerticalLogo</IconNameText>
            </Flex>
        </SimpleGrid>
    </Flex>
);

const IconNameText = ({ children, ...rest }: TextProps) => (
    <Text fontSize="xs" {...rest}>
        {children}
    </Text>
);
