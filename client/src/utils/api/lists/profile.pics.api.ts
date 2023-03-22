import state from "../../state";
import { axiosFun, endpoint } from "../costant";

export const profilePicGet = axiosFun({
  method: "GET",
  url: endpoint + "/profile-pic",
  headers: { authorization: localStorage.getItem("token") },
});

export const profilePicDelete = (data: any) =>
  axiosFun({
    method: "DELETE",
    url: endpoint + "/profile-pic",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const profilePicAdd = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/profile-pic/add",
    headers: { authorization: localStorage.getItem("token") },
    data,
  });

export const profilePicChange = (data: any) =>
  axiosFun({
    method: "POST",
    url: endpoint + "/actions/change-profile-pics",
    headers: { authorization: localStorage.getItem("token") },
    data: data.data,
  });
