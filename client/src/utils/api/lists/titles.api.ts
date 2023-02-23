import { axiosFun, endpoint } from "../costant";

export const titleGet = axiosFun({
  method: "GET",
  url: endpoint + "/titles",
  headers: { authorization: localStorage.getItem("token") },
});

export const titleAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/titles/add",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const titleUpdate = (data: any) =>
  axiosFun({
    method: "PATCH",
    url: endpoint + "/titles/" + data.id,
    headers: { authorization: localStorage.getItem("token") },
    data: { title: data.title },
  });

export const titleDelete = (data: number) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/titles/" + data,
    headers: { authorization: localStorage.getItem("token") },
  });
