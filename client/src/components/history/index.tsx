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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postsHistory } from "../../utils/api/posts.api";
import { date } from "../../utils/dates";
import { Go, Refresh } from "../icons";

const Rows = (props: History) => (
  <Tr>
    <Td textAlign="center" w="20%">
      <HStack
        spacing="10px"
        w="100%"
        bg="green.0"
        p="10px"
        rounded="20px"
        cursor="pointer"
        color="green.1"
        onClick={() => window.open(props.post_link, "_blank")}
      >
        <Text textAlign="start">ذهاب للمنشور</Text>
        <Go
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
        <span style={{ textAlign: "center" }}>
          {date(props.created_time as string, "day")}
        </span>
        <span style={{ textAlign: "center" }}>
          {date(props.created_time as string, "time")}
        </span>
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
    post_link: "",
    is_photo: true,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title à2",
    post_link: "",
    is_photo: false,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title 03",
    post_link: "",
    is_photo: true,
    created_time: "2023-03-11T11:19:36.499Z",
  },
  {
    title: "title à4",
    post_link: "",
    is_photo: false,
    created_time: "2023-03-11T11:19:36.499Z",
  },
];

export default () => {
  const [history, setHistory] = useState<History[]>(fakeData);
  const [refresh, setRefresh] = useState(0);
  const toast = useToast();

  useEffect(() => {
    toast({
      status: "loading",
      title: " تحميل ",
      isClosable: true,
      duration: 2000,
    });
    postsHistory.then(({ res, err }) => {
      if (err)
        return toast({
          status: "success",
          title: "تحميل خطا في ",
          isClosable: true,
          duration: 2000,
        });

      if (res?.data.length < 1) return setHistory(() => fakeData);
      setHistory(() => [...res?.data].reverse());
      return toast({
        status: "success",
        title: "تم تحميل",
        isClosable: true,
        duration: 2000,
      });
    });
  }, [refresh]);

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

      <HStack
        spacing="30px"
        rounded="20px"
        p="10px"
        bg="green.0"
        color="green.1"
        cursor="pointer"
        onClick={() => setRefresh(() => Date.now())}
      >
        <Text>تجديد</Text>
        <Refresh />
      </HStack>
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
            <Th color="white" />
            <Th color="white" textAlign="center">
              العنوان
            </Th>
            <Th color="white" textAlign="center">
              النوع
            </Th>
            <Th color="white" textAlign="center">
              تاريخ النشر
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.map((e, i) => (
            <Rows key={i} {...e} />
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};
