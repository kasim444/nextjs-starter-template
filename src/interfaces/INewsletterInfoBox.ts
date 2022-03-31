import { BoxProps } from "@chakra-ui/react";
import { IButton } from ".";

export interface INewsletterInfoBox {
    backgroundImgUrl: string;
    /**
     * title is RichText component ( markdown )
     */
    title: string;
    description: string;
    button: {
        label: IButton["children"];
        onClick?: IButton["onClick"];
    };
    containerProps?: BoxProps;
}
