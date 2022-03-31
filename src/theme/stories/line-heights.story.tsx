import {
    Heading,
    Text,
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useTheme,
} from "@chakra-ui/react";

const LineHeightsStory = () => {
    const theme = useTheme();
    const { lineHeights } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="4">
                Line Heights
            </Heading>

            <Text fontSize="sm" mb="8">
                <b>Note:</b> 1rem = 16px
            </Text>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Line Heights</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(lineHeights)
                        .sort(
                            (a, b) =>
                                parseInt(lineHeights[a]) -
                                parseInt(lineHeights[b]),
                        )
                        .map((key) => {
                            const value = lineHeights[key];

                            return (
                                <TableRow key={key} name={key} value={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default LineHeightsStory;

interface IFontSizesRow {
    name: string;
    value: string;
}

const TableRow = ({ name, value }: IFontSizesRow) => (
    <Tr>
        <Td fontWeight={name}>{name}</Td>
        <Td>{value}</Td>
    </Tr>
);
