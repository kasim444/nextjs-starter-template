import {
    Badge,
    Box,
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Heading,
    Text,
    useTheme,
} from "@chakra-ui/react";

const SpacesStory = () => {
    const theme = useTheme();
    const { space } = theme;
    const REM = 16;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Spacing
            </Heading>
            <Text fontSize="sm" mb="4">
                The <Badge>space</Badge> key allows you to customize the global
                spacing and sizing scale for your project. By default these
                spacing value can be referenced by the <Badge>padding</Badge>,{" "}
                <Badge>margin</Badge>, and <Badge>top</Badge>,
                <Badge>left</Badge>, <Badge>right</Badge>, <Badge>bottom</Badge>{" "}
                styles.
            </Text>

            <Text fontSize="sm" mb="8">
                <b>Mental model:</b> If you need a spacing of 40px, divide it by
                4. That'll give you 10. Then use it in your component.
            </Text>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Space</Th>
                        <Th>Pixel</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(space)
                        .sort((a, b) => {
                            const spaceA = space[a];
                            const spaceB = space[b];
                            let pixelValueA = parseFloat(spaceA) * REM;
                            let pixelValueB = parseFloat(spaceB) * REM;

                            if (spaceA === "1px") {
                                pixelValueA = 1;
                            }

                            if (spaceB === "1px") {
                                pixelValueB = 1;
                            }

                            return pixelValueA - pixelValueB;
                        })
                        .map((key) => {
                            const value = space[key];
                            let pixelValue = parseFloat(value) * REM;

                            if (value === "1px") {
                                pixelValue = 1;
                            }

                            return (
                                <TableRow
                                    key={value}
                                    name={key}
                                    space={value}
                                    pixel={pixelValue}
                                    jsxEl={
                                        <Box bg="pink.200" h="4" w={value} />
                                    }
                                />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default SpacesStory;

interface ISpaceRow {
    name: string;
    space: string;
    pixel: number;
    jsxEl: JSX.Element;
}

const TableRow = ({ name, space, pixel, jsxEl }: ISpaceRow) => (
    <Tr>
        <Td>{name}</Td>
        <Td>{space}</Td>
        <Td>{pixel}px</Td>
        <Td>{jsxEl}</Td>
    </Tr>
);
