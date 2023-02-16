import { HStack, useToast } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import CircleChartComponent from "../components/circle.chart.component";
import AccountsTableComponent from "../components/account/tables/accounts.table.component";
import AccountActionListComponent from "../components/account/account.action.list.component";
import Loading, {
  ProgressLoading,
  ProgressLoadingCompnent,
} from "../components/loading";
import { initialData } from "../utils/api/accounts.api";
import { getGroups, groupCreate } from "../utils/api/groups.api";
import state from "../utils/state";

export default () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  // initialData().then((res) => {
  //   // const errors = res.map((e) => !e.err);
  //   // if (errors.includes(false))
  //   //   return toast({
  //   //     status: "error",
  //   //     isClosable: true,
  //   //     description: "خطا في الاتصال",
  //   //   });
  //   // console.log(res);
  //   // setIsLoading(() => false);
  // });

  getGroups.then(({ err, res }) => {
    state.changeState({ groups: res?.data });
  });

  if (isLoading) return <ProgressLoadingCompnent />;

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
