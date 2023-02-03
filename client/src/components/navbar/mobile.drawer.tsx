import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import state from "../../utils/state";
import RightSideBar, { sideBarItems } from "./right.sideBar";

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  const place = state.useStore((e) => e.place);

  useEffect(() => {
    props.onClose();
  }, [place]);

  return (
    <Drawer {...props} finalFocusRef={ref} size="full" placement="top">
      <DrawerOverlay backdropFilter="blur(10px)" />
      <DrawerContent bg="">
        <DrawerHeader>
          <HStack w="full" justifyContent="space-between" p="10px">
            <Text>القائمة</Text>
            <CloseButton
              bg="red.900"
              color="red.100"
              rounded="full"
              onClick={() => props.onClose()}
            />
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          {sideBarItems.map((e, i) => (
            <RightSideBar key={i * 40} {...e} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
