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
    const { breakpoints } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Breakpoints
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Breakpoint</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(breakpoints).map((key) => {
                        const value = breakpoints[key];

                        return <TableRow key={key} name={key} size={value} />;
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
