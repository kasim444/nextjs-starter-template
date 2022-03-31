import {
    Flex,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@chakra-ui/react";

const TypographyStory = () => {
    return (
        <Flex flexDirection="column" p="4">
            <Heading>Typography</Heading>

            <Table size="sm" variant="striped" mt="10">
                <Thead>
                    <Tr>
                        <Th>size</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>h1</Td>
                        <Td>
                            <Heading size="h1">Heading 1, Bold 48</Heading>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>h2</Td>
                        <Td>
                            <Heading size="h2">Heading 2, Bold 32</Heading>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>h3</Td>
                        <Td>
                            <Heading size="h3">Heading 3, Semibold 32</Heading>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>h4</Td>
                        <Td>
                            <Heading size="h4">Heading 4, Semibold 24</Heading>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>h5</Td>
                        <Td>
                            <Heading size="h5">Heading 5, Medium 24</Heading>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>h6</Td>
                        <Td>
                            <Heading size="h6">Heading 6, Bold 24</Heading>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    );
};

export default TypographyStory;
