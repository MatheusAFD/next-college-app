import { Td } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function TdTable(props: { children: ReactNode }) {
  return (
    <Td
      padding="24px"
      fontWeight={500}
      lineHeight="21px"
      fontSize={14}
      letterSpacing="-0.01em"
    >
      {props.children}
    </Td>
  );
}
