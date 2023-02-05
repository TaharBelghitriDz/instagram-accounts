import { HStack } from "@chakra-ui/react";
import state from "../../utils/state";
import { ActionIcon } from "../custom.button.component";

export default () => {
  const { changeListPlace } = state;

  return (
    <HStack alignItems="start" flexWrap="wrap" justifyContent="space-evenly">
      <ActionIcon
        text=" اسماء الحسابات​"
        onClick={() => changeListPlace("names")}
      />
      <ActionIcon
        text="نبذة عن الحساب​"
        onClick={() => changeListPlace("bio")}
      />
      <ActionIcon
        text="صور الشخصية للحساب​"
        onClick={() => changeListPlace("cover")}
      />
      <ActionIcon text="صور ونصوص​" onClick={() => changeListPlace("text")} />
      <ActionIcon
        text="التعليقات"
        onClick={() => changeListPlace("comments")}
      />
    </HStack>
  );
};
