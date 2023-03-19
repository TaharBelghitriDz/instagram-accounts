export const endpoint = "http://135.181.209.82:1996";

import axios, { AxiosRequestConfig } from "axios";

const timeout = () => {
  const controller = new AbortController();

  let valid = true;

  setTimeout(() => {
    valid = false;
  }, 10);

  if (!valid) controller.abort;

  !valid && console.log("canceled");

  return controller.signal;
};

export const axiosFun = (config: AxiosRequestConfig<any>) => {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
  }, 2000);

  return axios({ ...config, signal: controller.signal })
    .then((res) => ({ res }))
    .catch((err) => {
      if (err.code == "ERR_CANCELED") {
        // fs.mkdir("/home", function () {
        //   fs.writeFile("/home/hello-world.txt", "Hello world!\n", function () {
        //     fs.readFile("/home/hello-world.txt", "utf-8", function (err, data) {
        //       console.log(data);
        //     });
        //   });
        // });
      }

      return { err };
    })
    .then((s) => ({ err: undefined, res: undefined, ...s }));
};
