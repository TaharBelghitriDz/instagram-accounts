import { axiosFun, endpoint } from "./costant";

export type GroupInutType = {
  id?: number;
  name: string;

  likes_from: number;
  likes_to: number;

  comments_from: number;
  comments_to: number;

  time_between_likes_from: number;
  time_between_likes_to: number;

  time_between_comments_from: number;
  time_between_comments_to: number;

  emojis_number_from: number;
  emojis_number_to: number;
};

export const groupGet = axiosFun({
  method: "GET",
  headers: { authorization: localStorage.getItem("token") },
  url: endpoint + "/groups",
});

export const groupCreate = (data: GroupInutType) =>
  axiosFun({
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
    },
    url: endpoint + "/groups/add",
    data,
  });

export const groupDelete = (id: string) =>
  axiosFun({
    method: "DELETE",
    headers: {
      authorization: localStorage.getItem("token"),
    },
    url: endpoint + "/groups/" + id,
  });

export const groupsUpdate = (e: { id: string; data: any }) =>
  axiosFun({
    method: "PATCH",
    url: endpoint + "/groups/" + e.id,
    headers: { authorization: localStorage.getItem("token") },
    data: e.data,
  });
