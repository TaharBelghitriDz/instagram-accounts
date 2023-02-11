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
import { CustomAddIcon } from "../custom.button.component";
import PostsModel from "./posts.model";
import PostsRows from "./posts.rows";

export default () => {
  const discloser = useDisclosure();

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
      {/* header */}

      <Table />

      <PostsModel {...discloser} />

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
            <Th textAlign="center">العنوان</Th>
            <Th textAlign="center"> كلمة المرور</Th>
            <Th textAlign="center">النشر كل</Th>
            <Th textAlign="center">النوع</Th>
            <Th textAlign="center">تاريخ الاضافة</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          <PostsRows onClick={() => discloser.onOpen()} />
          <PostsRows onClick={() => discloser.onOpen()} />
          <PostsRows onClick={() => discloser.onOpen()} />
        </Tbody>
      </Table>
    </VStack>
  );
};
