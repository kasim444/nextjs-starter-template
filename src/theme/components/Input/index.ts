import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
    baseStyle: {
        field: {
            color: "initial",
            borderWidth: 1,
            borderColor: "gray.light",
            borderRadius: "none",
            px: "4",
            fontSize: "xs",
            lineHeight: "6",
            _focus: {
                boxShadow: "none",
                borderColor: "brand.600",
            },
            _placeholder: {
                color: "gray.primary",
            },
            _invalid: {
                borderColor: "brand.700",
            },
        },
    },

    sizes: {
        default: {
            field: {
                height: "48px",
                width: "200px",
            },
        },

        withIcon: {
            field: {
                height: "48px",
                width: "200px",
                px: "46px",
            },
        },
    },

    variants: {
        flushed: {
            field: {
                height: "40px",
                width: "full",
                border: "none",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "gray.light",
                pl: "9",
                pb: "1",
                fontWeight: "bold",
                fontSize: "md",
                lineHeight: "26",
            },
        },
    },

    defaultProps: {
        variant: "default",
        size: "default",
    },
};
