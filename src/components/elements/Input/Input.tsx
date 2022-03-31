import { Input as ChakraInput, forwardRef } from "@chakra-ui/react";
import { IInput } from "@interfaces";

const Input: React.FC<IInput> = forwardRef<IInput, "input">(
    (props: IInput, ref) => {
        return <ChakraInput ref={ref} {...props} />;
    },
);

export default Input;
