import {
  AlertDialog,
  AlertDialogBody,
  CloseButton,
  HStack,
  Stack,
  Text,
  useOutsideClick,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Add } from "../icons";
import state from "../../utils/state";
import { postsDelete } from "../../utils/api/posts.api";

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  post_id: number;
}) => {
  const ref = useRef(null);
  const toast = useToast();

  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  useEffect(() => window.scrollTo(0, 0), [props.isOpen]);

  const fun = () => {
    postsDelete(props.post_id)
      .then(({ err, res }) => {
        if (err) return toast({ status: "success", title: "لم يتم المسح " });

        return state.changeState({ posts: res?.data });
      })
      .then(() => {
        props.onClose();
        toast({ status: "success", title: "تم المسح" });
      });
  };

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
        bg={{ start: "rgb(0,0,0,30%)" }}
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
            bg="rgb(0,0,0,50%)"
            backdropFilter="blur(20px)"
            rounded="20px"
            spacing="0"
            justifyContent="center"
            alignItems="center"
            ref={ref}
            style={{ margin: "30px" }}
          >
            <VStack w="full" spacing="30px">
              <HStack w="full" justifyContent="space-between">
                <Text fontSize="30px">مسح البوسة</Text>
                <CloseButton
                  bg="white"
                  color="black"
                  rounded="full"
                  h="40px"
                  w="40px"
                  onClick={() => props.onClose()}
                />
              </HStack>

              <HStack w="full" justifyContent="space-between">
                <HStack
                  spacing="20px"
                  h="50px"
                  bg="green.900"
                  color="green.100"
                  p="20px"
                  rounded="15px"
                  cursor="pointer"
                  onClick={fun}
                >
                  <Text>تاكيد</Text>
                  <Add h="24px" w="24px" />
                </HStack>
                <HStack
                  spacing="20px"
                  h="50px"
                  bg="red.900"
                  color="red.100"
                  p="20px"
                  rounded="15px"
                  cursor="pointer"
                  onClick={() => props.onClose()}
                >
                  <Text>الغاء</Text>
                  <CloseButton h="24px" w="24px" />
                </HStack>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
      </AlertDialogBody>
    </AlertDialog>
  );
};
