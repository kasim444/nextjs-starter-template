import { createIcon } from "@chakra-ui/icons";

const DoubleArrowDownIcon = createIcon({
    displayName: "DoubleArrowDownIcon",
    viewBox: "0 0 37 38",
    defaultProps: {
        width: "37px",
        height: "38px",
        color: "brand.500",
        fill: "none",
    },
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2458 9L17.8592 22.1667L26.2339 9H36.4167L17.5805 37.5L0 9H10.2458ZM10.2458 9L5.04171 0H31.9584L26.2339 9H10.2458Z"
            fill="currentColor"
        />
    ),
});

export default DoubleArrowDownIcon;
