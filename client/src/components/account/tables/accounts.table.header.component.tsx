import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { GroupInutType } from "../../../utils/api/groups.api";
import state from "../../../utils/state";
import { ActionIcon, CustomAddIcon } from "../../custom.button.component";
import { Historiq, Refresh, Settings } from "../../icons";
import Models from "../models";
import AccountsAddGroup from "../models/accounts.add.group";
import AccountsGroupSettings from "../models/accounts.group.settings";
import RemoveGroup from "../models/remove.group";

export default () => {
  const discloser = useDisclosure();
  const AddDiscloser = useDisclosure();
  const removeDiscloser = useDisclosure();
  const groups: GroupInutType[] = state.useStore((e) => e.groups);

  return (
    <Stack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ start: "column", md: "row" }}
    >
      <Models
        {...AddDiscloser}
        content={<AccountsAddGroup {...AddDiscloser} />}
      />
      <Models
        {...removeDiscloser}
        content={<RemoveGroup {...removeDiscloser} />}
      />
      <Models
        {...discloser}
        content={<AccountsGroupSettings {...discloser} />}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            variant="outline"
            as={Button}
            rightIcon={
              <CustomAddIcon color="blue.0" bg="blue.100" children="-" />
            }
            rounded="20px"
            _hover={{}}
            border="none"
            bg="blue.900"
            color="blue.100"
            p="10px"
            py="25px"
            _active={{ backgroundColor: "blue.900" }}
          >
            المجموعات​
          </MenuButton>

          <MenuList
            bg="rgb(20,20,20,50%)"
            backdropFilter="blur(10px)"
            p="20px"
            border="none"
            rounded="20px"
          >
            {groups.map((e, i) => (
              <MenuItem
                key={i * 23}
                bg="transparent"
                _hover={{ bg: "blackAlpha.500" }}
                rounded="10px"
                p="10px"
                px="20px"
                onClick={() => state.changeState({ selectedGroup: e.id })}
              >
                {e.name}​
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <ActionIcon text="جديد" onClick={() => AddDiscloser.onOpen()} />
      </Flex>
      <HStack spacing="10px">
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
          onClick={removeDiscloser.onOpen}
        >
          <Historiq w="24px" h="24px" bg="" />
        </HStack>
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
        >
          <Refresh w="24px" h="24px" bg="" />
        </HStack>
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
      </HStack>
    </Stack>
  );
};
