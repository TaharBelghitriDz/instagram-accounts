import {
  CloseButton,
  HStack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { botAddBioLink } from "../../../utils/api/bot.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const toast = useToast();
  const [value, setValue] = useState("");
  const selectedGroup = state.useStore((e) => e.selectedGroup);

  const fun = () => {
    botAddBioLink({ data: value, id: selectedGroup }).then(({ err, res }) => {
      console.log(err);

      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في الارسال",
        });
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
        <Text fontSize="30px">اضافة رابط للحسابات​</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <Textarea
        bg="whiteAlpha.100"
        border=""
        rounded="10px"
        rows={5}
        placeholder="لصق النص هنا"
        onChange={({ target: { value } }) => setValue(() => value)}
      />
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
