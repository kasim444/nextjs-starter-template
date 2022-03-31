import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { IHeader } from "@interfaces";
import { observer } from "mobx-react-lite";
import { NavItems } from "@common";
import { Brand, HamburgerMenu } from "@elements";
import { useStore } from "@store";

const Header = observer(({ navigationItems, containerProps }: IHeader) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const {
        ui: { isOpenDrawer, onToggleDrawer },
    } = useStore();

    return (
        <Box
            as="header"
            zIndex="header"
            display="flex"
            alignItems="center"
            width="full"
            py="4"
            position="sticky"
            top="0"
            background="white.default"
            {...containerProps}
        >
            <Container
                as={Flex}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                maxWidth="full"
            >
                <Brand />

                {isDesktop ? (
                    <NavItems.Desktop navigationItems={navigationItems} />
                ) : (
                    <HamburgerMenu
                        isOpen={isOpenDrawer}
                        onToggle={onToggleDrawer}
                    />
                )}
            </Container>
        </Box>
    );
});

export default Header;
