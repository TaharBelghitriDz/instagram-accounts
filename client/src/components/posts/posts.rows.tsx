import {
  HStack,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Post } from ".";
import state from "../../utils/state";
import PostsRemoveModel from "./posts.remove.model";

export default (props: Post & { onClick: (e: any) => void }) => {
  const discoler = useDisclosure();
  const titlesState = state.useStore((e) => e.titles);
  const groupsState = state.useStore((e) => e.groups);
  const toast = useToast();

  if (titlesState.length == 0) return <Tr />;

  const titles = titlesState.filter((e: any) => e.id == props.title_id && e)[0];
  const groups = groupsState.filter((e: any) => e.id == props.group_id && e)[0];

  const copy = () => {
    toast({ status: "success", title: "تم النسخ", isClosable: true });
  };

  return (
    <Tr>
      {/* <Td>
        <Text
          bg="green.0"
          color="green.1"
          p="10px"
          rounded="2xl"
          cursor="pointer"
          onClick={copy}
        >
          نسخ
        </Text>
      </Td> */}
      <Td textAlign="center">{titles.title}</Td>
      <Td textAlign="center">{groups.name}</Td>
      <Td textAlign="center"> {props.time_between_posting} </Td>
      <Td textAlign="center"> {props.is_photo ? "post" : "reels"} </Td>
      <Td isNumeric>
        <VStack>
          <span> 02/02/2023 </span>
          <span>12:23</span>
          <PostsRemoveModel post_id={props.id as number} {...discoler} />
        </VStack>
      </Td>
      <Td>
        <HStack spacing="10px">
          {/* <Text
            p="10px"
            rounded="xl"
            cursor="pointer"
            bg="blue.800"
            color="blue.200"
            onClick={props.onClick}
          >
            تعديل
          </Text> */}
          <Text
            p="10px"
            rounded="xl"
            cursor="pointer"
            bg="red.800"
            color="red.200"
            onClick={discoler.onOpen}
          >
            حدف
          </Text>
        </HStack>
      </Td>
    </Tr>
  );
};
