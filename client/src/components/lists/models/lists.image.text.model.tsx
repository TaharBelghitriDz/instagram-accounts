import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  CloseButton,
  HStack,
  Stack,
  Text,
  Textarea,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import state from "../../../utils/state";
import { Add } from "../../icons";
import {
  PostsImages,
  Texts,
} from "../lists.body.components/list.body.content/lists.body.text.and.images";

export default (props: {
  onClose: () => void;
  isOpen: boolean;
  name?: string;
  id: string;
  //   content?: string;
}) => {
  const refresh = state.useStore((e) => e.refreshtextsAndImages);

  useEffect(() => {}, [refresh]);

  const ref = useRef(null);
  //   useOutsideClick({
  //     ref: ref,
  //     handler: () => props.onClose(),
  //   });

  return (
    <AlertDialog
      {...props}
      scrollBehavior="outside"
      leastDestructiveRef={ref}
      size="4xl"
    >
      <AlertDialogOverlay />
      <AlertDialogContent
        as={Stack}
        bg="rgb(200,200,200,5%)"
        rounded="20px"
        py="20px"
        backdropFilter="blur(50px)"
      >
        <AlertDialogBody>
          <VStack w="full" spacing="30px">
            <HStack w="full" justifyContent="space-between">
              <Text fontSize="30px">{props.name || "إضافة اسم"}</Text>
              <CloseButton
                bg="white"
                color="black"
                rounded="full"
                h="40px"
                w="40px"
                onClick={() => props.onClose()}
              />
            </HStack>

            <VStack w="full">
              <Texts selctedId={props.id} />
              <PostsImages selctedId={props.id} is_photo={true} />
              <PostsImages selctedId={props.id} is_photo={false} />
            </VStack>
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
