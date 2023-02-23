import { axiosFun, endpoint } from "../costant";

export const commentsGet = axiosFun({
  method: "GET",
  url: endpoint + "/comments",
  headers: { authorization: localStorage.getItem("token") },
});

export const commentsDelete = (data: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/comments",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const commentsUpdate = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/comments/" + data,
    headers: { authorization: localStorage.getItem("token") },
  });

// commeets remove
