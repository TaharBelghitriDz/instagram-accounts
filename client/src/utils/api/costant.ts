import axios, { AxiosRequestConfig } from "axios";
export const endpoint = "http://135.181.209.82:1996";

export const axiosFun = (config: AxiosRequestConfig<any>) =>
  axios(config)
    .then((res) => ({ res }))
    .catch((err) => ({ err }))
    .then((s) => ({ err: undefined, res: undefined, ...s }));
