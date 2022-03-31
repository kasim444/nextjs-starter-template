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

const FontWeightsStory = () => {
    const theme = useTheme();
    const { fontWeights } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Font Weights
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Font Weight</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(fontWeights)
                        .sort(
                            (a, b) =>
                                parseInt(fontWeights[a]) -
                                parseInt(fontWeights[b]),
                        )
                        .map((key) => {
                            const value = fontWeights[key];

                            return (
                                <TableRow key={key} name={key} value={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default FontWeightsStory;

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
