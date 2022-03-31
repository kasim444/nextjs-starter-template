import HamburgerMenu from "./HamburgerMenu";
import { ComponentMeta } from "@storybook/react";
import { Center, useDisclosure } from "@chakra-ui/react";

export default {
    title: "Elements/HamburgerMenu",
    component: HamburgerMenu,
    decorators: [
        (Story) => (
            <Center minHeight="100vh" background="white.default">
                <Story />
            </Center>
        ),
    ],
} as ComponentMeta<typeof HamburgerMenu>;

export const Default = () => {
    const { isOpen, onToggle } = useDisclosure();

    return <HamburgerMenu isOpen={isOpen} onToggle={onToggle} />;
};
