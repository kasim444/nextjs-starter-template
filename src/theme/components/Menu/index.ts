import { ComponentStyleConfig } from "@chakra-ui/react";

export const Menu: ComponentStyleConfig = {
    baseStyle: {
        button: {
            minHeight: "header.desktopHeight",
            fontSize: "sm",
            lineHeight: "26",
            px: { base: "0", lg: "3" },
            display: "inline-flex",
            alignItems: "center",
            color: "white.default",
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            _hover: {
                color: "brand.500",
            },
        },
        list: {
            borderRadius: "none",
            pt: "6",
            pb: "8",
            px: "8",
            minWidth: "menu.desktop",
            borderWidth: 0,
            boxShadow: "md",
        },
        item: {
            py: "0",
            px: { base: "0", lg: "4" },
            _hover: {
                color: "brand.500",
                textDecoration: "none",
            },
            _active: {
                background: "transparent",
            },
            _focus: {
                background: "transparent",
            },
        },
        divider: {
            opacity: 1,
            my: "2.5",
        },
    },
};
