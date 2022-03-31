import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardNews = () => {
    return (
        <Box
            p="20px 20px 30px"
            borderRadius="42px"
            bgColor="blueAlpha.primary005"
        >
            <Skeleton height="200px" borderRadius="28px" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
    );
};

export default CardNews;
