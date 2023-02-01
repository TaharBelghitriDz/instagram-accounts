import axios from "axios";
import { axiosFun, endpoint } from "./costant";

export const loginFun = async (data: { email: string; password: string }) =>
  axiosFun({
    method: "POST",
    url: endpoint,
    data,
  });
