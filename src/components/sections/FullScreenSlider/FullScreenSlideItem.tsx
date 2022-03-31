import { LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { IFullScreenSlideItem } from "@interfaces";
import { NAV_PATHS } from "@lib/const";
import { Link } from "@elements";

const FullScreenSlideItem = ({
    image,
    link,
    title,
    shortDescription,
    slug,
}: IFullScreenSlideItem) => {
    return (
        <LinkBox
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            background={`url(${image?.src}) rgba(0, 0, 0, 0.3)`}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundBlendMode={"multiply"}
            minHeight={{ base: "296px", lg: "440px" }}
            height={"full"}
            pb="10"
        >
            {title && shortDescription && (
                <LinkOverlay
                    as={Link}
                    href={`${NAV_PATHS.faq.href}/${slug}`}
                    color="white.default"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    maxWidth={{ base: "210px", lg: "390px" }}
                    mx="auto"
                >
                    <Text
                        as="h3"
                        fontSize={{ base: "md", lg: "8xl" }}
                        fontWeight={{ base: "bold", lg: "bold" }}
                        lineHeight={{ base: "26", lg: "60" }}
                        textAlign={"center"}
                        noOfLines={2}
                    >
                        {title}
                    </Text>
                    <Text
                        mt="2.5"
                        textStyle={"body16Normal"}
                        textAlign={"center"}
                        noOfLines={2}
                    >
                        {shortDescription}
                    </Text>
                </LinkOverlay>
            )}
            <Link
                href={link.href}
                variant={"primaryButton"}
                size="primaryButton"
                isExternal={link.isExternal}
                mt={{ base: "27px", lg: "30px" }}
            >
                {link.label}
            </Link>
        </LinkBox>
    );
};

export default FullScreenSlideItem;
