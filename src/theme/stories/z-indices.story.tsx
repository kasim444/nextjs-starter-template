import {
    Flex,
    Heading,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useTheme,
} from "@chakra-ui/react";

const ZIndicesStory = () => {
    const theme = useTheme();
    const { zIndices } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Z-Indices
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>z-index</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(zIndices)
                        .sort(
                            (a, b) =>
                                parseInt(zIndices[a]) - parseInt(zIndices[b]),
                        )
                        .map((key) => {
                            const value = zIndices[key];

                            return (
                                <TableRow key={key} name={key} size={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default ZIndicesStory;

interface ISpaceRow {
    name: string;
    size: string;
}

const TableRow = ({ name, size }: ISpaceRow) => (
    <Tr>
        <Td>{name}</Td>
        <Td>{size}</Td>
    </Tr>
);
