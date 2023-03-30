import {
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

  // console.log(groupsState);
  console.log(titlesState.filter((e: any) => e.id == props.title_id && e)[0]);

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
      <Td textAlign="center">{values.title}</Td>
      <Td textAlign="center">{values.group}</Td>
      {/* <Td textAlign="center"> {props.time_between_posting} </Td> */}
      <Td textAlign="center"> {props.is_photo ? "post" : "reels"} </Td>
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
