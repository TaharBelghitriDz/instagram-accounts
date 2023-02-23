import { CloseButton, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Add } from "../../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";
import { AccountsGroupInputs, EditGroupInterface } from "./accounts.add.group";

const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};

export default (props: { onClose: () => void }) => {
  const [values, setValues] = useState({
    name: "",

    likes_from: 0,
    likes_to: 0,

    comments_from: 0,
    comments_to: 0,

    time_between_likes_from: 0,
    time_between_likes_to: 0,

    time_between_comments_from: 0,
    time_between_comments_to: 0,

    emojis_number_from: 0,
    emojis_number_to: 0,
  });

  const sendFun = () => {
    console.log("here ");
  };

  return (
    <VStack w="full" spacing="20px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">اعدادات المجموعة </Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <AccountsGroupInputs values={values} setVelaues={setValues} />

      <HStack w="full" justifyContent="space-between">
        <HStack
          spacing="20px"
          h="50px"
          bg="green.900"
          color="green.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
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
