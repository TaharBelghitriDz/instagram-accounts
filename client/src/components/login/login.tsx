import { HStack, Image, VStack } from "@chakra-ui/react";
import LoginInputsComponent from "./login.inputs.component";
import LoginMobileComponent from "./login.mobile.component";
import LoginSideComponent from "./login.side.component";

export default () => {
  return (
    <HStack
      minH="100vh"
      h="100px"
      w="full"
      spacing="0"
      // bg="rgb(0,0,0,10%)"
      // backdropFilter="blur(5px)"
    >
      <Image
        pos="absolute"
        top="0"
        left="0"
        zIndex={-1}
        src="/back.svg"
        h="100vh"
        objectFit="cover"
      />
      <LoginSideComponent />
      <LoginMobileComponent />

      <LoginInputsComponent />
    </HStack>
  );
};
