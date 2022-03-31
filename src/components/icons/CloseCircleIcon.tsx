import { createIcon } from "@chakra-ui/icons";

const CloseCircleIcon = createIcon({
    displayName: "CloseCircleIcon",
    viewBox: "0 0 32 32",
    defaultProps: {
        width: "22px",
        height: "22px",
        fill: "none",
    },
    path: (
        <>
            <circle
                cx="16"
                cy="16"
                r="15"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M10.6666 10.6667L21.3333 21.3334"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M21.3334 10.6667L10.6667 21.3334"
                stroke="currentColor"
                strokeWidth="2"
            />
        </>
    ),
});

export default CloseCircleIcon;
