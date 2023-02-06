import { Text, VStack } from "@chakra-ui/react";
import state from "../../../utils/state";

import ListsBodyNameComponent from "./lists.body.name.component";

export default () => {
  const place = state.useStore((e) => e.listPlace);

  let Comp = ListsBodyNameComponent;
  if (place == "names") Comp = ListsBodyNameComponent;
  else Comp = () => <Text>no</Text>;

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="20px">
      <Comp />
    </VStack>
  );
};
