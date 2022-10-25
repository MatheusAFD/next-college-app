import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <Box bg="gray.600" w="full" h="100vh">
      {children}
    </Box>
  );
}
