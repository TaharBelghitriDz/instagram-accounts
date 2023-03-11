import { ChakraProps, HStack, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Component, PropsWithChildren, ReactNode } from "react";
import { Add, Down } from "./icons";

export default (props: ChakraProps & { children: JSX.Element[] }) => {
  return (
    <HStack p="20px" spacing="30px" {...props}>
      {props.children}
    </HStack>
  );
};

export const CustomAddIcon = (props: ChakraProps & PropsWithChildren) => (
  <Stack
    w="30px"
    h="30px"
    rounded="10px"
    justifyContent="center"
    alignItems="center"
    bg="green.1"
    backgroundColor={props.bg}
  >
    {props.children ? (
      <Down color={props.color || "blue.900"} h="25px" w="25px" />
    ) : (
      <Add color="green.0" h="25px" w="25px" />
    )}
  </Stack>
);

export const ActionIcon = (props: {
  text: string;
  onClick: () => void;
  color?: string;
}) => (
  <Stack justifyContent="center" alignItems="center" p="10px">
    <HStack
      userSelect="none"
      as={motion.div}
      whileHover={{ boxShadow: "0px 0px 10px -2px #00FFB2" }}
      boxShadow="0px 0px 20px -5px #00FFB200"
      spacing="20px"
      p="10px"
      bg={props.color || "green.0"}
      rounded="20px"
      color="green.1"
      cursor="pointer"
      onClick={props.onClick}
    >
      <Text>{props.text}</Text>
      <CustomAddIcon />
    </HStack>
  </Stack>
);
