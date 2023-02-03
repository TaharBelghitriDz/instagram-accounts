import { HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import state from "../../utils/state";
import { Navbar } from "../icons";
import MobileDrawer from "./mobile.drawer";
import RightSideBar, { sideBarItems } from "./right.sideBar";

export default () => {
  const place = state.useStore((e) => e.place);

  const discloser = useDisclosure();

  return (
    <Fragment>
      <MobileDrawer {...discloser} />
      <HStack
        w="full"
        justifyContent="space-between"
        display={{ start: "flex", lg: "none" }}
      >
        <Navbar
          h="50px"
          w="50px"
          rounded="150px"
          p="12px"
          bg="blue.900"
          color="blue.100"
          display={{ start: "block", lg: "none" }}
          cursor="pointer"
          onClick={() => discloser.onOpen()}
        />
        <Text
          fontSize="20px"
          bg="purple.900"
          color="purple.100"
          verticalAlign="center"
          h="50px"
          p="30px"
          py="10px"
          rounded="15px"
        >
          {place}
        </Text>
      </HStack>
      <VStack
        bg="black.0"
        p="10px"
        rounded="30px"
        w="200px"
        spacing="10px"
        display={{ start: "none", lg: "flex" }}
      >
        {sideBarItems.map((e, i) => (
          <RightSideBar key={i * 10} {...e} />
        ))}
      </VStack>
    </Fragment>
  );
};
