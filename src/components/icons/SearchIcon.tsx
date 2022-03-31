import { createIcon } from "@chakra-ui/icons";

const SearchIcon = createIcon({
    displayName: "SearchIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16ZM15.2929 16.7071L20.2929 21.7071L21.7071 20.2929L16.7071 15.2929L15.2929 16.7071Z"
            fill="currentColor"
        />
    ),
});

export default SearchIcon;
