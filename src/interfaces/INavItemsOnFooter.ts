import { ICommonLink, ISocialMediaLink, IContactLink } from "./";

export interface INavItemsOnFooter {
    navItems: ICommonLink[];
    legalNavItems: ICommonLink[];
    socialMediaLinks: ISocialMediaLink[];
    contactLinks: IContactLink[];
}
