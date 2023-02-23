import { axiosFun, endpoint } from "../costant";

export const namesGet = axiosFun({
  method: "GET",
  url: endpoint + "/names",
  headers: { authorization: localStorage.getItem("token") },
});

export const namesDelete = (data: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/names",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const namesAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/names/add",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });
