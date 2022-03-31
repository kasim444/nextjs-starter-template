import { createIcon } from "@chakra-ui/icons";

const ArrowUpIcon = createIcon({
    displayName: "ArrowUpIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: <path d="M12 8L18 15L6 15L12 8Z" fill="currentColor" />,
});

export default ArrowUpIcon;
