import { Th } from "@chakra-ui/react";

export default function ThTable(props: { text: string }) {
  return (
    <Th color="gray.300" fontWeight={500} fontSize={14} letterSpacing="-0.01em">
      {props.text}
    </Th>
  );
}
