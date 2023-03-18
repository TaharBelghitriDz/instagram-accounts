import {
  CloseButton,
  HStack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Proxies, proxiesCreate } from "../../../utils/api/proxies.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const proxiesSate = state.useStore((e) => e.proxies);

  const add = () => {
    const valueArray = value
      .split("\n")
      .filter((e) => e != "" && e)
      .map((e) => e.replace(/\s/g, "").split(":"));

    let proxies: Proxies[] = [];

    valueArray.forEach((e) => {
      proxies.push({
        host: e[0],
        port: e[1],
        username: e[2],
        password: e[3],
      });
    });

    // works
    proxiesCreate(proxies).then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          title: "خطا في الاتصال",
          isClosable: true,
        });
      state.changeState({ proxies: res?.data });
      toast({
        status: "success",
        title: "تمت الاضافة",
        isClosable: true,
      });

      return props.onClose();
    });
  };

  return (
    <VStack w="full" spacing="30px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">إضافة بروكسات</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <Textarea
        bg="whiteAlpha.100"
        border=""
        value={value}
        onChange={({ target: { value } }) => setValue(() => value)}
        rounded="10px"
        rows={5}
        placeholder="لصق النص هنا"
      />
      <HStack w="full" justifyContent="space-between">
        <HStack
          spacing="20px"
          h="50px"
          bg="green.900"
          color="green.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
          onClick={add}
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
  );
};
