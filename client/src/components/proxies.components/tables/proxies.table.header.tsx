import {
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ComponentType, useState } from "react";
import Models from "../../account.component/models";
import { ActionIcon } from "../../custom.button.component";
import { Settings } from "../../icons";
import newProxiesModel from "../models/new.proxies.model";
import proxiesSettingsModel from "../models/proxies.settings.model";
import ProxiesSettingsModel from "../models/proxies.settings.model";

export default () => {
  const discloser = useDisclosure();

  const [content, setContent] = useState<JSX.Element>(
    <ProxiesSettingsModel {...discloser} />
  );

  const view = (Comp: ComponentType<any>) => {
    setContent(() => <Comp {...discloser} />);
    discloser.onOpen();
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
          onClick={() => view(proxiesSettingsModel)}
        >
          <Settings w="24px" h="24px" bg="" />
        </HStack>
      </HStack>
    </Stack>
  );
};
