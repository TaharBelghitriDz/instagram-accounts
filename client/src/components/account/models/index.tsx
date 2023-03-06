import {
  AlertDialog,
  AlertDialogBody,
  HStack,
  Stack,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef } from "react";

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  content: JSX.Element;
}) => {
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });
  window.scrollTo(0, 0);
  return (
    <AlertDialog
      {...props}
      leastDestructiveRef={ref}
      size="full"
      preserveScrollBarGap
    >
      <AlertDialogBody
        pos="absolute"
        top="0px"
        left="0px"
        w="100vw"
        minH="100vh"
        h="full"
        as={HStack}
        alignItems="center"
        justifyContent="center"
        bg={{ start: "rgb(0,0,0,70%)" }}
        maxH="full"
        overflowY="auto"
      >
        <Stack
          w="full"
          h="full"
          alignItems="center"
          justifyContent="start"
          spacing="0"
        >
          <Stack
            maxW="500px"
            w="full"
            h="auto"
            p="20px"
            bg="rgb(260,260,260,5%)"
            backdropFilter="blur(50px)"
            rounded="20px"
            spacing="0"
            justifyContent="center"
            alignItems="center"
            ref={ref}
            style={{ margin: "30px" }}
            boxShadow="0px 0px 20px -10px black"
          >
            {props.content}
          </Stack>
        </Stack>
      </AlertDialogBody>
    </AlertDialog>
  );
};
