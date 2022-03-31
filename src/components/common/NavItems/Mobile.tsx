import { Accordion } from "@chakra-ui/react";
import { NavItem } from "../";
import { INavItems } from "@interfaces";

type INavItemsMobile = Omit<INavItems, "onClickParentNavItem">;

const NavItemsMobile = ({ navigationItems }: INavItemsMobile) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {navigationItems.map((nav) => (
                <NavItem.Mobile key={nav.id} {...nav} />
            ))}
        </Accordion>
    );
};

export default NavItemsMobile;
