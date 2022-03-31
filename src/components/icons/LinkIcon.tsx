import { createIcon } from "@chakra-ui/icons";

const LinkIcon = createIcon({
    displayName: "LinkIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <path
                d="M12.3499 11.65L18.9999 5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M13.4001 5H19.0001V10.6"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M10.6 5H5V19H19V13.2564"
                stroke="currentColor"
                strokeWidth="2"
            />
        </>
    ),
});

export default LinkIcon;
