import {
  Box,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ComponentType, useState } from "react";
import { axiosFun, endpoint } from "../../../utils/api/costant";
import {
  proxiesCheck,
  proxiesDelete,
  proxiesGet,
} from "../../../utils/api/proxies.api";
import state from "../../../utils/state";
import Models from "../../account/models";
import { ActionIcon } from "../../custom.button.component";
import { Refresh, Settings } from "../../icons";
import newProxiesModel from "../models/new.proxies.model";
import ProxiesSettingsModel from "../models/proxies.settings.model";

export default (props: { select: string[] }) => {
  const discloser = useDisclosure();
  const toast = useToast();
  const proxiesState = state.useStore((e) => e.proxies);
  const selectedProxies = state.useStore((e) => e.selectedProxies);

  const [content, setContent] = useState<JSX.Element>(
    <ProxiesSettingsModel {...discloser} />
  );

  const view = (Comp: ComponentType<any>) => {
    setContent(() => <Comp {...discloser} />);
    discloser.onOpen();
  };

  const fun = () => {
    if (selectedProxies.length == 0)
      return toast({
        status: "error",
        isClosable: true,
        title: "حدد بروكسيات اولا",
      });

    proxiesDelete(selectedProxies).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          title: "خطا في الاتصال",
          isClosable: true,
        });

      state.changeState({ proxies: res?.data });
      return toast({
        status: "success",
        title: "تم العملية",
        isClosable: true,
      });
    });
  };

  const check = () => {
    if (selectedProxies.length == 0)
      return toast({
        status: "error",
        isClosable: true,
        title: "حدد بروكسيات اولا",
      });

    proxiesCheck(selectedProxies).then(({ res, err }) => {
      if (err) return;
      return toast({
        status: "loading",
        title: "بدا الفحص ",
        isClosable: true,
      });
    });
  };

  const refresh = async () => {
    toast({
      status: "loading",
      title: " تحميل ",
      isClosable: true,
      duration: 2000,
    });
    await axiosFun({
      method: "GET",
      url: endpoint + "/proxies",
      headers: { Authorization: localStorage.getItem("token") },
    }).then(async ({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          title: "خطا في الاتصال",
          isClosable: true,
        });

      await state.changeState({ proxies: res?.data });
      toast({
        status: "success",
        title: "تم تحميل",
        isClosable: true,
        duration: 2000,
      });
    });
  };

  return (
    <Stack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ start: "column", md: "row" }}
    >
      <Models {...discloser} content={content} />
      <Flex alignItems="center">
        <ActionIcon text="جديد" onClick={() => view(newProxiesModel)} />
        {/* <Input
          border="none"
          rounded="15px"
          p="20px"
          py="22px"
          bg="black.0"
          placeholder="بحث"
        /> */}
      </Flex>
      <HStack spacing="10px">
        <Text
          p="7px"
          rounded="10px"
          px="20px"
          bg="red.800"
          color="red.200"
          verticalAlign="center"
          textAlign="center"
          cursor="pointer"
          onClick={fun}
        >
          حذف الكل
        </Text>
        <Text
          p="7px"
          rounded="10px"
          px="20px"
          bg="red.800"
          color="red.200"
          verticalAlign="center"
          textAlign="center"
          cursor="pointer"
          onClick={check}
        >
          فحص البروكسيات
        </Text>
        <HStack
          w="40px"
          h="40px"
          rounded="10px"
          spacing="0"
          justifyContent="center"
          alignContent="center"
          bg="blue.800"
          color="blue.200"
          cursor="pointer"
          // onClick={refresh}
        >
          <Refresh onClick={refresh} w="24px" h="24px" bg="" />
        </HStack>
        <HStack
          w="40px"
          h="40px"
          rounded="10px"
          spacing="0"
          justifyContent="center"
          alignContent="center"
          bg="purple.800"
          color="purple.200"
          cursor="pointer"
          onClick={() => view(ProxiesSettingsModel)}
        >
          <Settings w="24px" h="24px" bg="" />
        </HStack>
      </HStack>
    </Stack>
  );
};
