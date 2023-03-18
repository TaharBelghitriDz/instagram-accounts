import {
  Checkbox,
  CloseButton,
  Divider,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  accountGet,
  accountsActivate,
  accountsDesactivate,
} from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const groups = state.useStore((e) => e.groups);
  const accounts = state.useStore((e) => e.accounts);
  const toast = useToast();
  const [value, setValue] = useState(true);

  const groupName = groups.filter((e: any) => {
    if (e.id == selectedGroup) return e;
  })[0];

  const fun = () => {
    accountGet(selectedGroup).then(({ err, res }) => {
      if (err)
        return (
          props.onClose(), toast({ status: "error", title: "خطا في الاتصال" })
        );

      const accountsId = res?.data.map((e: any) => e.id);

      const resFun = ({ res, err }: any) => {
        if (err)
          return (
            props.onClose(), toast({ status: "error", title: "خطا في الاتصال" })
          );
        props.onClose();
        state.changeState({ refreshAccounts: Date.now() });
      };

      if (value) accountsActivate(accountsId).then(resFun);
      else accountsDesactivate(accountsId).then(resFun);
    });
  };

  return (
    <VStack w="full" spacing="50px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px"> تغيير حالة الحسابات</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <VStack spacing={10} bg="blue.0" p={10} textAlign="center" rounded="20px">
        <Text> الحسابات في المجموعة </Text>
        <Text>{groupName.name} </Text>
      </VStack>

      <Checkbox
        colorScheme="green.500"
        fontSize="30px"
        isChecked={value}
        onChange={() => {
          setValue(() => true);
        }}
      >
        مفعل​
      </Checkbox>
      <Checkbox
        colorScheme="green.500"
        fontSize="30px"
        isChecked={!value}
        onChange={() => {
          setValue(() => false);
        }}
      >
        غير مفعل​
      </Checkbox>

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
