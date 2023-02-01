import axios, { AxiosRequestConfig } from "axios";

export const endpoint = "__";

export const axiosFun = (config: AxiosRequestConfig<any>) =>
  axios(config)
    .then((res) => ({ res }))
    .catch((err) => ({ err }))
    .then((s) => ({ err: undefined, res: undefined, ...s }));
