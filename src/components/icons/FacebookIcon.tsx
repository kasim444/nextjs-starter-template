import { createIcon } from "@chakra-ui/icons";

const FacebookIcon = createIcon({
    displayName: "FacebookIcon",
    viewBox: "0 0 25 25",
    defaultProps: {
        width: "25px",
        height: "25px",
        fill: "none",
        color: "brand.500",
    },
    path: (
        <path
            d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.739 4.57104 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6355 4.88281 18.0664 5.12695 18.0664 5.12695V8.20312H16.4902C14.9375 8.20312 14.4531 9.16675 14.4531 10.1562V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.429 23.9104 25 18.739 25 12.5Z"
            fill="currentColor"
        />
    ),
});

export default FacebookIcon;
