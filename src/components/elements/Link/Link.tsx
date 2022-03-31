import { Link as ChakraLink, forwardRef } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ILink } from "@interfaces";

const Link: React.FC<ILink> = forwardRef<ILink, "link">((props: ILink, ref) => {
    const {
        children,
        label,
        href,
        as: Component = ChakraLink,
        nextLinkProps,
        ...rest
    } = props;

    return (
        <NextLink href={href} passHref {...nextLinkProps}>
            <Component {...rest} as="a" ref={ref}>
                {label || children}
            </Component>
        </NextLink>
    );
});

export default Link;
