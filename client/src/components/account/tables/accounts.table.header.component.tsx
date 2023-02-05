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
import { ActionIcon, CustomAddIcon } from "../../custom.button.component";
import { Refresh, Settings } from "../../icons";
import Models from "../models";
import AccountsGroupSettings from "../models/accounts.group.settings";

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
            <MenuItem
              bg="transparent"
              _hover={{ bg: "blackAlpha.500" }}
              rounded="10px"
              p="10px"
              px="20px"
            >
              1 المجموعات​
            </MenuItem>
            <MenuItem
              bg="transparent"
              _hover={{ bg: "blackAlpha.500" }}
              rounded="10px"
              p="10px"
              px="20px"
            >
              1 المجموعات​
            </MenuItem>
            <MenuItem
              bg="transparent"
              _hover={{ bg: "blackAlpha.500" }}
              rounded="10px"
              p="10px"
              px="20px"
            >
              1 المجموعات​
            </MenuItem>
          </MenuList>
        </Menu>
        <ActionIcon text="جديد" onClick={() => console.log("jadid")} />
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
