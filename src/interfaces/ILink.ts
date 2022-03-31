import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/link";
import React from "react";
import { ICommonLink } from "./";

export interface ILink extends ChakraLinkProps {
    href: ICommonLink["href"];
    label?: ICommonLink["label"];
    as?: React.ElementType;
    nextLinkProps?: NextLinkProps;
}
