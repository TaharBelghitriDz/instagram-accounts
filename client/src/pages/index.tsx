import { Box, Text, VStack } from "@chakra-ui/react";
import history from "../components/history";
import posts from "../components/posts";

import state from "../utils/state";
import AccountsPage from "./accounts.page";
import listsPage from "./lists.page";
import proxiesPage from "./proxies.page";

export default (props: { place: string }) => {
  const place = state.useStore((e) => (e.place == "/" ? "الحسابات" : e.place));

  const changeState = (place: string) => state.changeState({ place });

  let Comp = Box;

  const changeUrl = (str: string) => window.history.pushState("", "", str);

  if (place == "/")
    changeState("الحسابات"), changeUrl("/accounts"), (Comp = AccountsPage);

  if (place == "الحسابات")
    changeState("الحسابات"), changeUrl("/accounts"), (Comp = AccountsPage);

  if (place == "البروكسيات")
    changeState("البروكسيات"), changeUrl("/proxies"), (Comp = proxiesPage);

  if (place == "القوائم")
    changeState("القوائم"), changeUrl("/lists"), (Comp = listsPage);

  if (place == "النشر")
    changeState("النشر"), changeUrl("/posts"), (Comp = posts);

  if (place == "سجل النشر")
    changeState("سجل النشر"), changeUrl("/history"), (Comp = history);

  if (props.place == "/") changeState("الحسابات"), (Comp = AccountsPage);
  if (props.place == "/accounts")
    changeState("الحسابات"), (Comp = AccountsPage);
  if (props.place == "/proxies")
    changeState("البروكسيات"), (Comp = proxiesPage);
  if (props.place == "/lists") changeState("القوائم"), (Comp = listsPage);
  if (props.place == "/posts") changeState("النشر"), (Comp = posts);
  if (props.place == "/history") changeState("سجل النشر"), (Comp = history);

  return (
    <VStack
      w="full"
      maxW="1000px"
      minH="50vh"
      rounded="30px"
      p="20px"
      alignItems="start"
      bg="black.0"
      spacing="20px"
    >
      <Text
        fontSize="30px"
        bg="purple.900"
        color="purple.100"
        p="20px"
        py="10px"
        display={{ start: "none", lg: "block" }}
        rounded="20px"
      >
        {place}
      </Text>
      <Comp />
    </VStack>
  );
};
