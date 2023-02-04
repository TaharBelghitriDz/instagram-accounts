import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";
import CircleChartComponent from "../components/circle.chart.component";
import ProxiesTableBody from "../components/proxies.components/tables/proxies.table.body";

export default () => (
  <Fragment>
    <HStack
      w="full"
      justifyContent={{ start: "center", md: "space-between" }}
      alignItems="center"
      p="20px"
      // bg="#2F2F2F"
      rounded="20px"
      flexWrap="wrap"
    >
      <CircleChartComponent text="نشط" />
      <CircleChartComponent text="موقوف​" />
      <CircleChartComponent text="خطأ" />
      <CircleChartComponent text="مفعل​" />
      <CircleChartComponent text="غير مفعل​" />
    </HStack>
    <ProxiesTableBody />
  </Fragment>
);
