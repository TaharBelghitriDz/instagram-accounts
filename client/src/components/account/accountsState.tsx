import { HStack } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { Account, accountGet } from "../../utils/api/accounts.api";
import state from "../../utils/state";
import CircleChartComponent from "../circle.chart.component";

export default () => {
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const [accounts, setAccounts] = useState<string[]>([""]);
  const groups = state.useStore((e) => e.groups);
  const selectedView = state.useStore((e) => e.accountsView);

  const refreshAccounts = state.useStore((e) => e.refreshAccounts);

  const getData = () => {
    if (selectedGroup != "") {
      accountGet(selectedGroup).then(({ res, err }) => {
        if (err) return;

        setAccounts(() => [
          ...res?.data.map((e: Account) =>
            e.is_active ? "مفعل​" : "غير مفعل​"
          ),
          ...res?.data.map((e: Account) => e.status),
        ]);
      });
    }
  };

  useEffect(() => {
    getData();
  }, [selectedGroup, groups]);

  useEffect(() => {
    getData();
  }, [refreshAccounts]);

  const index = (selected: string) => {
    if (accounts.filter((e) => e == selected && e).length == 0) return 0;

    const number = Math.floor(
      (accounts.filter((e) => e == selected && e).length /
        (accounts.length / 2)) *
        10
    );

    return number;
  };

  const sum = (selected: string) =>
    accounts.filter((e) => e == selected && e).length;

  const onclick = (type: string) => {
    if (selectedView.includes(type))
      return state.changeAccountsView(
        selectedView.filter((e: string) => e != type && e)
      );

    state.changeAccountsView([...selectedView, type]);
  };

  return (
    <HStack
      w="full"
      justifyContent={{ start: "center", md: "space-between" }}
      alignItems="center"
      p="20px"
      bg="#2F2F2F"
      rounded="20px"
      flexWrap="wrap"
    >
      {selectedGroup && (
        <Fragment>
          <CircleChartComponent
            text="نشط"
            index={index("نشط")}
            sum={sum("نشط")}
            onclick={() => onclick("نشط")}
          />
          <CircleChartComponent
            text="موقوف"
            index={index("موقوف")}
            sum={sum("موقوف")}
            onclick={() => onclick("موقوف")}
          />
          <CircleChartComponent
            text="خطأ"
            index={index("خطأ")}
            sum={sum("خطأ")}
            onclick={() => onclick("خطأ")}
          />
          <CircleChartComponent
            text="مفعل​"
            index={index("مفعل​")}
            sum={sum("مفعل​")}
            onclick={() => onclick("مفعل​")}
          />
          <CircleChartComponent
            text="غير مفعل​"
            index={index("غير مفعل​")}
            sum={sum("غير مفعل​")}
            onclick={() => onclick("غير مفعل​")}
          />
        </Fragment>
      )}
    </HStack>
  );
};
