import { createIcon } from "@chakra-ui/icons";

const MailIcon = createIcon({
    displayName: "MailIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
    },
    path: (
        <>
            <g fill="currentColor" clipPath="url(#clip0_361_3380)">
                <path d="M5.157 7.334a.6.6 0 01.2.093L12 12.135l6.643-4.708a.615.615 0 01.2-.093.817.817 0 00-.66-.334H5.818a.825.825 0 00-.66.334z"></path>
                <path d="M19.002 16.19V8.666l-6.643 4.709a.617.617 0 01-.715 0L5 8.666v7.523c0 .215.086.421.24.573a.822.822 0 00.578.238h12.365a.822.822 0 00.579-.238.807.807 0 00.24-.573z"></path>
            </g>
            <defs>
                <clipPath id="clip0_361_3380">
                    <path
                        fill="currentColor"
                        d="M0 0H14V10H0z"
                        transform="translate(5 7)"
                    ></path>
                </clipPath>
            </defs>
        </>
    ),
});

export default MailIcon;
