import { createIcon } from "@chakra-ui/icons";

const InstagramIcon = createIcon({
    displayName: "InstagramIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        width: "24px",
        height: "24px",
        fill: "none",
        color: "brand.500",
    },
    path: (
        <>
            <path
                d="M23.9289 7.05386C23.9094 6.05779 23.7201 5.07236 23.3692 4.13992C23.0613 3.34269 22.59 2.61867 21.9857 2.01434C21.3813 1.41001 20.6573 0.938734 19.8601 0.63076C18.9287 0.282109 17.9449 0.0943514 16.9506 0.0755128C15.6669 0.0133251 15.2582 0 12.0022 0C8.74626 0 8.33315 -8.1154e-07 7.05386 0.0755128C6.05808 0.0939351 5.0727 0.281698 4.13992 0.63076C3.33881 0.933424 2.6129 1.40626 2.01223 2.01666C1.40231 2.61512 0.930798 3.33984 0.63078 4.13992C0.279951 5.07236 0.0906718 6.05779 0.0710868 7.05386C0.0133411 8.33315 0 8.74181 0 12.0022C0 15.2626 1.51854e-05 15.6713 0.0710868 16.9506C0.0905686 17.9452 0.27986 18.9292 0.63078 19.8601C0.930739 20.6615 1.40222 21.3877 2.01223 21.9878C2.61405 22.5968 3.33964 23.0694 4.13992 23.3737C5.07325 23.7208 6.05829 23.9085 7.05386 23.9289C8.33315 23.9867 8.74181 24 12.0022 24C15.2626 24 15.6669 24 16.9506 23.9289C17.9447 23.908 18.9282 23.7203 19.8601 23.3737C20.6609 23.0704 21.3867 22.5976 21.9878 21.9878C22.5978 21.3877 23.0693 20.6615 23.3692 19.8601C23.7202 18.9292 23.9095 17.9452 23.9289 16.9506C23.9867 15.6713 24 15.2582 24 12.0022C24 8.74625 23.9867 8.35091 23.9289 7.05386ZM21.7701 16.8529C21.7606 17.6114 21.6209 18.3626 21.357 19.0738C21.158 19.5921 20.8523 20.0628 20.4598 20.4553C20.0672 20.8479 19.5966 21.1536 19.0783 21.3526C18.3671 21.6164 17.6158 21.7561 16.8573 21.7657C15.5913 21.8234 15.2138 21.8367 12.0111 21.8367C8.80845 21.8367 8.42645 21.8367 7.16049 21.7657C6.40204 21.7554 5.65092 21.6157 4.9395 21.3526C4.42234 21.1517 3.95264 20.8453 3.56033 20.453C3.16802 20.0607 2.86168 19.591 2.66077 19.0738C2.39916 18.3622 2.26094 17.611 2.25208 16.8529C2.19434 15.5869 2.18102 15.2049 2.18102 12.0022C2.18102 8.79955 2.18101 8.41754 2.25208 7.15158C2.26094 6.39339 2.39916 5.64228 2.66077 4.93059C2.86168 4.41344 3.16802 3.94376 3.56033 3.55144C3.95264 3.15913 4.42234 2.85277 4.9395 2.65186C5.65092 2.38874 6.40204 2.24904 7.16049 2.23876C8.42645 2.18101 8.80401 2.16769 12.0111 2.16769C15.2182 2.16769 15.5913 2.16769 16.8573 2.23876C17.6158 2.24834 18.3671 2.38807 19.0783 2.65186C19.5966 2.85085 20.0672 3.15653 20.4598 3.54909C20.8523 3.94165 21.158 4.41232 21.357 4.93059C21.6209 5.6418 21.7606 6.39306 21.7701 7.15158C21.8279 8.41754 21.8368 8.79955 21.8368 12.0022C21.8368 15.2049 21.8279 15.5869 21.7701 16.8529Z"
                fill="currentColor"
            />
            <path
                d="M12.0021 5.83678C10.7825 5.8359 9.58998 6.19675 8.57549 6.87368C7.56101 7.55062 6.77008 8.51323 6.30275 9.63974C5.83542 10.7663 5.71269 12.0061 5.95008 13.2023C6.18748 14.3986 6.77432 15.4976 7.6364 16.3603C8.49848 17.223 9.59707 17.8106 10.7932 18.0489C11.9893 18.2872 13.2291 18.1653 14.356 17.6988C15.4828 17.2323 16.446 16.442 17.1237 15.428C17.8014 14.414 18.1631 13.2218 18.1631 12.0022C18.1631 10.3678 17.5141 8.80029 16.3588 7.64417C15.2035 6.48805 13.6365 5.83796 12.0021 5.83678ZM12.0021 16C11.2114 16 10.4384 15.7656 9.78101 15.3263C9.12358 14.887 8.61119 14.2626 8.30861 13.5321C8.00602 12.8016 7.92683 11.9978 8.08109 11.2223C8.23534 10.4468 8.6161 9.73448 9.1752 9.17538C9.7343 8.61628 10.4466 8.23553 11.2221 8.08128C11.9976 7.92702 12.8014 8.0062 13.5319 8.30878C14.2624 8.61136 14.8868 9.12376 15.3261 9.78119C15.7654 10.4386 15.9998 11.2116 15.9998 12.0022C15.9998 13.0625 15.5786 14.0794 14.8289 14.8291C14.0792 15.5788 13.0623 16 12.0021 16Z"
                fill="currentColor"
            />
            <path
                d="M18.4075 4.15771C18.1228 4.15771 17.8446 4.24212 17.6079 4.40026C17.3712 4.5584 17.1867 4.78318 17.0778 5.04616C16.9689 5.30914 16.9404 5.59851 16.9959 5.87769C17.0514 6.15687 17.1885 6.4133 17.3898 6.61458C17.5911 6.81586 17.8475 6.95293 18.1267 7.00846C18.4059 7.06399 18.6953 7.03549 18.9582 6.92656C19.2212 6.81763 19.446 6.63317 19.6041 6.39649C19.7623 6.15982 19.8467 5.88156 19.8467 5.59692C19.8467 5.21522 19.6951 4.84915 19.4251 4.57925C19.1552 4.30934 18.7892 4.15771 18.4075 4.15771Z"
                fill="currentColor"
            />
        </>
    ),
});

export default InstagramIcon;