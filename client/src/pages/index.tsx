import { Box, Text, VStack } from "@chakra-ui/react";
import history from "../components/history";
import posts from "../components/posts";

import state from "../utils/state";
import AccountsPage from "./accounts.page";
import listsPage from "./lists.page";
import proxiesPage from "./proxies.page";

export default (props: { place: string }) => {
  const place = state.useStore((e) => e.place);

  let Comp = Box;

  if (place == "الحسابات") Comp = AccountsPage;
  if (place == "البروكسيات") Comp = proxiesPage;
  if (place == "القوائم") Comp = listsPage;
  if (place == "النشر") Comp = posts;
  if (place == "سجل النشر") Comp = history;

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
