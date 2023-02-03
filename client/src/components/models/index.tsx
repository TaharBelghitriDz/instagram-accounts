import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogOverlay,
  HStack,
  Stack,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

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
  return (
    <AlertDialog {...props} leastDestructiveRef={ref} size="full">
      <AlertDialogBody
        pos="absolute"
        top="0"
        left="0"
        w="full"
        h="100vh"
        as={HStack}
        alignItems="center"
        bg="rgb(0,0,0,30%)"
        justifyContent="center"
      >
        <Stack
          maxW="500px"
          w="full"
          p="20px"
          bg="rgb(0,0,0,50%)"
          backdropFilter="blur(20px)"
          rounded="20px"
          spacing="0"
          justifyContent="center"
          alignItems="center"
          ref={ref}
        >
          {props.content}
        </Stack>
      </AlertDialogBody>
    </AlertDialog>
  );
};
