import { createIcon } from "@chakra-ui/icons";

const ArrowBackIcon = createIcon({
    displayName: "ArrowBackIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: <path d="M8 11.5L15 5.5L15 17.5L8 11.5Z" fill="currentColor" />,
});

export default ArrowBackIcon;
