import { FlexProps } from "@chakra-ui/react";
import { IPageContext, IHeader, IFooter } from "./";

export interface IDefaultLayout extends FlexProps {
    children: JSX.Element | JSX.Element[] | string;
    global: {
        header: IHeader;
        footer: IFooter;
    };
    pageContext?: IPageContext;
}
