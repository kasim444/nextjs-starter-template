import { createIcon } from "@chakra-ui/icons";

const HamburgerIcon = createIcon({
    displayName: "HamburgerIcon",
    viewBox: "0 0 32 24",
    defaultProps: {
        width: "32px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <path d="M25 5H3" stroke="currentColor" strokeWidth="2" />
            <path d="M29 12H5" stroke="currentColor" strokeWidth="2" />
            <path d="M25 19H3" stroke="currentColor" strokeWidth="2" />
        </>
    ),
});

export default HamburgerIcon;
