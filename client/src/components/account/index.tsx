import { HStack } from "@chakra-ui/react";
import { Fragment } from "react";
import AccountActionListComponent from "./account.action.list.component";
import AccountsState from "./accountsState";
import AccountsTableComponent from "./tables/accounts.table.component";

export default () => {
  return (
    <Fragment>
      <AccountsState />
      <AccountActionListComponent />
      <AccountsTableComponent />
    </Fragment>
  );
};
