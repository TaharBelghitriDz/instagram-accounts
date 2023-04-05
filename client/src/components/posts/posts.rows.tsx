import {
  Box,
  Flex,
  HStack,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Post } from ".";
import { date } from "../../utils/dates";
import state from "../../utils/state";
import PostsRemoveModel from "./posts.remove.model";

const Selected = (props: { selected: boolean; onClick: () => void }) => (
  <Box
    h="30px"
    w="30px"
    rounded="full"
    bg={props.selected ? "red" : ""}
    cursor="pointer"
    border="3px solid red "
    onClick={props.onClick}
  />
);

export default (props: Post & { onClick: (e: any) => void }) => {
  const discoler = useDisclosure();
  const titlesState = state.useStore((e) => e.titles);
  const groupsState = state.useStore((e) => e.groups);
  const toast = useToast();

  const [values, setValues] = useState<{ title: string; group: string }>({
    title: "",
    group: "",
  });

  if (titlesState.length == 0) return <Tr />;
  const postsSelectedState = state.useStore((e) => e.selectedPost);
  const isSelected = postsSelectedState.includes(props.id);

  const titles = titlesState.filter((e: any) => e.id == props.title_id && e)[0];
  const groups = groupsState.filter((e: any) => e.id == props.group_id && e)[0];

  useEffect(() => {
    if (titles && groups) {
      setValues(() => ({
        group: groups.name,
        title: titles.title,
      }));
    }
  }, []);

  const select = () => {
    if (!isSelected)
      return state.changeState({
        selectedPost: [...postsSelectedState, props.id],
      });

    return state.changeState({
      selectedPost: postsSelectedState.filter(
        (e: number) => e != props.id && e
      ),
    });
  };

  const posted = !!props.is_launched;

  return (
    <Tr bg={isSelected ? "red.800" : ""}>
      <Td
        w="150px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Flex justifyContent="center">
          <Selected onClick={select} selected={isSelected} />
        </Flex>
      </Td>
      <Td>
        <Text
          w="full"
          bg={posted ? "green.0" : "red.900"}
          textAlign="center"
          p="10px"
          rounded="10px"
        >
          {posted ? "تم النشر" : "لم يتم النشر"}
        </Text>
      </Td>
      <Td textAlign="center">{values.title}</Td>
      <Td textAlign="center">{values.group}</Td>
      {/* <Td textAlign="center"> {props.time_between_posting} </Td> */}
      <Td textAlign="center"> {props.is_photo ? "بوست" : "رييلز"} </Td>
      <Td isNumeric>
        <VStack>
          <span style={{ textAlign: "center" }}>
            {date(props.created_date, "day")}
          </span>
          <span style={{ textAlign: "center" }}>
            {date(props.created_date, "time")}
          </span>
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
