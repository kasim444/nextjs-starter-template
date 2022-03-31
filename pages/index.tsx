import { HomeTemplate } from "@templates";
import { NAV_LINKS, NEWSLETTER_INFOBOX, NAV_LINKS_ON_FOOTER } from "@lib/const";
import { DefaultLayout } from "@layouts";

const HomePage = () => {
    return (
        <DefaultLayout
            global={{
                header: { navigationItems: NAV_LINKS },
                footer: {
                    newsletterInfoBox: NEWSLETTER_INFOBOX,
                    footerLinks: NAV_LINKS_ON_FOOTER,
                },
            }}
        >
            <HomeTemplate />
        </DefaultLayout>
    );
};

export default HomePage;
