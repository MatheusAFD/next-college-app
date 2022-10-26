import { Box, Flex, List, Text } from "@chakra-ui/react";
import IconLogo from "../../atomic/atom/logo";

import dashboard from "../../assets/dashboard.png";
import product from "../../assets/product.png";
import customers from "../../assets/customers.png";

import { SideBarItemList } from "../../atomic/atom/SideBarItemList/sideBarItemList";

export function SideBar() {
  return (
    <Box
      as="aside"
      bg="white"
      w="306px"
      p="28px 36px"
      h="100vh"
      position="fixed"
      shadow="md"
    >
      <Flex gap="10px" alignItems="center">
        <IconLogo />
        <Text fontWeight={600} fontSize={26}>
          Dashboard
        </Text>
      </Flex>

      <List mt="64px" display="flex" gap="40px" flexDirection="column">
        <SideBarItemList src={dashboard.src} text="Dashboard" />
        <SideBarItemList src={product.src} text="Insert Student" />
        <SideBarItemList src={customers.src} text="Students" active />
      </List>
    </Box>
  );
}
