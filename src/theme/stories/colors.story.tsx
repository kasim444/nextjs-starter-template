/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Grid,
    Flex,
    FlexProps,
    GridProps,
    useTheme,
    Heading,
} from "@chakra-ui/react";
import React from "react";

const ColorWrapper: React.FC<GridProps> = (props) => (
    <Grid
        mt={7}
        gap={6}
        templateColumns="repeat( auto-fit, minmax(200px, 1fr) )"
        {...props}
    />
);

const ColorsStory = () => {
    return (
        <Box p="4">
            <Heading fontSize="6xl" mb="8">
                Colors
            </Heading>
            <Box>
                <Grid rowGap="10">
                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Brand</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="brand" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Black</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="black" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Black Alpha</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="blackAlpha" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">White</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="white" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">White Alpha</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="whiteAlpha" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Gray</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="gray" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Blue</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="blue" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Blue Alpha</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="blueAlpha" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Red</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="red" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Orange</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="orange" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Yellow</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="yellow" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Green</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="green" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Teal</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="teal" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Cyan</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="cyan" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Purple</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="purple" />
                        </ColorWrapper>
                    </Flex>

                    <Flex flexDirection="column">
                        <Heading fontSize="2xl">Pink</Heading>
                        <ColorWrapper>
                            <ColorPalettes color="pink" />
                        </ColorWrapper>
                    </Flex>
                </Grid>
            </Box>
        </Box>
    );
};

type ColorPaletteProps = FlexProps & { color?: string | any; name?: string };

const ColorPalette = (props: ColorPaletteProps) => {
    const { color, name, ...rest } = props;

    const theme = useTheme();
    let colorCode = color;

    const [shade, hue] = color.split(".");

    if (shade && hue) {
        colorCode = theme.colors[shade][hue];
    }

    if (color in theme.colors && typeof theme.colors[color] === "string") {
        colorCode = theme.colors[color];
    }

    return (
        <Flex align="center" {...rest}>
            <Box
                borderRadius="md"
                boxSize="3rem"
                boxShadow="inner"
                mr={3}
                bg={color}
            />
            <Box fontSize="sm">
                <Box fontWeight="semibold" textTransform="capitalize">
                    {name}
                </Box>
                <Box textTransform="uppercase">{colorCode}</Box>
            </Box>
        </Flex>
    );
};

interface IColorPalettes {
    color: string;
}

const ColorPalettes = (props: IColorPalettes) => {
    const { color } = props;
    const theme = useTheme();
    const keys = Object.keys(theme.colors[color]);

    return (
        <>
            {keys.map((item) => (
                <ColorPalette
                    key={`${color}.${item}`}
                    color={`${color}.${item}`}
                    name={`${color} ${item}`}
                />
            ))}
        </>
    );
};

export default ColorsStory;
