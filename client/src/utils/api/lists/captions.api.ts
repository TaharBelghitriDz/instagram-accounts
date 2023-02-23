import { axiosFun, endpoint } from "../costant";

export const captionGet = (id: any) =>
  axiosFun({
    method: "GET",
    url: endpoint + "/caption/" + id,
    headers: { authorization: localStorage.getItem("token") },
  });

export const captionAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/caption/" + data.id,
    headers: { authorization: localStorage.getItem("token") },
    data: data.data,
  });

export const captionUpdate = (data: any) =>
  axiosFun({
    method: "PATCH",
    url: endpoint + "/caption/" + data.id,
    headers: { authorization: localStorage.getItem("token") },
    data: { title: data.title },
  });

export const captionDelete = (data: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/caption/" + data.id,
    headers: { authorization: localStorage.getItem("token") },
    data: data.data,
  });
