import { createIcon } from "@chakra-ui/icons";

const MinusIcon = createIcon({
    displayName: "MinusIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: <path d="M21 12H3" stroke="currentColor" strokeWidth="2" />,
});

export default MinusIcon;
