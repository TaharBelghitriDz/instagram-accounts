import { Text, VStack } from "@chakra-ui/react";
import state from "../../../utils/state";
import listsBodyBio from "./list.body.content/lists.body.bio";
import listsBodyComments from "./list.body.content/lists.body.comments";
import listsBodyName from "./list.body.content/lists.body.name";
import listsBodyPictures from "./list.body.content/lists.body.pictures";
import listsBodyTextAndImages from "./list.body.content/lists.body.text.and.images";

export default () => {
  const place = state.useStore((e) => e.listPlace);

  let Comp = listsBodyName;
  if (place == "names") Comp = listsBodyName;
  else if (place == "bio") Comp = listsBodyBio;
  else if (place == "cover") Comp = listsBodyPictures;
  else if (place == "text") Comp = listsBodyTextAndImages;
  else if (place == "comments") Comp = listsBodyComments;
  else Comp = () => <Text>no</Text>;

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="20px">
      <Comp />
    </VStack>
  );
};
