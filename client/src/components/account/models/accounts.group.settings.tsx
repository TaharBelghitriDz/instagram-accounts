import {
  CloseButton,
  ComponentWithAs,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
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

const AccountsGroupInputs = () => {
  return (
    <Fragment>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>اسم المجموعة</Text>
        <AccountsSettingsInput placeholder=" تعديل اسم المجموعة" w="100%" />
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text> عدد الاعجابات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput w="30%" type="number" />
          <Text>الى</Text>
          <AccountsSettingsInput w="30%" type="number" />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>الفاصل الزمني</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput w="30%" type="number" />
          <Text>الى</Text>
          <AccountsSettingsInput w="30%" type="number" />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>عدد التعليقات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput w="30%" type="number" />
          <Text>الى</Text>
          <AccountsSettingsInput w="30%" type="number" />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>الفاصل الزمني للتعليقات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput w="30%" type="number" />
          <Text>الى</Text>
          <AccountsSettingsInput w="30%" type="number" />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>عدد الاموجي لكل تعليق</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput w="30%" type="number" />
          <Text>الى</Text>
          <AccountsSettingsInput w="30%" type="number" />
        </HStack>
      </VStack>
    </Fragment>
  );
};

export default (props: { onClose: () => void }) => {
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
      <AccountsGroupInputs />
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
