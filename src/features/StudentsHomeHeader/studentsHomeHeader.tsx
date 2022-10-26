import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";

export default function StudentsHomeHeader() {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontSize={22} fontWeight={600} lineHeight="33px">
          All Students
        </Text>
        <Text
          fontSize={14}
          lineHeight="21px"
          letterSpacing="-0.01em"
          color="green.600"
          mt="7px"
        >
          Active Members
        </Text>
      </Box>
      <Flex gap="16px">
        <Input placeholder="Search" maxW={216} />
        <Select placeholder="Sort by: Newest">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
    </Box>
  );
}
