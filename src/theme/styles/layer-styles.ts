import { SystemStyleObject } from "@chakra-ui/react";

export const LAYER_STYLES: SystemStyleObject = {
    hamburgerMenu: {
        position: "absolute",
        width: "6",
        height: "0.5",
        transition: "0.4s",
    },

    sliderNavButton: {
        width: "10",
        height: "10",
        rounded: "3xl",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "brand.500",
        transition: "transform 0.3s ease",
        _hover: {
            transform: "scale(1.05)",
        },
        _active: {
            transform: "scale(0.95)",
        },
    },
};
