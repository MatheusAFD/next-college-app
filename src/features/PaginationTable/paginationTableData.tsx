import { Button, Flex, Text } from "@chakra-ui/react";

interface PaginationTableDataProps {
  hasPreviousPage: boolean | null | undefined;
  hasNextPage: boolean | null | undefined;
  page: number;
  setNextPage: () => void;
  setPreviousPage: () => void;
}

export default function PaginationTableData({
  hasPreviousPage,
  hasNextPage,
  page,
  setNextPage,
  setPreviousPage,
}: PaginationTableDataProps) {
  return (
    <Flex
      gap={10}
      position="absolute"
      bottom="0px"
      right="0px"
      alignItems="center"
    >
      <Button
        bg={hasPreviousPage ? "purple.800" : "gray.300"}
        color="white"
        onClick={setPreviousPage}
      >
        Prev
      </Button>
      <Text>{page + 1}</Text>
      <Button
        bg={hasNextPage ? "purple.800" : "gray.300"}
        color="white"
        onClick={setNextPage}
      >
        Next
      </Button>
    </Flex>
  );
}
