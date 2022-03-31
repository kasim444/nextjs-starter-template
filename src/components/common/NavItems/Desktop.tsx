import { Stack } from "@chakra-ui/react";
import { NavItem } from "../";
import { INavItems } from "@interfaces";

type INavItemsDesktop = INavItems;

const NavItemsDesktop = ({ navigationItems }: INavItemsDesktop) => {
    return (
        <Stack
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "flex-start", lg: "center" }}
            spacing="7"
        >
            {navigationItems.map((nav, i) => (
                <NavItem.Desktop key={i} {...nav} />
            ))}
        </Stack>
    );
};

export default NavItemsDesktop;
