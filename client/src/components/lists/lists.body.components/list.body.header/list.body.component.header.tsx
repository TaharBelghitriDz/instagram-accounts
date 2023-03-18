import {
  Checkbox,
  HStack,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { ComponentType, useState } from "react";
import {
  biographiesAdd,
  biographiesDelete,
} from "../../../../utils/api/lists/bio.api";
import { namesAdd, namesDelete } from "../../../../utils/api/lists/names.api";
import state from "../../../../utils/state";
import Models from "../../models";
import listsAddBio from "../../models/lists.add.bio";
import listsAddTitle from "../../models/lists.add.title";
import listsRemove from "../../models/lists.remove";

export default (props: {
  place: string;
  status: boolean;
  selectAll: (checked: boolean) => void;
  names: { name: string; selected: boolean }[];
}) => {
  const discloser = useDisclosure();
  const removeDiscloser = useDisclosure();
  const toast = useToast();
  const selcted = state.useStore((e) => e.selcted);

  const view = (args: {
    e: ComponentType<any>;
    discloser: typeof discloser;
    fun: (args?: any) => void;
  }) => <args.e {...args.discloser} fun={args.fun} />;

  const addData = (value: string) => {
    const values =
      props.place == "name"
        ? value
            .split("\n")
            .filter((e) => e != "" && e)
            .map((e) => ({ name: e }))
        : [{ bio: value }];

    const fun =
      props.place == "name" ? namesAdd(values) : biographiesAdd(values);

    fun.then(({ err, res }) => {
      discloser.onClose();

      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في الارسال",
        });

      if (props.place == "name") return state.changeState({ name: res?.data });
      if (props.place == "bio") return state.changeState({ bio: res?.data });
    });
  };

  const removeData = () => {
    // console.log("selcted");
    // console.log(selcted);

    const fun =
      props.place == "name" ? namesDelete(selcted) : biographiesDelete(selcted);

    fun.then(({ err, res }) => {
      removeDiscloser.onClose();
      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في الارسال",
        });

      // console.log(selcted);
      // console.log(res?.data);

      if (props.place == "name") return state.changeState({ name: res?.data });
      if (props.place == "bio") return state.changeState({ bio: res?.data });
    });
  };

  return (
    <Stack
      w="full"
      p="20px"
      pt="0px"
      alignItems="center"
      justifyContent={{ start: "space-evenly", md: "space-between" }}
      flexDir="row"
      flexWrap="wrap"
    >
      <Models
        content={view({
          e: props.place == "name" ? listsAddTitle : listsAddBio,
          discloser: discloser,
          fun: addData,
        })}
        {...discloser}
      />
      <Models
        content={view({
          e: listsRemove,
          discloser: removeDiscloser,
          fun: removeData,
        })}
        {...removeDiscloser}
      />
      <Checkbox
        bg="blue.800"
        color="blue.200"
        spacing="10px"
        p="10px"
        rounded="10px"
        onChange={({ target: { checked } }) => {
          props.selectAll(checked);
        }}
      >
        {props.status ? "تحديد الكل" : "عدم تحديد الكل"}
      </Checkbox>
      <HStack spacing="10px">
        <Text
          cursor="pointer"
          p="10px"
          rounded="10px"
          bg="red.800"
          color="red.100"
          onClick={removeDiscloser.onOpen}
        >
          حذف
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          rounded="10px"
          bg="green.900"
          color="green.100"
          onClick={discloser.onOpen}
        >
          اضف
        </Text>
      </HStack>
    </Stack>
  );
};
