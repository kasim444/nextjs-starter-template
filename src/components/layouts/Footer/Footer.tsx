import {
    Box,
    Flex,
    Grid,
    Container,
    Stack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { NewsletterInfoBox } from "@common";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { NavItems } from "@common";
import { Image } from "@elements";
import { IFooter } from "@interfaces";
import { BrandLogo } from "@icons";

const Footer = observer(
    ({
        newsletterInfoBox,
        footerLinks: {
            navItems,
            legalNavItems,
            socialMediaLinks,
            contactLinks,
        },
        containerProps,
    }: IFooter) => {
        const {
            ui: { onClickNewsletterInfo },
        } = useStore();

        const isDesktop = useBreakpointValue({ base: false, lg: true });

        return (
            <Flex
                as="footer"
                flexDirection="column"
                background="black.default"
                {...containerProps}
            >
                <Grid
                    width="full"
                    templateColumns={{
                        base: "1fr",
                        lg: "minmax(836px, 1fr) auto",
                    }}
                >
                    <NewsletterInfoBox
                        backgroundImgUrl={
                            newsletterInfoBox?.backgroundImgUrl ??
                            "https://loremflickr.com/1440/900"
                        }
                        title={
                            newsletterInfoBox?.title ??
                            "MADDE22'ye üye ol, Sürprizlere hazır ol!"
                        }
                        description={
                            newsletterInfoBox?.description ??
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium commodo tortor at varius."
                        }
                        button={{
                            label:
                                newsletterInfoBox?.button?.label ??
                                "Haberdar Olun",
                            onClick: onClickNewsletterInfo,
                        }}
                    />
                    <NavItems.Footer
                        navItems={navItems}
                        legalNavItems={legalNavItems}
                        socialMediaLinks={socialMediaLinks}
                        contactLinks={contactLinks}
                    />
                </Grid>
                <Box
                    background="white.default"
                    position="relative"
                    minHeight={{ base: "124px", lg: "165px" }}
                    height="full"
                >
                    <Container
                        as={Stack}
                        maxWidth="full"
                        flexDirection={{ base: "column", lg: "row" }}
                        alignItems="center"
                        justifyContent={{ base: "center", lg: "space-between" }}
                        spacing="7"
                        position="absolute"
                        top="0"
                        right="0"
                        bottom="0"
                        left="0"
                        zIndex="2"
                    >
                        {isDesktop && (
                            <Image
                                src="/assets/images/footer/discount-cooperation.png"
                                alt="İş Bankası İndirim | Madde22"
                                width={90}
                                height={128}
                                layout="intrinsic"
                            />
                        )}

                        <BrandLogo />
                    </Container>
                </Box>
            </Flex>
        );
    },
);

export default Footer;
