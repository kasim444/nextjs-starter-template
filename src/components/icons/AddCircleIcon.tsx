import { createIcon } from "@chakra-ui/icons";

const AddCircleIcon = createIcon({
    displayName: "AddCircleIcon",
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
                stroke="currentColor"
                strokeWidth="2"
            />
            <path d="M7 11H15" stroke="currentColor" strokeWidth="2" />
            <path d="M11 7L11 15" stroke="currentColor" strokeWidth="2" />
        </>
    ),
});

export default AddCircleIcon;
