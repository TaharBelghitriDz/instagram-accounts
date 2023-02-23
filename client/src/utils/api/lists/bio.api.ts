import state from "../../state";
import { axiosFun, endpoint } from "../costant";

export const biographiesGet = axiosFun({
  method: "GET",
  url: endpoint + "/biographies",
  headers: { authorization: localStorage.getItem("token") },
});

export const biographiesDelete = (data: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/biographies",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const biographiesAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/biographies/add",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const bioChange = () =>
  axiosFun({
    method: "GET",
    url: endpoint + "/actions/change-bios/" + state.state.selectedGroup,
    headers: { authorization: localStorage.getItem("token") },
  });
