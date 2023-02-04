import {
  Button,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Models from "../../account.component/models";
import AccountsGroupSettings from "../../account.component/models/accounts.group.settings";
import { ActionIcon, CustomAddIcon } from "../../custom.button.component";
import { Refresh, Settings } from "../../icons";

export default () => {
  const discloser = useDisclosure();

  return (
    <Stack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ start: "column", md: "row" }}
    >
      <Models
        {...discloser}
        content={<AccountsGroupSettings {...discloser} />}
      />
      <Flex alignItems="center">
        <ActionIcon text="جديد" onClick={() => console.log("jadid")} />
        <Input
          border="none"
          rounded="15px"
          p="20px"
          py="22px"
          bg="black.0"
          placeholder="بحث"
        />
      </Flex>

      <HStack
        w="40px"
        h="40px"
        rounded="10px"
        spacing="0"
        justifyContent="center"
        alignContent="center"
        bg="red.900"
        color="red.100"
        cursor="pointer"
        onClick={() => discloser.onOpen()}
      >
        <Settings w="24px" h="24px" bg="" />
      </HStack>
    </Stack>
  );
};
