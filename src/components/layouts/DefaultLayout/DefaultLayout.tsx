/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, useTheme } from "@chakra-ui/react";
import { IDefaultLayout } from "@interfaces";
import Header from "../Header";
import Footer from "../Footer";
import Drawer from "../Drawer";
import { NewsletterModalForm } from "@forms";
import { FC, Fragment } from "react";

const DefaultLayout: FC<IDefaultLayout> = ({
    children,
    global,
    pageContext,
    ...rest
}) => {
    const {
        header: { navigationItems },
        footer: { newsletterInfoBox, footerLinks },
    } = global;
    const theme = useTheme();

    return (
        <Fragment>
            <Header navigationItems={navigationItems} />
            <Flex direction="column" as="main" {...rest}>
                {children}
            </Flex>
            <Footer
                newsletterInfoBox={newsletterInfoBox}
                footerLinks={footerLinks}
            />
            <Drawer
                navigationItems={navigationItems}
                newsletterInfoBox={newsletterInfoBox}
            />
            <NewsletterModalForm />
        </Fragment>
    );
};

export default DefaultLayout;
