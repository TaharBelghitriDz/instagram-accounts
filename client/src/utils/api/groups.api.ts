import { axiosFun, endpoint } from "./costant";

export type GroupInutType = {
  id: number;
  name: string;
  likes_from: number;
  likes_to: number;
  comments_from: number;
  comments_to: number;
  time_between_likes: number;
  time_between_comments: number;
  emojis_number: number;
};

export const getGroups = axiosFun({
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
