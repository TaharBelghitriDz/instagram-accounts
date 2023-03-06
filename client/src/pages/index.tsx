import { Box, Text, VStack } from "@chakra-ui/react";
import history from "../components/history";
import posts from "../components/posts";

import state from "../utils/state";
import AccountsPage from "./accounts.page";
import listsPage from "./lists.page";
import proxiesPage from "./proxies.page";

export default (props: { place: string }) => {
  const place = state.useStore((e) => (e.place == "/" ? "الحسابات" : e.place));

  let Comp = Box;

  const changeUrl = (str: string) => window.history.pushState("", "", str);

  if (place == "/") changeUrl("/acconts"), (Comp = AccountsPage);
  if (place == "الحسابات") changeUrl("/acconts"), (Comp = AccountsPage);
  if (place == "البروكسيات") changeUrl("/proxies"), (Comp = proxiesPage);
  if (place == "القوائم") changeUrl("/lists"), (Comp = listsPage);
  if (place == "النشر") changeUrl("/posts"), (Comp = posts);
  if (place == "سجل النشر") changeUrl("/history"), (Comp = history);

  if (props.place == "/") Comp = AccountsPage;
  if (props.place == "/accounts") Comp = AccountsPage;
  if (props.place == "/proxies") Comp = proxiesPage;
  if (props.place == "/lists") Comp = listsPage;
  if (props.place == "/posts") Comp = posts;
  if (props.place == "/history") Comp = history;

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
