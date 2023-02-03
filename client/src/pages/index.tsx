import { Box, Text, VStack } from "@chakra-ui/react";

import state from "../utils/state";
import AccountsPage from "./accounts.page";

export default (props: { place: string }) => {
  const place = state.useStore((e) => e.place);

  let Comp = Box;

  if (place == "الحسابات") Comp = AccountsPage;

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
