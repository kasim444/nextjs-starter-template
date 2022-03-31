import {
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Heading,
    useTheme,
} from "@chakra-ui/react";

const FontSizesStory = () => {
    const theme = useTheme();
    const { fontSizes } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Font Sizes
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Font Size</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(fontSizes)
                        .sort(
                            (a, b) =>
                                parseInt(fontSizes[a]) - parseInt(fontSizes[b]),
                        )
                        .map((key) => {
                            const value = fontSizes[key];

                            return (
                                <TableRow key={key} name={key} value={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default FontSizesStory;

interface IFontSizesRow {
    name: string;
    value: string;
}

const TableRow = ({ name, value }: IFontSizesRow) => (
    <Tr>
        <Td>{name}</Td>
        <Td fontSize={name}>{value}</Td>
    </Tr>
);
