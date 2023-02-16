import { axiosFun, endpoint } from "./costant";

export const getProxies = () =>
  axiosFun({
    method: "GET",
    url: endpoint + "/proxies",
    headers: { Authorization: localStorage.getItem("token") },
  });
