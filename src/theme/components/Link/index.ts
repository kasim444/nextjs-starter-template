import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Link: ComponentSingleStyleConfig = {
    baseStyle: {
        transitionProperty: "common",
        transitionDuration: "normal",
        _focus: {
            boxShadow: "none",
        },
    },

    sizes: {
        default: {},

        primaryButton: {
            h: 12,
            minW: "186px",
            fontSize: "sm",
            px: 3,
        },

        secondaryButton: {
            h: 12,
            minW: "163px",
            fontSize: "sm",
            px: 3,
        },

        primaryButtonWithIcon: {
            h: 12,
            minW: "244px",
            fontSize: "sm",
            px: 3,
            lineHeight: "26",
        },
    },

    variants: {
        unstyled: {},

        parentNavLink: {
            display: "inline-flex",
            fontWeight: { base: "semibold", lg: "normal" },
            fontSize: { base: "md", lg: "sm" },
            color: { base: "brand.500", lg: "white.default" },
            _hover: {
                color: "brand.600",
                textDecoration: "none",
            },
        },

        childNavLink: {
            color: { base: "white.default", lg: "black.default" },
            _hover: {
                color: "brand.600",
                textDecoration: "none",
            },
        },

        primaryButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white.default",
            backgroundColor: "brand.500",
            lineHeight: "7",
            fontWeight: "bold",
            borderRadius: "none",
            "& > svg": {
                mr: 4,
            },
            _focus: {
                boxShadow: "none",
            },
            _disabled: {
                opacity: "1",
                background: "brand.700",
            },
            _hover: {
                background: "brand.600",
                textDecoration: "none",
                _disabled: {
                    background: "brand.800",
                },
            },
            _active: {
                background: "brand.700",
            },
        },

        secondaryButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white.default",
            backgroundColor: "black.default",
            lineHeight: "7",
            fontWeight: "bold",
            borderRadius: "none",
            "& > svg": {
                mr: 4,
            },
            _focus: {
                boxShadow: "none",
            },
            _disabled: {
                opacity: "1",
                background: "brand.700",
            },
            _hover: {
                background: "brand.500",
                textDecoration: "none",
                _disabled: {
                    background: "brand.800",
                },
            },
            _active: {
                background: "brand.700",
            },
        },

        footerNavLink: {
            color: "white.default",
            _hover: {
                color: "brand.600",
                textDecoration: "none",
            },
        },

        linkWithIcon: {
            display: "flex",
            alignItems: "stretch",
            _hover: {
                textDecoration: "none",
                color: "brand.500",
            },
        },
    },
};
