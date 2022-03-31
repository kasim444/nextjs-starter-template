import { Center } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import Brand from "./Brand";

export default {
    title: "Elements/Brand",
    component: Brand,
    decorators: [
        (Story) => (
            <Center minHeight="100vh">
                <Story />
            </Center>
        ),
    ],
} as ComponentMeta<typeof Brand>;

export const Default = <Brand />;
