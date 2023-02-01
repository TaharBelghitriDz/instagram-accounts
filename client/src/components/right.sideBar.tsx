import { Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { newShade } from "../utils/color";

export const sideBarItems = [
  {
    name: "ينينم ",
    icon: "",
  },
];

export default () => {
  return (
    <VStack bg="black.0" p="10px" rounded="10px">
      <Text
        as={motion.p}
        textAlign="center"
        //  bg="#F1F1F1"
        color="#EEEEEE"
        initial={{ background: "#262626" }}
        rounded="10px"
        w="100px"
        p="10px"
        cursor="pointer"
        whileHover={{
          background: newShade("#FF0000", -200),
          color: newShade("#FF0000", 200),
        }}
      >
        لمّا كان الاعتراف بالكرامة المتأصلة في جميع
      </Text>
    </VStack>
  );
};
