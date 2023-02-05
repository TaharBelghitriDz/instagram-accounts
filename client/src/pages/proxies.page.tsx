import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";
import CircleChartComponent from "../components/circle.chart.component";
import ProxiesTableBody from "../components/proxies.components/tables/proxies.table.body";

export default () => (
  <Fragment>
    <HStack
      w="full"
      justifyContent={{ start: "center", md: "space-evenly" }}
      alignItems="center"
      p="20px"
      rounded="20px"
      flexWrap="wrap"
    >
      <CircleChartComponent text="مكتمل" />
      <CircleChartComponent text="شاغر​" />
      <CircleChartComponent text=" الاستخدام" />
    </HStack>
    <ProxiesTableBody />
  </Fragment>
);
