import {
    Drawer as ChakraDrawer,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    HStack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { IDrawer } from "@interfaces";
import { useStore } from "@store";
import { observer } from "mobx-react-lite";
import { NewsletterInfoBox, NavItems } from "@common";
import { SocialMediaLink } from "@elements";
import { SOCIAL_LINKS } from "@lib/const";

const Drawer = observer(({ navigationItems, newsletterInfoBox }: IDrawer) => {
    const {
        ui: { isOpenDrawer, onCloseDrawer, onClickNewsletterInfo },
    } = useStore();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
        <ChakraDrawer
            isFullHeight={true}
            isOpen={isDesktop ? false : isOpenDrawer}
            onClose={onCloseDrawer}
        >
            <DrawerOverlay />
            <DrawerContent background={"white.default"}>
                <DrawerHeader />
                <DrawerBody as="main">
                    <NavItems.Mobile navigationItems={navigationItems} />
                </DrawerBody>

                <DrawerFooter
                    mt="79"
                    flexDirection="column"
                    position="relative"
                    alignItems={"stretch"}
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
                    <HStack
                        pt="8"
                        pb="34"
                        spacing="30px"
                        justifyContent={"center"}
                    >
                        {SOCIAL_LINKS.map(({ id, ...rest }) => (
                            <SocialMediaLink key={id} {...rest} />
                        ))}
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </ChakraDrawer>
    );
});

export default Drawer;
