import {
  CloseButton,
  HStack,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Add } from "../../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";
import { AccountsGroupInputs, EditGroupInterface } from "./accounts.add.group";
import {
  Account,
  accountGet,
  accountsGet,
} from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import { Post } from "../../posts";
import { groupGet, groupsUpdate } from "../../../utils/api/groups.api";
import Models from "../../lists/models";
import removeGroup from "./remove.group";
import RemoveGroup from "./remove.group";

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
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const groups = state.useStore((e) => e.groups);
  const discloser = useDisclosure();

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

    time_between_posting_from: 0,
    time_between_posting_to: 0,
  });

  useState(() => {
    const group = groups.filter((e: any) => e.id == selectedGroup && e)[0];

    setValues(() => group);
  });

  const fun = () => {
    groupsUpdate({ id: selectedGroup, data: values }).then(({ err, res }) => {
      if (err) return;

      const newGroup = groups.map((e: any) => {
        if (e.id != selectedGroup) return e;
        return res?.data;
      });

      state.changeState({ groups: newGroup });
      props.onClose();
    });
  };

  const Remove = <RemoveGroup {...discloser} />;

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

      <Models {...discloser} content={Remove} />

      <Text
        w="full"
        rounded="20px"
        textAlign="center"
        style={{ margin: "20px 0 20px 0" }}
        py="10px"
        bg="red.600"
        cursor="pointer"
        onClick={() => {
          discloser.onOpen();
          // props.onClose();
        }}
      >
        حذف المجموعة
      </Text>

      <AccountsGroupInputs isEdite values={values} setVelaues={setValues} />

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
