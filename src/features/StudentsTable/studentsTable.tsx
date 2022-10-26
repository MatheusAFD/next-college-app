import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import ThTable from "../../atomic/atom/ThTableStudent/thTable";
import { useGetStudentsQuery } from "../../graphql/generated";
import CardStudent from "../CardStudent/cardStudent";
import PaginationTableData from "../PaginationTable/paginationTableData";

export default function StudentsTable() {
  const [page, setPage] = useState(0);

  const PAGE_SIZE = 8;

  const { data } = useGetStudentsQuery({
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });
  const hasPreviusPage = data?.students.pageInfo.hasPreviousPage;
  const hasNextPage = data?.students.pageInfo.hasNextPage;

  function setNextPage() {
    if (hasNextPage) {
      setPage(page + 1);
    }
  }

  function setPreviusPage() {
    if (hasPreviusPage) {
      setPage(page - 1);
    }
  }

  return (
    <TableContainer mt="40px" position="relative">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <ThTable text="Student Name" />
            <ThTable text="Student Key" />
            <ThTable text="Student Id" />
            <ThTable text="Created At" />
          </Tr>
        </Thead>
        <Tbody>
          {data?.students.nodes.map((student) => {
            return (
              <CardStudent
                key={student.id}
                name={student.name}
                id={student.id}
                keyStudent={student.key}
                createdAt={student.createdAt}
              />
            );
          })}
        </Tbody>
      </Table>
      <PaginationTableData
        hasNextPage={hasNextPage}
        page={page}
        setNextPage={setNextPage}
        hasPreviousPage={hasPreviusPage}
        setPreviousPage={setPreviusPage}
      />
    </TableContainer>
  );
}
