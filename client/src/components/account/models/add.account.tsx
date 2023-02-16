import { CloseButton, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Add } from "../../icons";

export default (props: { onClose: () => void }) => {
  const [value, setValue] = useState("");

  const Fun = () => {
    console.log(value.split("\n").map((e) => e.replace(/\s/g, "")));
  };

  return (
    <VStack w="full" spacing="30px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">إضافة حسابات​</Text>
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
        rounded="10px"
        rows={5}
        placeholder="لصق النص هنا"
        value={value}
        onChange={({ target: { value } }) => setValue(() => value)}
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
          onClick={Fun}
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
