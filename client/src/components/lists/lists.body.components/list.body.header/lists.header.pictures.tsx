import { HStack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { ComponentType, useEffect, useState } from "react";
import { profilePicDelete } from "../../../../utils/api/lists/profile.pics.api";
import state from "../../../../utils/state";
import Models from "../../models";
import listsAddPicture from "../../models/lists.add.picture";

export default () => {
  const discloser = useDisclosure();
  const pics = state.useStore((e) => e.profile_pics).length;
  const selctedPics = state.useStore((e) => e.selectedPics);
  const toast = useToast();

  useEffect(() => {
    toast({ status: "loading", duration: 1000, title: "جاري التحميل" });
  }, []);

  const view = (args: {
    e: ComponentType<any>;
    discloser: typeof discloser;
  }) => <args.e {...args.discloser} />;
  console.log(selctedPics);

  const remove = () => {
    profilePicDelete(selctedPics).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في التحميل",
        });

      console.log(res);
      state.changeState({ profile_pics: res?.data });
    });
  };

  return (
    <HStack
      spacing="0"
      justifyContent="space-between"
      w="full"
      pb="20px"
      flexWrap="wrap"
    >
      <Models
        content={view({
          e: listsAddPicture,
          discloser,
        })}
        {...discloser}
      />
      <Text> عدد الصور : {pics}</Text>
      <HStack spacing="10px">
        <Text
          p="10px"
          cursor="pointer"
          rounded="20px"
          color="red.200"
          bg="red.800"
          onClick={remove}
        >
          حذف الكل
        </Text>
        <Text
          p="10px"
          cursor="pointer"
          rounded="20px"
          color="green.100"
          bg="green.900"
          onClick={discloser.onOpen}
        >
          رفع صور
        </Text>
      </HStack>
    </HStack>
  );
};
