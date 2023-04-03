import { useSyncExternalStore } from "use-sync-external-store/shim";
import { deepmerge } from "deepmerge-ts";
import { GroupInutType } from "./api/groups.api";
import { Proxies } from "./api/proxies.api";
import { Account } from "./api/accounts.api";
import { Post } from "../components/posts";

const isObject = (item: any) =>
  typeof item === "object" && !Array.isArray(item);

const merge = (target: any, source: any) => {
  const isDeep = (prop: any) =>
    isObject(source[prop]) &&
    target.hasOwnProperty(prop) &&
    isObject(target[prop]);
  const replaced: any = Object.getOwnPropertyNames(source)
    .map((prop) => ({
      [prop]: isDeep(prop) ? merge(target[prop], source[prop]) : source[prop],
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return {
    ...target,
    ...replaced,
  };
};

function createState<T, R>(
  state: T,
  methods: (currentState: T) => {
    [key in keyof R]: (...args: any) => Partial<T> | Promise<Partial<T>>;
  }
) {
  const listeners = new Set<() => void>();

  const subscribe = (clbk: () => void) => {
    listeners.add(clbk);
    return () => listeners.delete(clbk);
  };

  let newState = state;

  let newMethods = methods(newState);

  Object.keys(methods(newState)).forEach((e) => {
    const fun = methods(newState)[e as keyof R];

    newMethods[e as keyof R] = (p: Parameters<typeof fun>) => {
      if (
        typeof fun(p) === "object" &&
        typeof (fun(p) as any).then === "function"
      )
        return (fun(p) as Promise<Partial<T>>).then((s: Partial<T>) => {
          newState = merge(newState, s) as any as T;
          listeners.forEach((l) => l());
          return newState;
        });
      else
        return (
          (newState = merge(newState, fun(p)) as any as T),
          listeners.forEach((l) => l()),
          newState
        );
    };
  });

  const sUpdate = (e: Partial<typeof methods>) => {
    newState = deepmerge(newState, e) as any as T;
    listeners.forEach((l) => l());
  };

  return {
    useStore: (field: (s: typeof state) => any) =>
      useSyncExternalStore(subscribe, () => field(newState)),
    sUpdate,
    state: newState,
    ...newMethods,
  };
}

const state = {
  place: "/",
  listPlace: "names",
  selectedGroup: "",
  accountsView: [] as string[] | undefined,
  selectedProxies: [] as number[],
  selectedAccounts: [],
  refreshAccounts: 0,
  refreshtextsAndImages: 0,
  groups: [] as GroupInutType[],
  accounts: [] as Account[],
  proxies: [] as Proxies[],
  name: [] as { name: string; id: number }[],
  bio: [] as { bio: string; id: number }[],
  selcted: [] as number[],
  profile_pics: [] as { profile_pic_link: string; id: number }[],
  selectedPics: [] as number[],
  postSelected: {} as { title: number; group: number },
  titles: [] as { title: string; id: number }[],
  selectedTitles: [] as number[],
  captions: [] as { caption: string; id: number }[],
  posts: [] as Post[],
  postView: "",
  medias: [] as {
    media_link: string;
    is_photo: boolean;
    id: number;
    title_id: number;
  }[],
  selectedPost: [] as number[],
};

export default createState(state, ({ groups }) => ({
  changeView: (place) => ({ place }),
  changeListPlace: (listPlace) => ({ listPlace }),
  changeState: (s: Partial<typeof state>) => ({ ...s }),
  changeAccountsView: (accountsView: string[] | undefined) => ({
    accountsView,
  }),
}));
