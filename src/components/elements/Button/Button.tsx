import { Button as ChakraButton, forwardRef } from "@chakra-ui/react";
import { FC } from "react";
import { IButton } from "@interfaces";

const Button: FC<IButton> = forwardRef<IButton, "button">(
    (props: IButton, ref) => {
        return <ChakraButton ref={ref} iconSpacing="4" {...props} />;
    },
);

export default Button;
