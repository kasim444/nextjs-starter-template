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

const LetterSpacingStory = () => {
    const theme = useTheme();
    const { letterSpacings } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="8">
                Letter Spacings
            </Heading>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Letter Spacing</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(letterSpacings)
                        .sort(
                            (a, b) =>
                                parseInt(letterSpacings[a]) -
                                parseInt(letterSpacings[b]),
                        )
                        .map((key) => {
                            const value = letterSpacings[key];

                            return (
                                <TableRow key={key} name={key} value={value} />
                            );
                        })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default LetterSpacingStory;

interface ILetterSpacingsRow {
    name: string;
    value: string;
}

const TableRow = ({ name, value }: ILetterSpacingsRow) => (
    <Tr>
        <Td fontWeight={name}>{name}</Td>
        <Td>{value}</Td>
    </Tr>
);
