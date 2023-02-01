import { ChakraProps, HStack, Text } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

export default (props: ChakraProps & { children: JSX.Element[] }) => {
  return (
    <HStack p="20px" spacing="30px" {...props}>
      {props.children}
    </HStack>
  );
};
