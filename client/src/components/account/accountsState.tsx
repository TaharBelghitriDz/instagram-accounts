import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account, accountGet } from "../../utils/api/accounts.api";
import state from "../../utils/state";
import CircleChartComponent from "../circle.chart.component";

export default () => {
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const [accounts, setAccounts] = useState<string[]>([""]);
  const groups = state.useStore((e) => e.groups);

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
      <CircleChartComponent text="نشط" index={index("نشط")} />
      <CircleChartComponent text="موقوف" index={index("موقوف")} />
      <CircleChartComponent text="خطأ" index={index("خطأ")} />
      <CircleChartComponent text="مفعل​" index={index("مفعل​")} />
      <CircleChartComponent text="غير مفعل​" index={index("غير مفعل​")} />
    </HStack>
  );
};
