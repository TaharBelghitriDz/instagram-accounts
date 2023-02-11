import {
  AlertDialog,
  AlertDialogBody,
  Button,
  Checkbox,
  CloseButton,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Add } from "../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../login/login.inputs.component";
import { CustomAddIcon } from "../custom.button.component";

const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  window.scrollTo(0, 0);
  return (
    <AlertDialog
      {...props}
      leastDestructiveRef={ref}
      size="full"
      preserveScrollBarGap
    >
      <AlertDialogBody
        pos="absolute"
        top="0px"
        left="0px"
        w="100vw"
        minH="100vh"
        h="full"
        as={HStack}
        alignItems="center"
        justifyContent="center"
        bg={{ start: "rgb(0,0,0,30%)" }}
      >
        <Stack
          w="full"
          h="full"
          alignItems="center"
          justifyContent="start"
          spacing="0"
        >
          <Stack
            maxW="500px"
            w="full"
            h="auto"
            p="20px"
            bg="rgb(0,0,0,50%)"
            backdropFilter="blur(20px)"
            rounded="20px"
            spacing="0"
            justifyContent="center"
            alignItems="center"
            ref={ref}
            style={{ margin: "30px" }}
          >
            <VStack w="full" spacing="30px">
              <HStack w="full" justifyContent="space-between">
                <Text fontSize="30px">إضافة عنوان للنشر</Text>
                <CloseButton
                  bg="white"
                  color="black"
                  rounded="full"
                  h="40px"
                  w="40px"
                  onClick={() => props.onClose()}
                />
              </HStack>
              <VStack {...AccountsGroupElmntProps} w="full">
                <Text>اسم المجموعة</Text>
                <AccountsSettingsInput
                  placeholder=" تعديل اسم المجموعة"
                  w="100%"
                />
              </VStack>

              <Flex {...AccountsGroupElmntProps}>
                <Menu>
                  <MenuButton
                    variant="outline"
                    as={Button}
                    rightIcon={
                      <CustomAddIcon
                        color="white"
                        bg="whiteAlpha.100"
                        // bg="blue.100"
                        children="-"
                      />
                    }
                    rounded="20px"
                    _hover={{}}
                    border="none"
                    bg="whiteAlpha.100"
                    // color="blue.100"
                    p="10px"
                    py="25px"
                    _active={{ backgroundColor: "whiteAlpha.200" }}
                  >
                    المجموعات​
                  </MenuButton>

                  <MenuList
                    bg="rgb(20,20,20,100%)"
                    backdropFilter="blur(30px)"
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
              </Flex>
              <VStack {...AccountsGroupElmntProps}>
                <Text> نشر كل</Text>
                <HStack w="90%" justifyContent="" spacing="10px">
                  <Text>كل</Text>
                  <AccountsSettingsInput w="30%" type="number" />
                  <Text>دقيقة</Text>
                </HStack>
              </VStack>
              <VStack {...AccountsGroupElmntProps}>
                <Text>اختيار النوع</Text>
                <HStack spacing="10px">
                  <Checkbox size="lg" p="10px" type="checkbox">
                    بوسة
                  </Checkbox>
                  <Checkbox size="lg" p="10px" type="checkbox">
                    ريلز
                  </Checkbox>
                </HStack>
              </VStack>
              <HStack w="full" justifyContent="space-between">
                <HStack
                  spacing="20px"
                  h="50px"
                  bg="green.900"
                  color="green.100"
                  p="20px"
                  rounded="15px"
                  cursor="pointer"
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
          </Stack>
        </Stack>
      </AlertDialogBody>
    </AlertDialog>
  );
};
