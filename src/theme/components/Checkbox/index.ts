import { ComponentStyleConfig } from "@chakra-ui/react";

export const Checkbox: ComponentStyleConfig = {
    baseStyle: {
        control: {
            _focus: {
                boxShadow: "none",
            },
        },

        label: {
            ml: "2.5",
        },
    },

    sizes: {
        md: {
            control: {
                w: 5,
                h: 5,
            },
            label: {
                fontSize: "sm",
                fontWeight: "normal",
                lineHeight: "26",
            },
            icon: {
                fontSize: "10px",
            },
        },
    },

    defaultProps: {
        size: "md",
        colorScheme: "brand",
    },
};
