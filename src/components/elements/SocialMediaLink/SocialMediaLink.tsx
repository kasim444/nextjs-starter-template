import { ISocialMediaLink } from "@interfaces";
import { TwitterIcon, InstagramIcon, FacebookIcon } from "@icons";
import { Link } from "@elements";

const icon = {
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    facebook: FacebookIcon,
};

const SocialMediaLink = ({ type, url }: ISocialMediaLink) => {
    const DynamicIcon = icon[type];

    return (
        <Link
            href={url}
            isExternal
            transition="transform 0.3s ease"
            _hover={{
                transform: "scale(1.05)",
            }}
            _active={{
                transform: "scale(0.95)",
            }}
        >
            <DynamicIcon />
        </Link>
    );
};

export default SocialMediaLink;
