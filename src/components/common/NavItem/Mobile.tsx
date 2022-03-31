import {
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    Heading,
    VStack,
} from "@chakra-ui/react";
import { INavItem } from "@interfaces";
import { Link } from "@elements";
import { ArrowDownIcon } from "@icons";

type INavItemMobile = INavItem;

const NavItemMobile = ({
    parentButtonLabel,
    parentButtonHref,
    subNavItems,
}: INavItemMobile) => {
    if (subNavItems.length === 0 || !subNavItems) {
        return (
            <Link variant="parentNavLink" mt="5" href={parentButtonHref}>
                {parentButtonLabel}
            </Link>
        );
    }

    return (
        <AccordionItem
            pt="30px"
            pb="5"
            borderTopWidth="0px"
            _last={{
                borderBottomWidth: "0px",
            }}
        >
            {({ isExpanded }) => (
                <>
                    <Heading variant="mobileParentNavItem">
                        <AccordionButton
                            fontSize="inherit"
                            fontWeight="inherit"
                            lineHeight="inherit"
                            _hover={{
                                background: "transparent",
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                            p="0"
                        >
                            <Box
                                as="span"
                                textAlign="left"
                                fontSize="inherit"
                                fontWeight="inherit"
                                lineHeight="inherit"
                                mr="1.5"
                            >
                                {parentButtonLabel}
                            </Box>
                            <ArrowDownIcon
                                color="brand.500"
                                transition="transform 0.3s ease"
                                transform={
                                    isExpanded
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)"
                                }
                            />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pt="5" px="0" pb="0">
                        <VStack spacing="2.5" alignItems="flex-start">
                            {subNavItems.map((nav) => (
                                <Link
                                    key={nav.id}
                                    href={nav.href}
                                    variant="childNavLink"
                                    color={"black.default"}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                        </VStack>
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default NavItemMobile;
