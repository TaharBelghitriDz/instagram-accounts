import {
  CloseButton,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { Add } from "../../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";
import { groupCreate, groupGet } from "../../../utils/api/groups.api";
import state from "../../../utils/state";

const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

export interface EditGroupInterface {
  name: string;

  likes_from: number;
  likes_to: number;

  comments_from: number;
  comments_to: number;

  time_between_likes_from: number;
  time_between_likes_to: number;

  time_between_comments_from: number;
  time_between_comments_to: number;

  emojis_number_from: number;
  emojis_number_to: number;
}

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};

export const AccountsGroupInputs = (props: {
  values: EditGroupInterface;
  setVelaues: React.Dispatch<React.SetStateAction<EditGroupInterface>>;
  isEdite?: boolean;
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
            value={props.values.likes_from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                likes_from: parseInt(value),
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.likes_to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                likes_to: parseInt(value),
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
            value={props.values.time_between_likes_from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time_between_likes_from: parseInt(value),
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.time_between_likes_to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time_between_likes_to: parseInt(value),
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
            value={props.values.comments_from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments_from: parseInt(value),
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.comments_to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                comments_to: parseInt(value),
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
            value={props.values.time_between_comments_from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time_between_comments_from: parseInt(value),
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.time_between_comments_to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                time_between_comments_to: parseInt(value),
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
            value={props.values.emojis_number_from}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                emojis_number_from: parseInt(value),
              }))
            }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={props.values.emojis_number_to}
            onChange={({ target: { value } }) =>
              props.setVelaues((e) => ({
                ...e,
                emojis_number_to: parseInt(value),
              }))
            }
          />
        </HStack>
      </VStack>
      <VStack {...AccountsGroupElmntProps}>
        <Text>النشر كل</Text>
        <HStack w="90%" justifyContent="space-between">
          <Text>من</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            placeholder="0"
            // value={props.values.emojis_number_from}
            // onChange={({ target: { value } }) =>
            //   props.setVelaues((e) => ({
            //     ...e,
            //     emojis_number_from: parseInt(value),
            //   }))
            // }
          />
          <Text>الى</Text>
          <AccountsSettingsInput
            w="30%"
            type="number"
            placeholder="0"
            // value={props.values.emojis_number_to}
            // onChange={({ target: { value } }) =>
            //   props.setVelaues((e) => ({
            //     ...e,
            //     emojis_number_to: parseInt(value),
            //   }))
            // }
          />
        </HStack>
      </VStack>
    </Fragment>
  );
};

export default (props: { onClose: () => void }) => {
  const groups = state.useStore((e) => e.groups);
  const toast = useToast();
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

  const sendFun = () =>
    groupCreate(values).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          isClosable: true,
          title: "خطا في الارسال",
        });
      const newGroup = [...groups, res?.data];

      // groupGet.then(({ err, res }) => {
      //   if (err) return;
      state.changeState({ groups: newGroup });
      // // });

      props.onClose();
      return toast({
        status: "success",
        isClosable: true,
        title: "تمت العملية",
      });
    });

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
