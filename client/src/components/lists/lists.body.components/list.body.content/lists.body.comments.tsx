import { Text, Textarea, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  commentsGet,
  commentsUpdate,
} from "../../../../utils/api/lists/comments.api";

export default () => {
  const [commnets, setComments] = useState("");
  const toast = useToast();

  useState(() =>
    commentsGet.then(({ res, err }) => {
      if (err) return;
      setComments(() => res?.data.comment);
    })
  );

  const updateComments = () => {
    commentsUpdate(commnets).then(({ err, res }) => {
      if (err) return;

      setComments(() => res?.data.comment);
      return toast({
        status: "success",
        title: "تمت العملية",
        isClosable: true,
      });
    });
  };

  return (
    <VStack w="full" alignItems="start" spacing="20px">
      <Textarea
        bg="whiteAlpha.100"
        border=""
        rounded="10px"
        rows={5}
        w="full"
        placeholder="لصق النص هنا"
        value={commnets}
        onChange={({ target: { value } }) => setComments(() => value)}
      />
      <Text
        px="20px"
        py="10px"
        bg="green.0"
        color="green.1"
        cursor="pointer"
        rounded="10px"
        onClick={updateComments}
      >
        تاكيد
      </Text>
    </VStack>
  );
};
