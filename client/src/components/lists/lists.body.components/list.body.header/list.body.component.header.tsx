import { Checkbox, HStack, Stack, Text } from "@chakra-ui/react";

export default (props: {
  status: boolean;
  selectAll: (checked: boolean) => void;
  names: { name: string; selected: boolean }[];
}) => {
  return (
    <Stack
      w="full"
      p="20px"
      pt="0px"
      alignItems="center"
      justifyContent={{ start: "space-evenly", md: "space-between" }}
      flexDir="row"
      flexWrap="wrap"
    >
      <Checkbox
        bg="blue.800"
        color="blue.200"
        spacing="10px"
        p="10px"
        rounded="10px"
        onChange={({ target: { checked } }) => {
          props.selectAll(checked);
        }}
      >
        {props.status ? "تحديد الكل" : "عدم تحديد الكل"}
      </Checkbox>
      <HStack spacing="10px">
        <Text
          cursor="pointer"
          p="10px"
          rounded="10px"
          bg="red.800"
          color="red.100"
        >
          حذف
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          rounded="10px"
          bg="green.900"
          color="green.100"
        >
          اضف
        </Text>
      </HStack>
    </Stack>
  );
};
