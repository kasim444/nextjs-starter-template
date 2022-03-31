export const GLOBAL = {
    "*": {
        WebkitTapHighlightColor: "transparent",
    },
    "*, *::before, ::after": {
        borderColor: "gray.light",
    },
    "*:focus": {
        outline: "none",
    },
    html: {
        scrollBehavior: "smooth",
        fontSize: "sm",
        fontFamily: "body",
        color: "black.default",
        lineHeight: "tall",
    },
    "@-moz-document url-prefix()": {
        html: {
            scrollBehavior: "auto",
        },
    },
    body: {
        overflowX: "hidden",
        background: "white.default",
        fontSize: "sm",
        color: "black.default",
        lineHeight: "tall",
        "&::-webkit-scrollbar": {
            width: "2",
        },
        "&::-webkit-scrollbar-track": {
            background: "brand.400",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "brand.600",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "brand.500",
        },
    },
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
        {
            WebkitBoxShadow: "0 0 0 30px white inset !important",
        },
    ".grecaptcha-badge": { visibility: "hidden" },
    ".textTruncate": {
        fontSize: "sm",
        fontWeight: "normal",
        lineHeight: "26",
    },
    ".textTruncate__anchor": {
        fontWeight: "bold",
        textDecoration: "underline",
    },
};
