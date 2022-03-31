import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Button: ComponentSingleStyleConfig = {
    baseStyle: {
        lineHeight: "7",
        fontWeight: "bold",
        borderRadius: "none",
        _focus: {
            boxShadow: "none",
        },
        _disabled: {
            opacity: "1",
            background: "brand.700",
        },
        _hover: {
            _disabled: {
                background: "brand.800",
            },
        },
    },

    sizes: {
        primary: {
            h: 12,
            minW: "186px",
            fontSize: "sm",
            px: 3,
        },

        withIcon: {
            h: 12,
            minW: "244px",
            fontSize: "sm",
            px: 3,
            lineHeight: "26",
        },

        eventTabButton: {
            height: { base: "47px", lg: "80px" },
            minWidth: "auto",
        },
    },

    variants: {
        outline: {
            color: "brand.500",
        },

        addToCalender: {
            bg: "none",
            color: "inherit",
            m: 0,
            p: "0",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "sm",
            fontWeight: "normal",
            lineHeight: "26",
            minWidth: "135px",
        },

        eventTabButton: {
            fontSize: "sm",
            fontWeight: "normal",
            lineHeight: "26",
        },

        eventTabButtonActive: {
            color: "brand.500",
            fontSize: "sm",
            fontWeight: "bold",
            lineHeight: "26",
        },

        linkWithIcon: {
            bg: "none",
            color: "inherit",
            m: 0,
            p: 0,
            minWidth: "auto",
            height: "26px",
            display: "flex",
            alignItems: "center",
            fontSize: "sm",
            fontWeight: "normal",
            lineHeight: "26",
            _hover: {
                color: "brand.500",
            },
        },
    },

    defaultProps: {
        colorScheme: "brand",
        size: "primary",
    },
};
