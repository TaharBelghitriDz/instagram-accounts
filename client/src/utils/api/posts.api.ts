import { axiosFun, endpoint } from "./costant";

export const getPosts = axiosFun({
  method: "GET",
  headers: { authorization: localStorage.getItem("token") },
  url: endpoint + "/posts",
});
