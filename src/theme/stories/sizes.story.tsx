import {
    Badge,
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Heading,
    Text,
    useTheme,
} from "@chakra-ui/react";

const SizesStory = () => {
    const theme = useTheme();
    const { sizes } = theme;

    return (
        <Flex flexDirection="column" p="4">
            <Heading fontSize="6xl" mb="4">
                Sizes
            </Heading>
            <Text fontSize="sm" mb="4">
                The <Badge>sizes</Badge> key allows you to customize the global
                sizing of components you build for your project. By default
                these sizes value can be referenced by the <Badge>width</Badge>,{" "}
                <Badge>height</Badge>, and <Badge>maxWidth</Badge>,{" "}
                <Badge>minWidth</Badge>, <Badge>maxHeight</Badge>,{" "}
                <Badge>minHeight</Badge> styles.
            </Text>

            <Text fontSize="sm" mb="8">
                <b>Note:</b> 1rem = 16px
            </Text>

            <Table size="sm" variant="striped">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Size</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(sizes).map((key) => {
                        const isKeyString = typeof sizes[key] === "string";
                        const value = sizes[key];

                        if (isKeyString) {
                            return (
                                <TableRow key={key} name={key} size={value} />
                            );
                        }

                        const innerNodes = Object.keys(sizes[key]).map(
                            (innerKey) => {
                                const innerValue = sizes[key][innerKey];

                                return (
                                    <TableRow
                                        key={innerKey}
                                        name={key + "-" + innerKey}
                                        size={innerValue}
                                    />
                                );
                            },
                        );

                        return innerNodes;
                    })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default SizesStory;

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
