import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentSingleStyleConfig = {
    baseStyle: {
        fontFamily: "heading",
        fontWeight: "bold",
        lineHeight: "shorter",
    },

    sizes: {
        h1: {
            fontSize: "8xl",
        },

        h2: {
            fontSize: { base: "xl", lg: "4xl" },
        },

        h3: {
            fontWeight: "semibold",
            fontSize: "4xl",
        },

        h4: {
            fontWeight: "semibold",
            fontSize: "xl",
        },

        h5: {
            fontWeight: "medium",
            fontSize: "xl",
        },

        h6: {
            fontWeight: "bold",
            fontSize: "xl",
        },
    },

    variants: {
        mobileParentNavItem: {
            fontSize: "md",
            lineHeight: "26",
            fontWeight: "semibold",
            color: "brand.500",
        },
    },

    defaultProps: {
        size: "h1",
    },
};
