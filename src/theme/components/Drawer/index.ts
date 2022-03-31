import { ComponentStyleConfig } from "@chakra-ui/react";

export const Drawer: ComponentStyleConfig = {
    baseStyle: {
        overlay: {
            background: "transparent",
        },

        dialog: {
            overflowY: "auto",
        },

        dialogContainer: {},

        header: {
            zIndex: "1",
            p: "0",
            minHeight: "header.mobileHeight",
        },

        body: {
            overflow: "visible",
        },

        footer: {
            p: "0",
        },
    },

    sizes: {
        full: {
            dialog: {
                maxW: "100vw",
            },
        },
    },

    defaultProps: {
        size: "full",
    },
};
