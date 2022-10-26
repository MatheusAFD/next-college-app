import { Box } from "@chakra-ui/react";
import StudentsHomeHeader from "../StudentsHomeHeader/studentsHomeHeader";
import StudentsTable from "../StudentsTable/studentsTable";

export default function StudentsHome() {
  return (
    <Box
      as="main"
      ml={71}
      mt={10}
      h={812}
      bg="white"
      mr={10}
      borderRadius={30}
      shadow="sm"
      px="38px"
      py="40px"
    >
      <StudentsHomeHeader />
      <StudentsTable />
    </Box>
  );
}
