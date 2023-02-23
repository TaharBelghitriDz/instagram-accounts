import {
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ComponentType, useState } from "react";
import { proxiesDelete } from "../../../utils/api/proxies.api";
import state from "../../../utils/state";
import Models from "../../account/models";
import { ActionIcon } from "../../custom.button.component";
import { Settings } from "../../icons";
import newProxiesModel from "../models/new.proxies.model";
import ProxiesSettingsModel from "../models/proxies.settings.model";

export default (props: { select: string[] }) => {
  const discloser = useDisclosure();
  const toast = useToast();

  const [content, setContent] = useState<JSX.Element>(
    <ProxiesSettingsModel {...discloser} />
  );

  const view = (Comp: ComponentType<any>) => {
    setContent(() => <Comp {...discloser} />);
    discloser.onOpen();
  };

  const fun = () => {
    proxiesDelete(props.select).then(({ err, res }) => {
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
        <Input
          border="none"
          rounded="15px"
          p="20px"
          py="22px"
          bg="black.0"
          placeholder="بحث"
        />
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
