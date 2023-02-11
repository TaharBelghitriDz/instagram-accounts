import { HStack, Td, Text, Tr, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default (props: { onClick: () => void }) => {
  const [remove, setRemove] = useState(false);

  return (
    <Tr bg={remove ? "red.900" : ""}>
      <Td textAlign="center"> كود ماكس </Td>
      <Td textAlign="center"> المجموعة 1 </Td>
      <Td textAlign="center"> بوسة </Td>
      <Td isNumeric>
        <VStack>
          <span> 02/02/2023 </span>
          <span>12:23</span>
        </VStack>
      </Td>
      <Td>
        <HStack spacing="10px">
          <Text
            p="10px"
            rounded="xl"
            cursor="pointer"
            bg="blue.800"
            color="blue.200"
            onClick={props.onClick}
          >
            تعديل
          </Text>
          <Text
            p="10px"
            rounded="xl"
            cursor="pointer"
            bg="red.800"
            color="red.200"
          >
            حدف
          </Text>
        </HStack>
      </Td>
    </Tr>
  );
};
