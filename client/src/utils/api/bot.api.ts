import { axiosFun, endpoint } from "./costant";

export const botAddBioLink = (data: any) =>
  axiosFun({
    method: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/actions/add-bio-link/" + data.id + "?link=" + data.data,
    data: data.ids,
  });
