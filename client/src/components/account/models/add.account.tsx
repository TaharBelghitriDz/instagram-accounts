import {
  CloseButton,
  HStack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { accountAddToGroup } from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const selectedGroup = state.useStore((e) => e.selectedGroup);

  const Fun = () => {
    const accountsArray = value
      .split("\n")
      .filter((e) => e != "" && e)
      .map((e) => e.replace(/\s/g, "").split(":"));

    const data = accountsArray.map((e) => ({
      username: e[0],
      ig_password: e[2],
      email: e[1],
      email_password: e[3],
    }));

    accountAddToGroup({ id: selectedGroup, data }).then(({ err, res }) => {
      if (err)
        return (
          props.onClose(),
          toast({ status: "error", title: "خطا في تسميت الحسابات" })
        );

      props.onClose();
      state.changeState({ refreshAccounts: Date.now() });
      toast({ status: "success", title: "done !" });
    });
  };

  return (
    <VStack w="full" spacing="30px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">إضافة حسابات​</Text>
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
        value={value}
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
          onClick={Fun}
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
