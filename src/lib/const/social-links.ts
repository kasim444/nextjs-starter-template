import { v4 as uuidv4 } from "uuid";
import { ISocialMediaLink } from "@interfaces";

export const SOCIAL_LINKS: ISocialMediaLink[] = [
    {
        id: uuidv4(),
        type: "instagram",
        url: "https://www.instagram.com/",
    },
    {
        id: uuidv4(),
        type: "facebook",
        url: "https://www.facebook.com/",
    },
    {
        id: uuidv4(),
        type: "twitter",
        url: "https://twitter.com/",
    },
];
