import { CloseButton, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import { accountsDelete } from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const selectedCheckBox = state.useStore((e) => e.selectedAccounts);
  const selectedGroup = state.useStore((e) => e.selectedGroup);

  const toast = useToast();

  const fun = () => {
    if (selectedCheckBox.length < 1)
      return toast({
        status: "error",
        isClosable: true,
        title: "يرجى اختيار حسابات للحدف",
      });

    accountsDelete({ id: selectedGroup, data: selectedCheckBox }).then(
      ({ err, res }) => {
        if (err)
          return toast({
            status: "error",
            isClosable: true,
            title: "يرجى اختيار حسابات للحدف",
          });
        props.onClose();

        state.changeState({ refreshAccounts: Date.now() });

        return toast({
          status: "success",
          isClosable: true,
          title: "تم الحدف",
        });
      }
    );
  };

  return (
    <VStack w="full" spacing="50px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px"> حذف الحسابات </Text>
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
