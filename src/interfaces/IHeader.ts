import { BoxProps } from "@chakra-ui/react";
import { INavItems } from ".";

export interface IHeader {
    containerProps?: BoxProps;
    navigationItems: INavItems["navigationItems"];
}
