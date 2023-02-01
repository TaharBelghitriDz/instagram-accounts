import { HStack, Progress, Spinner, Text, VStack } from "@chakra-ui/react";
import { newShade } from "../utils/color";

export const ProgressLoading = (props: { text?: string }) => {
  return (
    <VStack
      w="100px"
      // spacing="20px"
      p="10px"
      px="20px"
      rounded="10px"
      alignItems="center"
      justifyContent="center"
      bg="blue.900"
      color="blue.100"
      // color={newShade("#0000FF", -200)}
      // bg={newShade("#0000FF", 200)}
    >
      <Text>{props.text ? props.text : "تحميل"} </Text>

      <Progress
        w="80px"
        bg="transparent"
        rounded="full"
        colorScheme="#b4e3f8"
        size="xs"
        isIndeterminate
      />
    </VStack>
  );
};

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
