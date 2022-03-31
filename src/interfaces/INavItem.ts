import { ICommonLink } from "./";

export interface INavItem {
    id?: string;
    parentButtonLabel: string;
    parentButtonHref: string;
    subNavItems: ICommonLink[];
}
