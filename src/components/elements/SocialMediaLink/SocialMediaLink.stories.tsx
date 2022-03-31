import { ComponentProps } from "react";
import SocialMediaLink from "./SocialMediaLink";
import { ISocialMediaLink } from "@interfaces";
import { Story, ComponentMeta } from "@storybook/react";
import { getArgs, text, select } from "@utils/sbControlHelpers";
import { Center } from "@chakra-ui/react";

const argTypes = getArgs<ISocialMediaLink>({
    type: select(["instagram", "facebook", "twitter"], "instagram"),
    url: text("string"),
});

export default {
    title: "Elements/SocialMediaLink",
    component: SocialMediaLink,
    argTypes,
    decorators: [
        (Story) => (
            <Center minHeight="100vh">
                <Story />
            </Center>
        ),
    ],
} as ComponentMeta<typeof SocialMediaLink>;

type StoryProps = Story<ComponentProps<typeof SocialMediaLink>>;
const SocialMediaLinkTemplate: StoryProps = (args) => (
    <SocialMediaLink {...args} />
);

export const Instagram = SocialMediaLinkTemplate.bind({});
Instagram.args = {
    type: "instagram",
    url: "https://www.instagram.com/",
};

export const Facebook = SocialMediaLinkTemplate.bind({});
Facebook.args = {
    type: "facebook",
    url: "https://www.facebook.com/",
};

export const Twitter = SocialMediaLinkTemplate.bind({});
Twitter.args = {
    type: "twitter",
    url: "https://twitter.com/",
};
