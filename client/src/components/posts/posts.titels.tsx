import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useMenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { CustomAddIcon } from "../custom.button.component";

export const Titles = (props: {
  name: string;
  value?: string;
  names: { name: string; title: string; id: number }[];
  fun: (str: string) => void;
}) => {
  const [items, setItems] = useState<typeof props.names>(props.names);
  const [values, setValue] = useState("");

  return (
    <Flex w="full">
      <Menu closeOnSelect={false}>
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
          bg="rgb(10,10,10,100%)"
          backdropFilter="blur(50px)"
          p="20px"
          border="none"
          rounded="20px"
          w="100%"
          maxH="400px"
          overflow="auto"
          pt="100px"
          onKeyDown={(e) => {
            const navigationKeys = ["ArrowUp", "ArrowDown", "Escape"];
            if (!navigationKeys.includes(e.key)) {
              e.stopPropagation();
            }
          }}
        >
          <MenuItem
            bg="transparent"
            // onClick={(e) => e.stopPropagation()}
            // onKeyDown={(e) => {
            //   e.stopPropagation();
            // }}
          >
            <Input
              w="full"
              bg="whiteAlpha.100"
              onClick={(e) => e.stopPropagation()}
              border=""
              rounded="10px"
              placeholder="بحث عن عنوان"
              value={values}
              onChange={({ target: { value } }) => {
                setValue(() => value);

                setItems(() => {
                  return [
                    ...props.names.filter((s) => {
                      if (s.title && s.title.split(value).length > 1) return s;
                      if (s.name && s.name.split(value).length > 1) return s;
                    }),
                  ];
                });
              }}
            />
          </MenuItem>

          {items.map((e, i: any) => (
            <MenuItemOption
              key={i * 60}
              onMouseEnter={(e) => e.stopPropagation()}
              _hover={{ bg: "whiteAlpha.200" }}
              rounded="10px"
              p="10px"
              px="20px"
              bg="transparent"
              onClick={() => props.fun(e.name || e.title)}
            >
              {e.name || e.title}
            </MenuItemOption>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
