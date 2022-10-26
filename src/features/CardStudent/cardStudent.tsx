import { Td, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";
import TdTable from "../../atomic/atom/TdTableStudent";
import { formatDate } from "../../common/utils/format-date";

interface CardStudentProps {
  name: string;
  id: string;
  keyStudent: string;
  createdAt: Date;
}

export default function CardStudent({
  name,
  id,
  keyStudent,
  createdAt,
}: CardStudentProps) {
  return (
    <Tr>
      <TdTable>{name}</TdTable>
      <TdTable>{keyStudent}</TdTable>
      <TdTable>{id}</TdTable>
      <TdTable>{formatDate(createdAt, "dd'/'MM'/'yyyy kk':'mm'h'")}</TdTable>
    </Tr>
  );
}
