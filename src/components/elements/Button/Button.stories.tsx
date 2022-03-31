import { ComponentMeta, Story } from "@storybook/react";
import Button from ".";
import {
    getArgs,
    text,
    boolean,
    select,
    action,
} from "@utils/sbControlHelpers";
import { IButton } from "@interfaces";
import { LinkIcon } from "@icons";
import { ComponentProps } from "react";
import { action as sbAction } from "@storybook/addon-actions";

const argTypes = getArgs<IButton>({
    children: text("Button Name"),
    variant: select(
        ["unstyled", "outline", "solid", "defaultWithIcon"],
        "solid",
    ),
    size: select(["primary", "withIcon"], "primary"),
    isDisabled: boolean(false),
    isLoading: boolean(false),
    onClick: action("click"),
});

export default {
    title: "Elements/Button",
    component: Button,
    argTypes: {
        ...argTypes,
        leftIcon: LinkIcon,
        rightIcon: LinkIcon,
    },
} as ComponentMeta<typeof Button>;

type StoryProps = Story<ComponentProps<typeof Button>>;
const ButtonTemplate: StoryProps = (args) => <Button {...args} />;

export const VariantDefault = ButtonTemplate.bind({});
VariantDefault.args = {
    children: "Button Name",
    variant: "solid",
    size: "primary",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
};

export const VariantOutline = ButtonTemplate.bind({});
VariantOutline.args = {
    children: "Button Name",
    variant: "outline",
    size: "primary",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
};

export const VariantUnstyled = ButtonTemplate.bind({});
VariantUnstyled.args = {
    children: "Button Name",
    variant: "unstyled",
    size: "primary",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
};

export const IsDisabled = ButtonTemplate.bind({});
IsDisabled.args = {
    children: "Button Name",
    variant: "solid",
    size: "primary",
    isDisabled: true,
    isLoading: false,
    onClick: sbAction("click"),
};

export const IsLoading = ButtonTemplate.bind({});
IsLoading.args = {
    children: "Button Name",
    variant: "solid",
    size: "primary",
    isDisabled: false,
    isLoading: true,
    onClick: sbAction("click"),
};

export const WithLeftIcon = ButtonTemplate.bind({});
WithLeftIcon.args = {
    children: "Button Name",
    variant: "solid",
    size: "withIcon",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
    leftIcon: <LinkIcon />,
};

export const WithRightIcon = ButtonTemplate.bind({});
WithRightIcon.args = {
    children: "Button Name",
    variant: "solid",
    size: "withIcon",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
    rightIcon: <LinkIcon />,
};

export const LinkWithIcon = ButtonTemplate.bind({});
LinkWithIcon.args = {
    children: "Button Name",
    variant: "linkWithIcon",
    size: "primary",
    isDisabled: false,
    isLoading: false,
    onClick: sbAction("click"),
    leftIcon: <LinkIcon />,
};
