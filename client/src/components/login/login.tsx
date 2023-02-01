import { HStack, VStack } from "@chakra-ui/react";
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
      <LoginSideComponent />
      <LoginMobileComponent />

      <LoginInputsComponent />
    </HStack>
  );
};
