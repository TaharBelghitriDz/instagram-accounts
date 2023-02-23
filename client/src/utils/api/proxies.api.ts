import { axiosFun, endpoint } from "./costant";

export type Proxies = {
  host: string;
  port: string;
  username: string;
  password: string;
  created_date?: string;
  id?: string;
};

export const proxiesGet = axiosFun({
  method: "GET",
  url: endpoint + "/proxies",
  headers: { Authorization: localStorage.getItem("token") },
});

export const proxiesCreate = (data: Proxies[]) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/proxies/add",
    headers: { Authorization: localStorage.getItem("token") },
    data,
  });

export const proxiesDelete = (data: string[]) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/proxies",
    headers: { Authorization: localStorage.getItem("token") },
    data,
  });
