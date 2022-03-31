import { ComponentProps } from "react";
import Input from "./Input";
import { IInput } from "@interfaces";
import { Story, ComponentMeta } from "@storybook/react";
import { getArgs } from "@utils/sbControlHelpers";

const argTypes = getArgs<IInput>({});

export default {
    title: "Elements/Input",
    component: Input,
    argTypes,
} as ComponentMeta<typeof Input>;

type StoryProps = Story<ComponentProps<typeof Input>>;
const InputTemplate: StoryProps = (args) => <Input {...args} />;

export const Default = InputTemplate.bind({});
Default.args = {
    variant: "default",
    size: "default",
};

export const WithIcon = InputTemplate.bind({});
WithIcon.args = {
    variant: "default",
    size: "withIcon",
};
