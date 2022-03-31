import { Flex, Grid, HStack, VStack, Divider, Text } from "@chakra-ui/react";
import { INavItemsOnFooter } from "@interfaces";
import { Link, SocialMediaLink } from "@elements";

const Footer = ({
    navItems,
    legalNavItems,
    socialMediaLinks,
    contactLinks,
}: INavItemsOnFooter) => {
    return (
        <Flex
            flexDirection="column"
            py={{ base: "30px", lg: "20" }}
            px={{ base: "4", lg: "108px" }}
        >
            <Grid gridTemplateColumns="1fr 1fr" placeItems="flex-start">
                <VStack spacing="2.5" alignItems="flex-start">
                    {navItems.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            variant="footerNavLink"
                            textStyle="body14Normal"
                        >
                            {nav.label}
                        </Link>
                    ))}
                </VStack>
                <HStack spacing="30px" ml="auto">
                    {socialMediaLinks.map((nav) => (
                        <SocialMediaLink
                            key={nav.id}
                            type={nav.type}
                            url={nav.url}
                        />
                    ))}
                </HStack>
            </Grid>
            <Divider mt="26px" mb="30px" />
            <VStack spacing="2.5" alignItems="flex-start">
                {contactLinks.map((nav, i) => (
                    <Text key={i} color="white.default">
                        {nav.text}
                    </Text>
                ))}
            </VStack>
            <Divider mt="26px" mb="30px" />
            <HStack
                flexWrap="wrap"
                spacing="2.5"
                justifyContent={{ base: "center", lg: "space-between" }}
            >
                {legalNavItems.map((nav) => (
                    <Link
                        key={nav.id}
                        href={nav.href}
                        variant="footerNavLink"
                        textStyle="body12Normal"
                    >
                        {nav.label}
                    </Link>
                ))}
            </HStack>
        </Flex>
    );
};

export default Footer;
