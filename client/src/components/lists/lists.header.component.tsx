import { HStack } from "@chakra-ui/react";
import state from "../../utils/state";
import { ActionIcon } from "../custom.button.component";

export default () => {
  const { changeListPlace } = state;
  const listPlace = state.useStore((e) => e.listPlace);

  return (
    <HStack alignItems="start" flexWrap="wrap" justifyContent="space-evenly">
      <ActionIcon
        color={listPlace == "names" ? "black" : undefined}
        text=" اسماء الحسابات​"
        onClick={() => changeListPlace("names")}
      />
      <ActionIcon
        color={listPlace == "bio" ? "black" : undefined}
        text="نبذة عن الحساب​"
        onClick={() => changeListPlace("bio")}
      />
      <ActionIcon
        color={listPlace == "cover" ? "black" : undefined}
        text="صور الشخصية للحساب​"
        onClick={() => changeListPlace("cover")}
      />
      <ActionIcon
        color={listPlace == "text" ? "black" : undefined}
        text="صور ونصوص​"
        onClick={() => changeListPlace("text")}
      />
      <ActionIcon
        color={listPlace == "comments" ? "black" : undefined}
        text="التعليقات"
        onClick={() => changeListPlace("comments")}
      />
    </HStack>
  );
};
