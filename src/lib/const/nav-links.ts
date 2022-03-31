import { NAV_PATHS } from ".";
import { INavItem, INavItemsOnFooter } from "@interfaces";
import { SOCIAL_LINKS } from "./social-links";
import { v4 as uuidv4 } from "uuid";
import { CONTACT_LINKS } from "./contact-links";

export const NAV_LINKS: INavItem[] = [
    {
        id: uuidv4(),
        parentButtonLabel: NAV_PATHS.visit.label,
        parentButtonHref: NAV_PATHS.visit.href,
        subNavItems: [],
    },
    {
        id: uuidv4(),
        parentButtonLabel: NAV_PATHS.faq.label,
        parentButtonHref: NAV_PATHS.faq.href,
        subNavItems: [
            {
                id: uuidv4(),
                label: NAV_PATHS.privacyPolicy.label,
                href: NAV_PATHS.privacyPolicy.href,
            },
            {
                id: uuidv4(),
                label: NAV_PATHS.termsOfUse.label,
                href: NAV_PATHS.termsOfUse.href,
            },
            {
                id: uuidv4(),
                label: NAV_PATHS.covid19Precautions.label,
                href: NAV_PATHS.covid19Precautions.href,
            },
        ],
    },
];

export const NAV_LINKS_ON_FOOTER: INavItemsOnFooter = {
    navItems: [
        {
            id: uuidv4(),
            label: NAV_PATHS.aboutUs.label,
            href: NAV_PATHS.aboutUs.href,
        },
        {
            id: uuidv4(),
            label: NAV_PATHS.pressRoom.label,
            href: NAV_PATHS.pressRoom.href,
        },
        {
            id: uuidv4(),
            label: NAV_PATHS.sponsors.label,
            href: NAV_PATHS.sponsors.href,
        },
        {
            id: uuidv4(),
            label: NAV_PATHS.faq.label,
            href: NAV_PATHS.faq.href,
        },
    ],
    legalNavItems: [
        {
            id: uuidv4(),
            label: NAV_PATHS.privacyPolicy.label,
            href: NAV_PATHS.privacyPolicy.href,
        },
        {
            id: uuidv4(),
            label: NAV_PATHS.termsOfUse.label,
            href: NAV_PATHS.termsOfUse.href,
        },
        {
            id: uuidv4(),
            label: NAV_PATHS.covid19Precautions.label,
            href: NAV_PATHS.covid19Precautions.href,
        },
    ],
    socialMediaLinks: SOCIAL_LINKS,
    contactLinks: CONTACT_LINKS,
};
