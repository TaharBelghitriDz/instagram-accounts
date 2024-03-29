import state from "../state";
import { axiosFun, endpoint } from "./costant";
import { groupGet } from "./groups.api";
import { biographiesGet } from "./lists/bio.api";
import { namesGet } from "./lists/names.api";
import { titleGet } from "./lists/titles.api";
import { postsGet } from "./posts.api";

export type Account = {
  username: string;
  email: string;
  ig_password: string;
  email_password: string;
  profile_pic_link: string;
  note: string;
  proxy: string;
  id: number;
  status: string;
  is_active: string;
  created_date: string;
};

export const accountsGet = axiosFun({
  method: "GET",
  headers: { Authorization: localStorage.getItem("token") },
  url: endpoint + "/accounts",
});

export const accountGet = (id: string) =>
  axiosFun({
    method: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/" + id,
  });

export const accountAddToGroup = (args: { data: any; id: number }) =>
  axiosFun({
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      accept: "application/json",
      "Content-Type": "application/json",
    },
    url: endpoint + "/accounts/add/" + args.id,
    data: args.data,
  });

export const accountsDelete = (args: { data: any; id: number }) =>
  axiosFun({
    method: "DELETE",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/" + args.id,
    data: args.data,
  });

export const namesChange = (data: any) => {
  console.log(data);

  return axiosFun({
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/actions/change-names",
    data,
  });
};
export const accoutGetById = (data: any) =>
  axiosFun({
    method: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/account/" + data,
  });

export const accoutUpdate = (args: any) =>
  axiosFun({
    method: "PATCH",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/accounts/" + args.id,
    data: args.data,
  });

export const accountsActivate = (data: any) =>
  axiosFun({
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/actions/activate-accounts",
    data,
  });

export const accountsDesactivate = (data: any) =>
  axiosFun({
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") },
    url: endpoint + "/actions/deactivate-accounts",
    data,
  });

export const initialData = groupGet
  .then(async ({ res, err }) => {
    if (err) return;

    if (res?.data.length < 1) return;

    await state.changeState({ groups: res?.data });
    await state.changeState({ selectedGroup: res?.data[0]?.id });

    console.log(res?.data[0]?.id);

    return res?.data[0]?.id;
  })
  .then((id) => {
    if (id)
      return Promise.all([
        id ? accountGet(id) : { err: true, res: undefined },
        titleGet,
        postsGet,
        namesGet,
        biographiesGet,
      ]).then((result) => {
        const errors = result.map((e) => !e.err);
        if (errors.includes(false)) return;

        // console.log({ name: result[3].res?.data });

        return state.changeState({
          accounts: result[0].res?.data,
          name: result[3].res?.data,
          bio: result[4].res?.data,
          titles: result[1].res?.data,
        });
      });
  });
