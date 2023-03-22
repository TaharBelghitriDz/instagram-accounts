import { axiosFun, endpoint } from "./costant";

export const botAddBioLink = (data: any) =>
  axiosFun({
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/actions/add-bio-link/?link=" + data.data,
    data: data.ids,
  });
