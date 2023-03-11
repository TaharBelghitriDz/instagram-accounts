import {
  HStack,
  Table,
  TableCaption,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postsGet } from "../../utils/api/posts.api";
import state from "../../utils/state";
import { CustomAddIcon } from "../custom.button.component";
import PostsModel from "./posts.model";
import PostsRows from "./posts.rows";

export type Post = {
  title_id: number;
  group_id: number;
  is_active: boolean;
  time_between_posting: number;
  is_photo: true;
  id?: number;
};

export default () => {
  const postsState = state.useStore((e) => e.posts);

  const [posts, setPosts] = useState<Post[]>([...postsState]);
  const discloser = useDisclosure();
  const editDiscloser = useDisclosure();
  const [selectedPost, setSelectedPost] = useState("");

  useState(() => {
    postsGet.then(({ err, res }) => {
      console.log("res");
      console.log(res);

      if (err) return;
      setPosts(() => res?.data);
    });
  });

  useEffect(() => {
    setPosts(() => [...postsState]);
  }, [postsState]);

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

      <Table
        variant="simple"
        colorScheme="whiteAlpha"
        // p="20px"
        bg="black.0"
        rounded="20px"
      >
        <TableCaption h="0px"> </TableCaption>
        <Thead pt="20px">
          <Tr>
            {/* <Th textAlign="center">نسخ الرابط</Th> */}
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
