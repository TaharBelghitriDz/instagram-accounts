import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";
import CircleChartComponent from "../components/circle.chart.component";
import ProxiesTableBody from "../components/proxies/tables/proxies.table.body";
import { Proxies } from "../utils/api/proxies.api";
import state from "../utils/state";

export default () => {
  const proxies: Proxies[] = state
    .useStore((e) => e.proxies)
    .map((e: any) => (!e.status ? { ...e, status: "غير معرف" } : e));

  const active = proxies.filter((e) => e.status == "شغال" && e).length;
  const inactive = proxies.filter((e) => e.status == "محظور" && e).length;
  const none = proxies.filter((e) => e.status == "غير معرف" && e).length;

  return (
    <Fragment>
      <HStack
        w="full"
        justifyContent={{ start: "center", md: "space-evenly" }}
        alignItems="center"
        p="20px"
        rounded="20px"
        flexWrap="wrap"
      >
        <CircleChartComponent
          sum={active}
          index={Math.floor((active * 10) / proxies.length)}
          onclick={() => {}}
          text="شغال"
        />
        <CircleChartComponent
          sum={inactive}
          index={Math.floor((inactive * 10) / proxies.length)}
          onclick={() => {}}
          text="محظور"
        />
        <CircleChartComponent
          sum={none}
          index={Math.floor((none * 10) / proxies.length)}
          onclick={() => {}}
          text="غير معرف"
        />
      </HStack>
      <ProxiesTableBody />
    </Fragment>
  );
};
