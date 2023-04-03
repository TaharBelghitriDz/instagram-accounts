import {
  Flex,
  HStack,
  Table,
  TableCaption,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postsGet } from "../../utils/api/posts.api";
import state from "../../utils/state";
import { CustomAddIcon } from "../custom.button.component";
import { Historiq } from "../icons";
import PostsModel from "./posts.model";
import PostsRemoveAllModel from "./posts.remove.all.model";
import PostsRows from "./posts.rows";

export type Post = {
  title_id: number;
  group_id: number;
  is_active: boolean;
  time_between_posting: number;
  is_photo: true;
  id?: number;
  created_date: string;
};

export default () => {
  const postsState = state.useStore((e) => e.posts);
  const postsSelectedState = state.useStore((e) => e.selectedPost);

  const [posts, setPosts] = useState<Post[]>([...postsState]);
  const discloser = useDisclosure();
  const editDiscloser = useDisclosure();
  const removeDiscloser = useDisclosure();

  const [selectedPost, setSelectedPost] = useState("");
  const toast = useToast();

  useEffect(() => {
    toast({
      status: "loading",
      title: " تحميل ",
      isClosable: true,
      duration: 2000,
    });

    postsGet.then(({ err, res }) => {
      if (err) return;
      console.log(res?.data);

      setPosts(() => [...res?.data]);

      return toast({
        status: "success",
        title: "تم تحميل",
        isClosable: true,
        duration: 2000,
      });
    });
  }, []);

  useEffect(() => {
    setPosts(() => [...postsState]);
  }, [postsState]);

  const selectAll = () => {
    if (postsSelectedState.length == posts.length)
      return state.changeState({ selectedPost: [] });

    return state.changeState({ selectedPost: posts.map((e) => e.id) });
  };

  return (
    <VStack
      w="full"
      alignItems="start"
      justifyContent="center"
      bg="#2F2F2F"
      px="20px"
      rounded="20px"
      overscrollX="contain"
      overflowX="auto"
      spacing="10px"
    >
      <Table />
      <PostsModel {...discloser} />
      <PostsModel
        {...editDiscloser}
        post={posts.filter((e) => e.id?.toString() == selectedPost && e)[0]}
      />
      <PostsRemoveAllModel {...removeDiscloser} />
      <HStack spacing="30px">
        <HStack
          spacing="10px"
          bg="green.0"
          p="10px"
          color="green.1"
          rounded="20px"
          cursor="pointer"
          onClick={discloser.onOpen}
        >
          <Text>اضافة</Text>
          <CustomAddIcon />
        </HStack>
        <HStack
          spacing="10px"
          bg="red.800"
          p="10px"
          color="red.100"
          rounded="20px"
          cursor="pointer"
          onClick={removeDiscloser.onOpen}
        >
          <Text>مسح</Text>
          <Historiq />
        </HStack>
      </HStack>
      <Table
        variant="simple"
        colorScheme="whiteAlpha"
        bg="black.0"
        rounded="20px"
      >
        <TableCaption h="0px"> </TableCaption>
        <Thead pt="20px">
          <Tr>
            <Th color="white" textAlign="center" w="150px">
              <Text
                bg="green.0"
                w="auto"
                p="10px"
                rounded="10px"
                cursor="pointer"
                onClick={selectAll}
              >
                تحديد الكل
              </Text>
            </Th>
            <Th color="white" textAlign="center">
              الحالة
            </Th>
            <Th color="white" textAlign="center">
              العنوان
            </Th>
            <Th color="white" textAlign="center">
              المجموعة
            </Th>
            <Th color="white" textAlign="center">
              النوع
            </Th>
            <Th color="white" textAlign="center">
              تاريخ الاضافة
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {posts?.map((e, i) => (
            <PostsRows
              {...e}
              key={i * 45}
              onClick={() => {
                setSelectedPost(() => e.id?.toString() || "");
                editDiscloser.onOpen();
              }}
            />
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};
