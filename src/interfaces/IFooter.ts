import { FlexProps } from "@chakra-ui/react";
import { INewsletterInfoBox, INavItemsOnFooter } from "./";

export interface IFooter {
    newsletterInfoBox: INewsletterInfoBox;
    footerLinks: INavItemsOnFooter;
    containerProps?: FlexProps;
}
