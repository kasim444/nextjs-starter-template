import { INewsletterInfoBox } from "@interfaces";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "@elements";
import { FC } from "react";

const NewsletterInfoBox: FC<INewsletterInfoBox> = ({
    backgroundImgUrl,
    title,
    description,
    button: { label, onClick },
    containerProps,
    children,
}) => (
    <Box
        position="relative"
        backgroundImage={`url(${backgroundImgUrl}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`}
        backgroundBlendMode={"overlay"}
        backgroundSize="cover"
        backgroundPosition="center"
        px={{ base: "4", lg: "4" }}
        pt={{ base: "52px", lg: "52px" }}
        pb={{ base: "60px", lg: "60px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...containerProps}
    >
        <Flex
            flexDirection="column"
            maxWidth="416px"
            mx="auto"
            alignSelf="center"
        >
            <Heading color="white.default" as={Heading} size="h2">
                {title}
            </Heading>
            <Text textStyle="body14Normal" color="white.default" mt="2.5">
                {description}
            </Text>
            <Button
                width="full"
                color="white.default"
                mt="18px"
                children={label}
                onClick={onClick}
            />
        </Flex>
        {children}
    </Box>
);

export default NewsletterInfoBox;
