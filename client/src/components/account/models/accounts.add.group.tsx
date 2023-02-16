import { CloseButton, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { Add } from "../../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";

const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

export interface EditGroupInterface {
  name: string;
  likes: {
    from: number;
    to: number;
  };
  time: {
    from: number;
    to: number;
  };
  comments: {
    from: number;
    to: number;
  };
  comments_time: {
    from: number;
    to: number;
  };
  emojis: {
    from: number;
    to: number;
  };
}

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};

const AccountsGroupInputs = (props: {
  values: EditGroupInterface;
  setVelaues: React.Dispatch<React.SetStateAction<EditGroupInterface>>;
}) => {
  return (
    <Fragment>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>اسم المجموعة</Text>
        <AccountsSettingsInput
          placeholder=" تعديل اسم المجموعة"
          w="100%"
          value={props.values.name}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, name: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text> عدد الاعجابات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.likes.from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                likes: { from: parseInt(value), to: props.values.likes.to },
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.likes.to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                likes: { to: parseInt(value), from: props.values.likes.from },
              }))
            }
          />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>الفاصل الزمني</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.time.from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time: { from: parseInt(value), to: props.values.time.to },
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.time.to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time: { to: parseInt(value), from: props.values.time.from },
              }))
            }
          />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>عدد التعليقات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.comments.from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments: {
                  from: parseInt(value),
                  to: props.values.comments.to,
                },
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.comments.to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments: {
                  to: parseInt(value),
                  from: props.values.comments.from,
                },
              }))
            }
          />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>الفاصل الزمني للتعليقات</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.comments_time.from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments_time: {
                  from: parseInt(value),
                  to: props.values.comments_time.to,
                },
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.comments_time.to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments_time: {
                  to: parseInt(value),
                  from: props.values.comments_time.from,
                },
              }))
            }
          />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>عدد الاموجي لكل تعليق</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.emojis.from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                emojis: {
                  from: parseInt(value),
                  to: props.values.emojis.to,
                },
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.emojis.to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                emojis: {
                  to: parseInt(value),
                  from: props.values.emojis.from,
                },
              }))
            }
          />
        </HStack>
      </VStack>
    </Fragment>
  );
};

export default (props: { onClose: () => void }) => {
  const [values, setValues] = useState({
    name: "_",
    likes: { from: 0, to: 0 },
    time: { from: 0, to: 0 },
    comments: { from: 0, to: 0 },
    comments_time: { from: 0, to: 0 },
    emojis: { from: 0, to: 0 },
  });

  const sendFun = () => {};

  return (
    <VStack w="full" spacing="20px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">اضافة المجموعة </Text>
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
          onClick={sendFun}
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
