import {
  Box,
  ChakraComponent,
  HStack,
  Icon,
  IconProps,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import state from "../../utils/state";
import { Historiq, List, Logout, Pen, Proxy, UserIcon } from "../icons";

export default (props: {
  name: string;
  icon: ChakraComponent<"svg", IconProps>;
  onClick?: () => void;
}) => {
  const [isHoverd, setHover] = useState(false);

  return (
    <HStack
      as={motion.div}
      onHoverStart={() => setHover(() => true)}
      onHoverEnd={() => setHover(() => false)}
      animate={{ backgroundColor: isHoverd ? "#0F366A" : "#0F366A00" }}
      onClick={() =>
        props.onClick ? props.onClick() : state.changeView(props.name)
      }
      w="full"
      cursor="pointer"
      p="10px"
      pr="20px"
      rounded="20px"
      justifyContent="space-between"
    >
      <Text>{props.name}</Text>
      <Stack
        spacing="0"
        as={motion.div}
        bg="gray"
        p="5px"
        w="35px"
        h="35px"
        rounded="10px"
        alignItems="center"
        justifyContent="center"
        shadow={isHoverd ? "black2" : ""}
        animate={{
          backgroundColor: isHoverd ? "#8EBEFF" : "#1F1F1F00",
          color: isHoverd ? "#0F366A" : "#F5F5F5",
        }}
      >
        <Icon as={props.icon} w="20px" h="20px" />
      </Stack>
    </HStack>
  );
};

export const sideBarItems = [
  {
    name: "الحسابات",
    icon: UserIcon,
  },
  {
    name: "البروكسيات",
    icon: Proxy,
  },
  {
    name: "القوائم",
    icon: List,
  },
  {
    name: "النشر",
    icon: Pen,
  },
  {
    name: "سجل النشر",
    icon: Historiq,
  },
  {
    name: "تسجيل الخروج",
    icon: Logout,
    onClick() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
];
