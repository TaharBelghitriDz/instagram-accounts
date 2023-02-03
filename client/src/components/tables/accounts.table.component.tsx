import {
  Image,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import AccountsTableHeaderComponent from "./accounts.table.header.component";

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
      <AccountsTableHeaderComponent />
      <Table
        variant="simple"
        colorScheme="whiteAlpha"
        p="20px"
        bg="black.0"
        rounded="20px"
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">صورة الحساب</Th>
            <Th textAlign="center">اسم الحساب</Th>
            <Th textAlign="center">حالة الحساب</Th>
            <Th textAlign="center">وضع الحساب</Th>
            <Th textAlign="center">تاريخ الاضافة</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Image
                src="/side.back.png"
                h="75px"
                minW="75"
                w="75px"
                rounded="10px"
              />
            </Td>
            <Td textAlign="center">اسم الحساب</Td>
            <Td textAlign="center"> نشط </Td>
            <Td textAlign="center">
              <Text p="10px" rounded="10px" bg="green.900" color="green.100">
                نشط
              </Text>
            </Td>
            <Td isNumeric>
              <VStack>
                <span> 02/02/2023 </span>
                <span>12:23</span>
              </VStack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Image src="/side.back.png" h="75px" w="75px" rounded="10px" />
            </Td>
            <Td textAlign="center">اسم الحساب</Td>
            <Td textAlign="center"> نشط </Td>
            <Td textAlign="center"> نشط </Td>
            <Td isNumeric>
              <VStack>
                <span> 02/02/2023 </span>
                <span>12:23</span>
              </VStack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  );
};
