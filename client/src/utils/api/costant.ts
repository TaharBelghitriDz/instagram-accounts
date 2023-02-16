import axios, { AxiosRequestConfig } from "axios";
export const endpoint = "http://161.35.23.210:8000";

export const axiosFun = (config: AxiosRequestConfig<any>) =>
  axios(config)
    .then((res) => ({ res }))
    .catch((err) => ({ err }))
    .then((s) => ({ err: undefined, res: undefined, ...s }));
