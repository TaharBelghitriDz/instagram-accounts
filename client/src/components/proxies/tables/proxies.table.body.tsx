import {
  Checkbox,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ProxiesTableHeader from "./proxies.table.header";

const TableBodyRow = () => {
  const [remove, setRemove] = useState(false);

  return (
    <Tr bg={remove ? "red.900" : ""}>
      <Td>
        <Checkbox
          p="10px"
          type="checkbox"
          onChange={(e) => {
            setRemove(() => e.target.checked);
          }}
        />
      </Td>

      <Td textAlign="center">proxy name</Td>
      <Td textAlign="center"> 123456789 </Td>
      <Td textAlign="center">182.102.50.16</Td>
      <Td textAlign="center">8080</Td>
      <Td isNumeric>
        <VStack>
          <span> 02/02/2023 </span>
          <span>12:23</span>
        </VStack>
      </Td>
    </Tr>
  );
};

export default () => {
  return (
    <VStack
      w="full"
      alignItems="start"
      justifyContent="start"
      bg="#2F2F2F"
      px="20px"
      rounded="20px"
      overscrollX="contain"
      overflowX="auto"
    >
      <ProxiesTableHeader />
      <Table
        variant="simple"
        colorScheme="whiteAlpha"
        p="20px"
        bg="black.0"
        rounded="20px"
      >
        <TableCaption h="20px"> </TableCaption>
        <Thead pt="20px">
          <Tr>
            <Th />
            <Th textAlign="center">اسم</Th>
            <Th textAlign="center">كلمة المرور</Th>
            <Th textAlign="center">المضيف</Th>
            <Th textAlign="center">المدخل</Th>
            <Th textAlign="center">تاريخ الاضافة</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableBodyRow />
          <TableBodyRow />
          <TableBodyRow />
          <TableBodyRow />
        </Tbody>
      </Table>
    </VStack>
  );
};
