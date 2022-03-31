import { createIcon } from "@chakra-ui/icons";

const LocationIcon = createIcon({
    displayName: "LocationIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <g clipPath="url(#clip0_361_3370)">
                <path
                    fill="currentColor"
                    d="M12 5a4.777 4.777 0 00-1.924.376c-.61.258-1.165.64-1.631 1.124a5.143 5.143 0 00-1.083 1.693A5.296 5.296 0 007 10.19c0 3.893 4.521 8.349 4.709 8.543l.291.266.292-.266C12.48 18.54 17 14.083 17 10.19a5.298 5.298 0 00-.363-1.997A5.142 5.142 0 0015.554 6.5a4.926 4.926 0 00-1.63-1.124A4.776 4.776 0 0011.998 5zm0 6.92c-.33 0-.652-.101-.927-.291a1.718 1.718 0 01-.613-.777 1.791 1.791 0 01-.095-1c.064-.335.223-.643.456-.885s.53-.407.853-.474a1.61 1.61 0 01.963.099c.305.13.565.352.748.637.183.284.281.619.281.961 0 .46-.175.9-.488 1.224a1.636 1.636 0 01-1.179.507z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_361_3370">
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

export default LocationIcon;
