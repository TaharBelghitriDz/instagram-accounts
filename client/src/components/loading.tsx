import { HStack, Progress, Spinner, Text, VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import { newShade } from "../utils/color";

export const ProgressLoading = (props: { text?: string }) => {
  return (
    <VStack
      maxW="300px"
      w="full"
      // spacing="20px"
      p="10px"
      px="20px"
      rounded="full"
      alignItems="center"
      justifyContent="center"
      // bg="blue.900"
      //  color="white"
      // color={newShade("#0000FF", -200)}
      // bg={newShade("#0000FF", 200)}
    >
      <Text>{props.text ? props.text : "تحميل"} </Text>

      <Progress
        w="full"
        // bg="transparent"
        rounded="full"
        color="black"
        colorScheme="gray"
        // color="#FFFFFF"
        size="xs"
        isIndeterminate
      />
    </VStack>
  );
};

export const ProgressLoadingCompnent = () => (
  <VStack w="full">
    <ProgressLoading />
  </VStack>
);

export default (props: { isLoading: boolean }) => {
  return (
    <HStack
      spacing="20px"
      p="10px"
      px="20px"
      rounded="full"
      color="blue.100"
      bg="blue.900"
      //   color={newShade("#FFFFFF", -200)}
      //   bg={newShade("#FFFFFF", 200)}
    >
      <Text>تحميل</Text>
      <Spinner />
    </HStack>
  );
};
