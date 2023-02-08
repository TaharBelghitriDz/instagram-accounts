import { HStack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default () => {
  const pictureArray: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const toast = useToast();

  useEffect(() => {
    toast({ status: "loading", duration: 1000, title: "جاري التحميل" });
  }, []);

  return (
    <HStack
      spacing="0"
      justifyContent="space-between"
      w="full"
      pb="20px"
      flexWrap="wrap"
    >
      <Text> عدد الصور : {pictureArray.length}</Text>
      <HStack spacing="10px">
        <Text
          p="10px"
          cursor="pointer"
          rounded="20px"
          color="red.200"
          bg="red.800"
        >
          حذف الكل
        </Text>
        <Text
          p="10px"
          cursor="pointer"
          rounded="20px"
          color="green.100"
          bg="green.900"
        >
          رفع صور
        </Text>
      </HStack>
    </HStack>
  );
};
