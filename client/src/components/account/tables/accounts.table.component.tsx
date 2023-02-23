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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account } from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import { ProgressLoadingCompnent } from "../../loading";
import AccountsTableHeaderComponent from "./accounts.table.header.component";

const Row = () => {
  const account = state.useStore((e) => e.accounts);
  const [accounts, setAccounts] = useState<Account[]>(account);
  const [isLoading, setIsLoading] = useState(true);
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const toast = useToast();

  // const accounts: Account[] = state.useStore((e) => e.accounts);

  // useState(
  //   (!isLoading && setIsLoading(() => true),
  //   accountGet(selectedGroup).then(({ err, res }) => {
  //     if (err)
  //       toast({
  //         status: "error",
  //         isClosable: true,
  //         title: "لا توجد حسابات في المجموعة",
  //       });
  //     setAccounts(() => res?.data);
  //     setIsLoading(() => false);
  //   }))
  // );

  useEffect(() => {
    // accountGet(selectedGroup).then(({ res }) => {
    //   setAccounts(() => res?.data);
    // });
  }, [selectedGroup]);

  return (
    <Tbody>
      {accounts?.map((e, i) => (
        <Tr key={i * 12}>
          <Td>
            <Image
              src={e.profile_pic}
              h="75px"
              minW="75"
              w="75px"
              rounded="10px"
            />
          </Td>
          <Td textAlign="center">{e.username}</Td>
          <Td textAlign="center"> {e.status} </Td>
          <Td textAlign="center">
            <Text p="10px" rounded="10px" bg="green.900" color="green.100">
              {e.status}
            </Text>
          </Td>
          <Td isNumeric>
            <VStack>
              <span>{e.created_date.slice(0, 12)}</span>
              <span>{e.created_date.slice(13, 23)}</span>
            </VStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
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
      <AccountsTableHeaderComponent />
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
            <Th textAlign="center">صورة الحساب</Th>
            <Th textAlign="center">اسم الحساب</Th>
            <Th textAlign="center">حالة الحساب</Th>
            <Th textAlign="center">وضع الحساب</Th>
            <Th textAlign="center">تاريخ الاضافة</Th>
          </Tr>
        </Thead>
        <Row />
      </Table>
    </VStack>
  );
};
