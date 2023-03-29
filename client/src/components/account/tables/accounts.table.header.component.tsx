import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account, accountGet } from "../../../utils/api/accounts.api";
import { groupGet, GroupInutType } from "../../../utils/api/groups.api";
import state from "../../../utils/state";
import { ActionIcon, CustomAddIcon } from "../../custom.button.component";
import { Historiq, Refresh, Settings, UserIcon } from "../../icons";
import Models from "../models";
import AccountsAddGroup from "../models/accounts.add.group";
import AccountsGroupSettings from "../models/accounts.group.settings";
import RemoveAccounts from "../models/remove.accounts";

export default () => {
  const discloser = useDisclosure();
  const AddDiscloser = useDisclosure();
  const removeDiscloser = useDisclosure();
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const groups: GroupInutType[] = state.useStore((e) => e.groups);
  const selectedAccountsState = state.useStore((e) => e.selectedAccounts);

  const selectedView = state.useStore((e) => e.accountsView);

  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    accountGet(selectedGroup).then(({ res, err }) => {
      if (err) return;

      setAccounts(() =>
        [...res?.data].map((e) => {
          if (typeof e.is_active == "string") return e;

          if (!e.is_active) e.is_active = "غير مفعل​";
          else e.is_active = "مفعل​";
          return e;
        })
      );
    });
  }, [selectedGroup]);

  const refresh = () =>
    groupGet.then(
      ({ res }) => res && state.changeState({ groups: [...res?.data] })
    );

  const selectAll = () => {
    if (selectedView.length > 0) {
      const selected = accounts
        .filter((e) => {
          if (
            selectedView.includes(e.is_active) ||
            selectedView.includes(e.status)
          )
            return e;
        })
        .map((e) => e.id);

      if (selected.length == selectedAccountsState.length)
        return state.changeState({ selectedAccounts: [] });

      state.changeState({ selectedAccounts: selected });
    } else {
      const allIds = accounts.map((e) => e.id);

      if (allIds.length == selectedAccountsState.length)
        return state.changeState({ selectedAccounts: [] });

      state.changeState({ selectedAccounts: allIds });
    }
  };

  return (
    <Stack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ start: "column", md: "row" }}
    >
      <Models
        content={<RemoveAccounts {...removeDiscloser} />}
        {...removeDiscloser}
      />
      <Models
        {...AddDiscloser}
        content={<AccountsAddGroup {...AddDiscloser} />}
      />
      {/* <Models
        {...removeDiscloser}
        content={<RemoveGroup {...removeDiscloser} />}
      /> */}
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
            ​
            {selectedGroup == ""
              ? "المجموعات​"
              : groups.filter((e: any) => e.id == selectedGroup && e)[0]?.name}
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
      {selectedGroup && (
        <HStack spacing="10px">
          <HStack
            h="40px"
            rounded="10px"
            spacing="0"
            justifyContent="center"
            alignContent="center"
            bg="red.900"
            color="red.100"
            cursor="pointer"
            onClick={selectAll}
            px="10px"
          >
            <Text>تحديد الكل</Text>
            <UserIcon w="24px" h="24px" bg="" />
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
            onClick={refresh}
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
      )}
    </Stack>
  );
};
