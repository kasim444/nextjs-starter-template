import { createIcon } from "@chakra-ui/icons";

const TickIcon = createIcon({
    displayName: "TickIcon",
    viewBox: "0 0 22 22",
    defaultProps: {
        width: "22px",
        height: "22px",
        fill: "none",
    },
    path: (
        <>
            <circle
                cx="11"
                cy="11"
                r="10"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path d="M5 10.5L9.5 15L17.5 7" stroke="white" strokeWidth="2" />
        </>
    ),
});

export default TickIcon;
