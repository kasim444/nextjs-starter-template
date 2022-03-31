import { ComponentStyleConfig } from "@chakra-ui/react";

export const Modal: ComponentStyleConfig = {
    baseStyle: {
        overlay: {},
        dialogContainer: {},
        dialog: {
            borderRadius: "none",
        },
        header: {},
        closeButton: {},
        body: {},
        footer: {
            justifyContent: "center",
        },
    },

    sizes: {
        newsletterModal: {
            overlay: {
                zIndex: "newsletterModal",
            },

            dialogContainer: {
                zIndex: "newsletterModal",
            },

            dialog: {
                width: { base: "newsletterModal.widthBase", lg: "full" },
                maxW: "newsletterModal.maxWidth",
            },
        },
    },

    variants: {},

    defaultProps: {},
};
