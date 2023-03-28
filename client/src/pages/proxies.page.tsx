import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";
import CircleChartComponent from "../components/circle.chart.component";
import ProxiesTableBody from "../components/proxies/tables/proxies.table.body";

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
      <CircleChartComponent sum={0} index={0} onclick={() => {}} text="مكتمل" />
      <CircleChartComponent sum={0} index={0} onclick={() => {}} text="شاغر​" />
      <CircleChartComponent
        sum={0}
        index={0}
        onclick={() => {}}
        text=" الاستخدام"
      />
    </HStack>
    <ProxiesTableBody />
  </Fragment>
);
