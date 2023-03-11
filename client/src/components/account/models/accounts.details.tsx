import {
  CloseButton,
  HStack,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../../login/login.inputs.component";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Add } from "../../icons";
import { accoutGetById, accoutUpdate } from "../../../utils/api/accounts.api";
import { ProgressLoadingCompnent } from "../../loading";
import state from "../../../utils/state";

const Account = {
  username: "",
  email: "",
  ig_password: "",
  email_password: "",
  profile_pic: "",
  note: "",
  proxy: "",
  id: 0,
  status: "",
  is_active: true,
  created_date: "",
};

export default (props: { onClose: () => void; id: number }) => {
  const [isLoading, setLoading] = useState(true);
  const toast = useToast();

  const accountsState = state.useStore((e) => e.accounts);

  useEffect(() => {
    console.log("accountsState");
    console.log(accountsState);
    state.changeState({
      accounts: [
        {
          created_date: "2023-02-24T21:31:52.894563",
          email: "email",
          email_password: "emailPassword",
          id: 1,
          ig_password: "password",
          is_active: null,
          note: null,
          proxy: null,
          status: null,
          username: "tahar à1 updat1",
        },
      ],
    });
  }, []);

  const [values, setValues] = useState({
    username: "",
    email: "",
    ig_password: "",
    email_password: "",
    profile_pic: "",
    note: "",
    proxy: "",
    id: 0,
    status: "",
    is_active: true,
    created_date: "",
  });

  const fun = () => {
    accoutUpdate({ id: props.id, data: values }).then(({ err, res }) => {
      if (err)
        return toast({
          title: "خطا في العملية",
          status: "error",
          isClosable: true,
        });

      toast({
        title: "تم العملية",
        status: "success",
        isClosable: true,
      });
      // console.log(accountsState);

      // console.log(
      //   accountsState.map((e: any) => (e.id == res?.data.id ? res?.data : e))
      // );

      // state.changeState({
      //   accounts: [
      //     ...accountsState.map((e: any) =>
      //       e.id == res?.data.id ? res?.data : e
      //     ),
      //   ],
      // });
      props.onClose();
    });
  };

  useState(() => {
    setLoading(() => true);
    accoutGetById(props.id).then(({ err, res }) => {
      setValues(() => res?.data);
      setLoading(() => false);
    });
  });

  if (isLoading) return <ProgressLoadingCompnent />;

  return (
    <VStack w="full" spacing="20px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">اعدادات الحساب </Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <AccountsInputs values={values} setVelaues={setValues} />
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

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};
const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

function AccountsInputs(props: {
  values: typeof Account;
  setVelaues: React.Dispatch<React.SetStateAction<typeof Account>>;
}) {
  return (
    <VStack w="full">
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>اسم المستخدم</Text>
        <AccountsSettingsInput
          w="100%"
          value={props.values.username}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, username: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>كلمة المرور </Text>
        <AccountsSettingsInput
          w="100%"
          value={props.values.ig_password}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, ig_password: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>الايمايل </Text>
        <AccountsSettingsInput
          w="100%"
          value={props.values.email}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, email: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text>كلمة مرور الايمايل </Text>
        <AccountsSettingsInput
          w="100%"
          value={props.values.email_password}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, email_password: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text> بروكسي </Text>
        <AccountsSettingsInput
          w="100%"
          value={props.values.proxy}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, proxy: value }))
          }
        />
      </VStack>
      <VStack {...AccountsGroupElmntProps} w="full">
        <Text> الملاحضة </Text>
        <Textarea
          bg="whiteAlpha.100"
          border=""
          rounded="10px"
          rows={5}
          value={props.values.note}
          onChange={({ target: { value } }) =>
            props.setVelaues((e) => ({ ...e, note: value }))
          }
        />
      </VStack>
    </VStack>
  );
}
