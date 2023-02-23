import { axiosFun, endpoint } from "./costant";

export const postsGet = axiosFun({
  method: "GET",
  headers: { authorization: localStorage.getItem("token") },
  url: endpoint + "/posts",
});

export const postsAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/posts/add",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const postsDelete = (id: string) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/posts/" + id,
    headers: { authorization: localStorage.getItem("token") },
  });

export const postsUpdate = ({ data, id }: any) =>
  axiosFun({
    method: "PATCH",
    url: endpoint + "/posts/" + id,
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const postsHistory = axiosFun({
  method: "GET",
  headers: { authorization: localStorage.getItem("token") },
  url: endpoint + "/posts/history",
});
