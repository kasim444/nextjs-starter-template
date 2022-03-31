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

const BreakpointsStory = () => {
    const theme = useTheme();
    const { radii } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Border Radius
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Border Radius</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(radii)
                        .sort((a, b) => parseInt(radii[a]) - parseInt(radii[b]))
                        .map((key) => {
                            const value = radii[key];

                            return (
                                <TableRow key={key} name={key} size={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default BreakpointsStory;

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
