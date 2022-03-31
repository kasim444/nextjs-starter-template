import Link from ".";
import { Story, ComponentMeta } from "@storybook/react";
import { getArgs, text, boolean, select } from "@utils/sbControlHelpers";
import { ILink } from "@interfaces";
import { ComponentProps } from "react";

const argTypes = getArgs<ILink>({
    label: text("Link Name"),
    variant: select(
        [
            "unstyled",
            "parentNavLink",
            "childNavLink",
            "primaryButton",
            "secondaryButton",
            "linkWithIcon",
        ],
        "unstyled",
    ),
    size: select(
        ["primaryButton", "primaryButtonWithIcon", "default"],
        "default",
    ),
    href: text("https://google.com"),
    isExternal: boolean(false),
});

export default {
    title: "Elements/Link",
    component: Link,
    argTypes,
} as ComponentMeta<typeof Link>;

type StoryProps = Story<ComponentProps<typeof Link>>;
const LinkTemplate: StoryProps = (args) => <Link {...args} />;

export const VariantDefault = LinkTemplate.bind({});
VariantDefault.args = {
    label: "Link Name",
    variant: "unstyled",
    size: "default",
    href: "https://google.com",
    isExternal: false,
};

export const VariantParentNavLink = LinkTemplate.bind({});
VariantParentNavLink.args = {
    label: "Link Name",
    variant: "parentNavLink",
    size: "default",
    href: "https://google.com",
    isExternal: false,
};

export const VariantChildNavLink = LinkTemplate.bind({});
VariantChildNavLink.args = {
    label: "Link Name",
    variant: "childNavLink",
    size: "default",
    href: "https://google.com",
    isExternal: false,
};

export const VariantPrimaryButton = LinkTemplate.bind({});
VariantPrimaryButton.args = {
    label: "Link Name",
    variant: "primaryButton",
    size: "primaryButton",
    href: "https://google.com",
    isExternal: true,
};

export const VariantPrimaryButtonWithIcon = LinkTemplate.bind({});
VariantPrimaryButtonWithIcon.args = {
    label: "Link Name",
    variant: "primaryButton",
    size: "primaryButtonWithIcon",
    href: "https://google.com",
    isExternal: true,
};

export const VariantSecondaryButton = LinkTemplate.bind({});
VariantSecondaryButton.args = {
    label: "Link Name",
    variant: "secondaryButton",
    size: "secondaryButton",
    href: "https://google.com",
    isExternal: true,
};

export const VariantLinkWithIcon = LinkTemplate.bind({});
VariantLinkWithIcon.args = {
    label: "Link Name",
    variant: "linkWithIcon",
    size: "default",
    href: "https://google.com",
    isExternal: true,
};

export const IsExternal = LinkTemplate.bind({});
IsExternal.args = {
    label: "Link Name",
    variant: "unstyled",
    size: "default",
    href: "https://google.com",
    isExternal: true,
};
