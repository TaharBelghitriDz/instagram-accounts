import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";

import CircleChartComponent from "../components/circle.chart.component";
import AccountsTableComponent from "../components/account/tables/accounts.table.component";
import AccountActionListComponent from "../components/account/account.action.list.component";

export default () => {
  return (
    <Fragment>
      <HStack
        w="full"
        justifyContent={{ start: "center", md: "space-between" }}
        alignItems="center"
        p="20px"
        bg="#2F2F2F"
        rounded="20px"
        flexWrap="wrap"
      >
        <CircleChartComponent text="نشط" />
        <CircleChartComponent text="موقوف​" />
        <CircleChartComponent text="خطأ" />
        <CircleChartComponent text="مفعل​" />
        <CircleChartComponent text="غير مفعل​" />
      </HStack>
      <AccountActionListComponent />

      <AccountsTableComponent />
    </Fragment>
  );
};
