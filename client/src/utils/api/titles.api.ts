import { axiosFun, endpoint } from "./costant";

export const getTitles = axiosFun({
  method: "GET",
  headers: { authorization: localStorage.getItem("token") },
  url: endpoint + "/titles",
});
