import { axiosFun, endpoint } from "./costant";

export const loginFun = async (data: any) =>
  axiosFun({
    method: "POST",
    headers: {
      accept: "application/json",
    },
    url: endpoint + "/auth/login",
    data,
  });
