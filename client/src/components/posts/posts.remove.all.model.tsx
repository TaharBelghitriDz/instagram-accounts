import {
  AlertDialog,
  AlertDialogBody,
  CloseButton,
  HStack,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { axiosFun } from "../../utils/api/costant";
import state from "../../utils/state";
import { Add } from "../icons";

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  const toast = useToast();
  const selectedPost = state.useStore((e) => e.selectedPost);

  const fun = () => {
    if (selectedPost.length == 0)
      return toast({ status: "error", isClosable: true, title: "حدد حملات" });

    axiosFun({
      method: "DELETE",
      url: "http://135.181.209.82:1996/posts",
      headers: { authorization: localStorage.getItem("token") },
      data: selectedPost,
    })
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
                <Text fontSize="30px">تاكيد المسح</Text>
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
