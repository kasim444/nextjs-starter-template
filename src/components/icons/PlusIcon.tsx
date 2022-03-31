import { createIcon } from "@chakra-ui/icons";

const PlusIcon = createIcon({
    displayName: "PlusIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <path d="M21 12H3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 21L12 3" stroke="currentColor" strokeWidth="2" />
        </>
    ),
});

export default PlusIcon;
