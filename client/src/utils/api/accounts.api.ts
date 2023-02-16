import state from "../state";
import { axiosFun, endpoint } from "./costant";
import { getGroups } from "./groups.api";
import { getPosts } from "./posts.api";
import { getTitles } from "./titles.api";

const getAccounts = axiosFun({
  method: "GET",
  headers: { Authorization: localStorage.getItem("token") },
  url: endpoint + "/accounts",
});

export const getAccount = (id: string) =>
  axiosFun({
    method: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/" + id,
  });

export const AddAccountsToGroup = (id: string) =>
  axiosFun({
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/add/" + id,
  });

// export const createAccounts = ({na}) => axiosFun({});

export const initialData = () =>
  Promise.all([getGroups, getAccounts, getTitles, getPosts]);
