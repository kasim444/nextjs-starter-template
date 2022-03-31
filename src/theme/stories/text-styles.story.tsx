import {
    Flex,
    Text,
    UnorderedList,
    ListItem,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@chakra-ui/react";

const TextStylesStory = () => {
    return (
        <Flex flexDirection="column" p="4">
            <Text as="h2" textStyle="h2">
                Text Styles #
            </Text>
            <Text mb="4">
                You can put these styles in the theme under the textStyles key
                to make easy to re-use in the future.
            </Text>
            <Text mb="4">Properties defined in a text style</Text>

            <UnorderedList>
                <ListItem>Font family, weight, and size</ListItem>
                <ListItem>Line height</ListItem>
                <ListItem>Letter spacing</ListItem>
                <ListItem>
                    Text decoration (strikethrough and underline)
                </ListItem>
                <ListItem>
                    Text transform (uppercase, lowercase, and capitalization)
                </ListItem>
            </UnorderedList>
            <Table size="sm" variant="striped" mt="10">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>body12Normal</Td>
                        <Td>
                            <Text textStyle="body12Normal">
                                Body 10, Regular 12
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body14Normal</Td>
                        <Td>
                            <Text textStyle="body14Normal">
                                Body 5, Regular 14
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body14Bold</Td>
                        <Td>
                            <Text textStyle="body14Bold">Body 8, Bold 14</Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16Normal</Td>
                        <Td>
                            <Text textStyle="body16Normal">
                                Body 6, Regular 16
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16NormalUnderline</Td>
                        <Td>
                            <Text textStyle="body16NormalUnderline">
                                Body 6, Regular 16, Underline
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16Medium</Td>
                        <Td>
                            <Text textStyle="body16Medium">
                                Body 2, Medium 16
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16Semibold</Td>
                        <Td>
                            <Text textStyle="body16Semibold">
                                Body 4, Semibold 16
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16SemiboldUnderline</Td>
                        <Td>
                            <Text textStyle="body16SemiboldUnderline">
                                Body 4, Semibold 16, Underline
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16Bold</Td>
                        <Td>
                            <Text textStyle="body16Bold">Body 3, Bold 16</Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body16BoldUnderline</Td>
                        <Td>
                            <Text textStyle="body16BoldUnderline">
                                Body 3, Bold 16, Underline
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body18Normal</Td>
                        <Td>
                            <Text textStyle="body18Normal">
                                Body 7, Regular 18
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body18Semibold</Td>
                        <Td>
                            <Text textStyle="body18Semibold">
                                Body 9, Semibold 18
                            </Text>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>body18Bold</Td>
                        <Td>
                            <Text textStyle="body18Bold">Body 1, Bold 18</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    );
};

export default TextStylesStory;
