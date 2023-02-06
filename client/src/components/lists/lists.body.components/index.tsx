import { VStack } from "@chakra-ui/react";
import state from "../../../utils/state";

import ListsBodyNameComponent from "./lists.body.name.component";

export default () => {
  const place = state.useStore((e) => e.listPlace);
  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="20px">
      <ListsBodyNameComponent />
    </VStack>
  );
};
