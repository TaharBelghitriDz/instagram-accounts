import { CloseButton, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import { groupDelete } from "../../../utils/api/groups.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const groups = state.useStore((e) => e.groups);

  const toast = useToast();

  const fun = () => {
    groupDelete(selectedGroup).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في العملية",
        });

      state.changeState({ selectedGroup: "" });
      state.changeState({ groups: res?.data });

      toast({
        status: "success",
        isClosable: true,
        title: "تمت العملية",
      });
      props.onClose();
    });
  };

  return (
    <VStack w="full" spacing="50px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px"> حذف المجموعة </Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <Text fontSize="4xl">
        {groups.filter((e: any) => e.id == selectedGroup && e)[0].name}
      </Text>
      <HStack w="full" justifyContent="space-between">
        <HStack
          spacing="20px"
          h="50px"
          bg="green.900"
          color="green.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
          onClick={fun}
        >
          <Text>تاكيد</Text>
          <Add h="24px" w="24px" />
        </HStack>
        <HStack
          spacing="20px"
          h="50px"
          bg="red.900"
          color="red.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
          onClick={() => props.onClose()}
        >
          <Text>الغاء</Text>
          <CloseButton h="24px" w="24px" />
        </HStack>
      </HStack>
    </VStack>
  );
};
