import { Fragment } from "react";
import ListsBodyComponents from "../components/lists/lists.body.components";
import ListsHeaderComponent from "../components/lists/lists.header.component";

export default () => (
  <Fragment>
    <ListsHeaderComponent />
    <ListsBodyComponents />
  </Fragment>
);
