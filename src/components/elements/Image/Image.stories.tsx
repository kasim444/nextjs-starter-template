import Image from ".";
import { Story, ComponentMeta } from "@storybook/react";
import { getArgs, text, select } from "@utils/sbControlHelpers";
import { IImage } from "@interfaces";
import { ComponentProps } from "react";

const argTypes = getArgs<IImage>({
    src: text(
        "https://www.biletix.com/static/images/live/event/eventimages/yalinnn05A5D.png",
    ),
    alt: text("Alt"),
    layout: select(["fill", "fixed", "intrinsic", "responsive"], "intrinsic"),
    objectFit: select(
        [
            "contain",
            "cover",
            "fill",
            "none",
            "scale-down",
            "-moz-initial",
            "inherit",
            "initial",
            "revert",
            "unset",
        ],
        "contain",
    ),
});

export default {
    title: "Elements/Image",
    component: Image,
    argTypes,
} as ComponentMeta<typeof Image>;

type StoryProps = Story<ComponentProps<typeof Image>>;
const ImageTemplate: StoryProps = (args) => <Image {...args} />;

export const Intrinsic = ImageTemplate.bind({});
Intrinsic.args = {
    src: "https://www.biletix.com/static/images/live/event/eventimages/yalinnn05A5D.png",
    alt: "Alt",
    layout: "intrinsic",
    width: 457,
    height: 252,
};

export const Responsive = ImageTemplate.bind({});
Responsive.args = {
    src: "https://www.biletix.com/static/images/live/event/eventimages/yalinnn05A5D.png",
    alt: "Alt",
    layout: "responsive",
    width: 457,
    height: 252,
};

export const Fill = ImageTemplate.bind({});
Fill.args = {
    src: "https://www.biletix.com/static/images/live/event/eventimages/yalinnn05A5D.png",
    alt: "Alt",
    layout: "fill",
};

export const Fixed = ImageTemplate.bind({});
Fixed.args = {
    src: "https://www.biletix.com/static/images/live/event/eventimages/yalinnn05A5D.png",
    alt: "Alt",
    layout: "fixed",
    width: 457,
    height: 252,
};
