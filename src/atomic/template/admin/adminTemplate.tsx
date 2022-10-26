import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SideBar } from "../../../features/SideBar/sidebar";

export default function AdminTemplate({ children }: { children?: ReactNode }) {
  return (
    <>
      <Grid templateColumns="306px 1fr">
        <GridItem>
          <SideBar />
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </>
  );
}
