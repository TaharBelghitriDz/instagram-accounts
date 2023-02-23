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

export const profilePicChange = () =>
  axiosFun({
    method: "GET",
    url: endpoint + "/actions/change-profile-pics/" + state.state.selectedGroup,
    headers: { authorization: localStorage.getItem("token") },
  });
