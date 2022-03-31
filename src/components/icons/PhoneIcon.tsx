import { createIcon } from "@chakra-ui/icons";

const PhoneIcon = createIcon({
    displayName: "PhoneIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <g clipPath="url(#clip0_361_3381)">
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.906 16.962l-1.367-2.397a.793.793 0 00-1.1-.243l-1.209.708c-1.493-1.001-3.018-3.67-3.129-5.478l1.213-.708a.816.816 0 00.343-1.089L10.28 5.363a.793.793 0 00-1.1-.243l-1.267.74c-2.094 1.22-.067 6.364.915 8.09.982 1.724 4.376 6.066 6.465 4.843l1.267-.739a.802.802 0 00.397-.473.82.82 0 00-.051-.619z"
                    clipRule="evenodd"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_361_3381">
                    <path
                        fill="currentColor"
                        d="M0 0H10V14H0z"
                        transform="translate(7 5)"
                    ></path>
                </clipPath>
            </defs>
        </>
    ),
});

export default PhoneIcon;
