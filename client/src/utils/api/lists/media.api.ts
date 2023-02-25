import { axiosFun, endpoint } from "../costant";

export const mediaGet = (data: string) =>
  axiosFun({
    method: "GET",
    url: endpoint + "/medias/" + data,
    headers: { authorization: localStorage.getItem("token") },
  });

export const mediaAdd = ({ id, data }: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/medias/" + id,
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const mediaDelete = ({ id, data }: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/medias/" + id,
    headers: { authorization: localStorage.getItem("token") },
    data,
  });
