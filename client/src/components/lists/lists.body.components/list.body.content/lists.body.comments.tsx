import { Text, Textarea, VStack } from "@chakra-ui/react";

export default () => {
  return (
    <VStack w="full" alignItems="start" spacing="20px">
      <Textarea
        bg="whiteAlpha.100"
        border=""
        rounded="10px"
        rows={5}
        w="full"
        placeholder="لصق النص هنا"
      />
      <Text
        px="20px"
        py="10px"
        bg="green.0"
        color="green.1"
        cursor="pointer"
        rounded="10px"
      >
        {" "}
        تاكيد{" "}
      </Text>
    </VStack>
  );
};
