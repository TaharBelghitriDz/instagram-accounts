import {
  AlertDialog,
  AlertDialogBody,
  Stack,
  useOutsideClick,
  AlertDialogContent,
  // AlertDialog,
  AlertDialogOverlay,
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

  return (
    <AlertDialog {...props} scrollBehavior="outside" leastDestructiveRef={ref}>
      <AlertDialogOverlay />
      <AlertDialogContent
        as={Stack}
        bg="rgb(200,200,200,5%)"
        rounded="20px"
        py="20px"
        backdropFilter="blur(50px)"
      >
        <AlertDialogBody>{props.content}</AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
