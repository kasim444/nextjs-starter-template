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

const LayerStylesStory = () => {
    return (
        <Flex flexDirection="column" p="4">
            <Text as="h2" textStyle="h2">
                Layer Styles #
            </Text>
            <Text mb="4">
                Layer Styles allow you to save a combination of styling
                attributes to re-use in other components. Once created, pass the{" "}
                <code>layerStyle</code> prop to any component and chakra will
                resolve the styles accordingly.
            </Text>
            <Text mb="4">Properties defined in a layer style</Text>

            <UnorderedList>
                <ListItem>Color or text color</ListItem>
                <ListItem>Background color</ListItem>
                <ListItem>Border width and border color</ListItem>
                <ListItem>Box shadow</ListItem>
                <ListItem>Opacity</ListItem>
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
                        <Td>hamburgerMenu</Td>
                        <Td>
                            <Text textStyle="body12Normal">
                                <code>{`position: "absolute",
                                    width: "6",
                                    height: "0.5",
                                    transition: "0.4s",
                                `}</code>
                            </Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    );
};

export default LayerStylesStory;
