import { IImage, ILink } from "@interfaces";

export interface IFullScreenSlideItem {
    id?: string;
    image: IImage;
    link: ILink;
    title?: string;
    shortDescription?: string;
    slug: string;
}

export interface IFullScreenSlider {
    slideItems: IFullScreenSlideItem[];
}
