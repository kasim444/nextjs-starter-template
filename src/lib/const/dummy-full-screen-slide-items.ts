import { IFullScreenSlideItem } from "@interfaces";
import { v4 as uuidv4 } from "uuid";

export const DUMMY_FULL_SCREEN_SLIDE_ITEMS: IFullScreenSlideItem[] = [
    {
        id: uuidv4(),
        image: {
            src: "https://loremflickr.com/1130/628",
        },
        link: {
            href: "https://www.google.com/",
            label: "Bilet Al",
            isExternal: true,
        },
        title: "Lorem Ipsum 1",
        shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        slug: "lorem-ipsum-1",
    },
    {
        id: uuidv4(),
        image: {
            src: "https://loremflickr.com/1130/628",
        },
        link: {
            href: "https://www.google.com/",
            label: "Bilet Al",
            isExternal: true,
        },
        title: "Lorem Ipsum 2",
        shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        slug: "lorem-ipsum-2",
    },
    {
        id: uuidv4(),
        image: {
            src: "https://loremflickr.com/1130/628",
        },
        link: {
            href: "https://www.google.com/",
            label: "Bilet Al",
            isExternal: true,
        },
        slug: "lorem-ipsum-3",
    },
];
