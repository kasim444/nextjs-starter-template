import { createIcon } from "@chakra-ui/icons";

const FilterIcon = createIcon({
    displayName: "FilterIcon",
    viewBox: "0 0 10 18",
    defaultProps: {
        width: "10px",
        height: "18px",
        fill: "none",
    },
    path: (
        <>
            <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="8"
                cy="9"
                r="1.5"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="2"
                cy="16"
                r="1.5"
                fill="currentColor"
                stroke="currentColor"
            />
        </>
    ),
});

export default FilterIcon;
