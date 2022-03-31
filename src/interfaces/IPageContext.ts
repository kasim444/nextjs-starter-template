type ILocale = "tr-TR" | "en" | string;

export interface ILocalizations {
    id: number;
    locale: ILocale;
}

export interface ILocalizedPaths {
    locale: ILocale;
    href: string;
}

export interface IPageContext {
    locale: ILocale;
    locales: ILocale[];
    defaultLocale: ILocale;
    slug: string;
    localizations: ILocalizations[];
    localizedPaths: ILocalizedPaths[];
    hasNewsletter: boolean;
}
