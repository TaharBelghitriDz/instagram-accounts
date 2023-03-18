import { CloseButton, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Add } from "../../icons";

import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";

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

const AccountsGroupInputs = (props: { values: string; setValue: any }) => {
  return (
    <Fragment>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>عدد الحسابات في كل بروكسي</Text>
        <AccountsSettingsInput
          type="number"
          w="100%"
          value={props.values}
          onChange={({ target: { value } }) => props.setValue(() => value)}
        />
      </VStack>
    </Fragment>
  );
};

export default (props: { onClose: () => void }) => {
  const [values, setValue] = useState(localStorage.getItem("proxy") || "");

  const fun = () => {
    localStorage.setItem("proxy", values);
  };

  return (
    <VStack w="full" spacing="20px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">اعدادات البروكسيات </Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <AccountsGroupInputs values={values} setValue={setValue} />
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
