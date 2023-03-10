import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CustomAddIcon } from "../custom.button.component";

export const Titles = (props: {
  name: string;
  value?: string;
  names: { name: string; id: number }[];
  fun: (str: string) => void;
}) => {
  return (
    <Flex w="full">
      <Menu>
        <MenuButton
          variant="outline"
          as={Button}
          rightIcon={
            <CustomAddIcon color="white" bg="whiteAlpha.100" children="-" />
          }
          rounded="20px"
          _hover={{}}
          border="none"
          bg="whiteAlpha.100"
          p="10px"
          py="25px"
          _active={{ backgroundColor: "whiteAlpha.200" }}
        >
          {props.value || props.name}
        </MenuButton>

        <MenuList
          bg="rgb(0,0,0,50%)"
          backdropFilter="blur(30px)"
          p="20px"
          border="none"
          rounded="20px"
        >
          {props.names.map((e: any, i: any) => (
            <MenuItem
              key={i * 60}
              _hover={{ bg: "blackAlpha.500" }}
              rounded="10px"
              p="10px"
              px="20px"
              bg="transparent"
              onClick={() => props.fun(e.name || e.title)}
            >
              {e.name || e.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
