import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@elements";
import { INavItem } from "@interfaces";
import { ArrowDownIcon } from "@icons";

type INavItemDesktop = INavItem;

const NavItemDesktop = ({
    parentButtonLabel,
    parentButtonHref,
    subNavItems,
}: INavItemDesktop) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (subNavItems.length === 0 || !subNavItems) {
        return (
            <Link
                variant="parentNavLink"
                color={"brand.500"}
                href={parentButtonHref}
            >
                {parentButtonLabel}
            </Link>
        );
    }

    return (
        <Menu
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            offset={[-40, 0]}
        >
            <MenuButton color={"brand.500"} role="group">
                {parentButtonLabel}{" "}
                <ArrowDownIcon
                    transitionProperty="common"
                    transitionDuration="fast"
                    transitionTimingFunction="ease-out"
                    color={"brand.500"}
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    _groupHover={{
                        color: "brand.500",
                    }}
                />
            </MenuButton>

            <MenuList zIndex="aboveHeader">
                {subNavItems.map((navItem, i) => (
                    <Box key={navItem.id}>
                        <MenuItem href={navItem.href} as={Link}>
                            {navItem.label}
                        </MenuItem>
                        {i + 1 < subNavItems.length && <MenuDivider />}
                    </Box>
                ))}
            </MenuList>
        </Menu>
    );
};

export default NavItemDesktop;
