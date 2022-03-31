import { createIcon } from "@chakra-ui/icons";

const ArrowDownIcon = createIcon({
    displayName: "ArrowDownIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: <path d="M12 16L6 9H18L12 16Z" fill="currentColor" />,
});

export default ArrowDownIcon;
