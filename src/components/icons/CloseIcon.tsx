import { createIcon } from "@chakra-ui/icons";

const CloseIcon = createIcon({
    displayName: "CloseIcon",
    viewBox: "0 0 32 32",
    defaultProps: {
        width: "32px",
        height: "32px",
        fill: "none",
    },
    path: (
        <>
            <path
                d="M7.8053 7.8063L24.1938 24.1948"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M24.1947 7.8063L7.80624 24.1948"
                stroke="currentColor"
                strokeWidth="2"
            />
        </>
    ),
});

export default CloseIcon;
