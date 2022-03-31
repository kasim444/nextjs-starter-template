import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Badge: ComponentSingleStyleConfig = {
    baseStyle: {
        fontSize: "xs",
        fontWeight: "bold",
        lineHeight: "22",
        px: "5",
        minHeight: "22px",
        borderRadius: "none",
        color: "white.default",
        minWidth: { base: "95px", lg: "110px" },
        textAlign: "center",
    },

    variants: {
        concert: {
            background: "yellow.tag",
        },

        theatre: {
            background: "purple.tag",
        },

        standUp: {
            background: "orange.tag",
        },

        cinema: {
            background: "red.tag",
        },

        kid: {
            background: "teal.tag",
        },
    },

    defaultProps: {
        variant: "concert",
        colorScheme: "brand",
    },
};
