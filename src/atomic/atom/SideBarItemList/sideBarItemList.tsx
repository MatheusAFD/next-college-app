import { Flex, Image, ListItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface ImageProps {
  text: string;
  src: string;
  active?: boolean;
}

export function SideBarItemList({ text, src, active }: ImageProps) {
  return (
    <ListItem>
      <Flex
        w={250}
        p="11px"
        rounded="8px"
        bg={active === true ? "purple.800" : "white"}
        cursor="pointer"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap="14px">
          <Image src={src} />
          <ListItem
            display="flex"
            alignItems="center"
            color={active === true ? "white" : "gray.500"}
            fontSize="14px"
          >
            {text}
          </ListItem>
        </Flex>
        <ChevronRightIcon
          color={active === true ? "white" : "gray.500"}
          w={4}
          h={8}
        />
      </Flex>
    </ListItem>
  );
}
