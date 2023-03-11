import {
  HStack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { postsHistory } from "../../utils/api/posts.api";
import { Add } from "../icons";

const Rows = (props: History) => (
  <Tr>
    <Td textAlign="center" w="20%">
      <HStack spacing="10px" w="100%">
        <Text>نسخ الرابط</Text>
        <Add
          h="30px"
          w="30px"
          p="5px"
          rounded="10px"
          bg="green.0"
          color="green.1"
          cursor="pointer"
        />
      </HStack>
    </Td>
    <Td textAlign="center">{props.title}</Td>
    <Td textAlign="center"> {props.is_photo ? "بوسة" : "ريلز"} </Td>
    <Td isNumeric>
      <VStack>
        <span> 02/02/2023 </span>
        <span>12:23</span>
      </VStack>
    </Td>
  </Tr>
);

type History = {
  title: string;
  post_link: string;
  is_photo: boolean;
  created_time: string;
};

const fakeData = [
  {
    title: "title 01",
    post_link: "post link ",
    is_photo: true,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title à2",
    post_link: "post link ",
    is_photo: false,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title 03",
    post_link: "post link ",
    is_photo: true,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title à4",
    post_link: "post link ",
    is_photo: false,
    created_time: "2023-03-11T11:19:36.499Z",
  },
];

export default () => {
  const [history, setHistory] = useState<History[]>(fakeData);

  // useState(() => {
  //   postsHistory.then(({ res, err }) => {
  //     if (err) return;
  //     console.log(res);

  //     setHistory(() => [...res?.data]);
  //   });
  // });

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
            <Th />
            <Th textAlign="center">العنوان</Th>
            <Th textAlign="center"> النوع</Th>
            <Th textAlign="center">تاريخ الاضافة</Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.map((e, i) => (
            <Rows {...e} />
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};
