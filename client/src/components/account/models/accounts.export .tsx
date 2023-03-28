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
import { axiosFun, endpoint } from "../../../utils/api/costant";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const toast = useToast();
  const selectedGroup = state.useStore((e) => e.selectedGroup);

  const selectedAccounts = state.useStore((e) => e.selectedAccounts);

  const fun = () => {
    if (selectedAccounts.length == 0)
      return toast({
        status: "error",
        isClosable: true,
        title: "حدد الحسابات اولا",
      });

    axiosFun({
      method: "POST",
      url: endpoint + "/accounts/file",
      headers: { authorization: localStorage.getItem("token") },
      data: selectedAccounts,
    }).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في الارسال",
        });

      const fileContent = `${res?.data}`;
      const blob = new Blob([fileContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `الحسابات ${Date.now()}.txt`);
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
    });
  };

  return (
    <VStack w="full" spacing="50px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px"> تصدير للحسابات​</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>

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
