import {
  Checkbox,
  Image,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account, accountGet } from "../../../utils/api/accounts.api";
import state from "../../../utils/state";
import Models from "../models";
import AccountsDetails from "../models/accounts.details";
import AccountsTableHeaderComponent from "./accounts.table.header.component";

const Row = (props: {
  selected: number[];
  onClick: (e: any) => void;
  onCheckBox: (e: number) => void;
}) => {
  const accountsState: Account[] = state.useStore((e) => e.accounts);
  const [accounts, setAccounts] = useState<Account[]>(accountsState);
  const selectedGroup = state.useStore((e) => e.selectedGroup);

  useState(() => {
    setAccounts(() => [...accountsState]);
  });

  useEffect(() => {
    accountGet(selectedGroup).then(({ res, err }) => {
      if (err) return;

      setAccounts(() => [...res?.data]);
    });
  }, [selectedGroup]);

  return (
    <Tbody>
      {accounts?.map((e, i) => (
        <Tr key={i * 12} bg={props.selected.includes(e.id) ? "red.800" : ""}>
          <Td>
            <Checkbox
              checked={props.selected.includes(e.id)}
              onChange={({ target: { checked } }) => {
                props.onCheckBox(e.id);
              }}
            />
          </Td>
          <Td onClick={() => props.onCheckBox(e.id)}>
            <Image
              src={e.profile_pic}
              h="75px"
              minW="75"
              w="75px"
              rounded="10px"
            />
          </Td>
          <Td onClick={() => props.onClick(e.id)} textAlign="center">
            {e.username}
          </Td>
          <Td onClick={() => props.onClick(e.id)} textAlign="center">
            {e.is_active ? "مفعل" : "غير مفعل"}{" "}
          </Td>
          <Td onClick={() => props.onClick(e.id)} textAlign="center">
            <Text p="10px" rounded="10px" bg="green.900" color="green.100">
              {e.status}
            </Text>
          </Td>
          <Td onClick={() => props.onClick(e.id)} isNumeric>
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
  const discloser = useDisclosure();
  const [selctedAccount, setSelectedAccount] = useState(0);
  // const [selectedCheckBox, setselectedCheckBox] = useState<number[]>([]);

  const selectedCheckBox = state.useStore((e) => e.selectedAccounts);

  const setselectedCheckBox = (e: number[]) =>
    state.changeState({ selectedAccounts: e });

  const CheckBox = (id: number) => {
    // console.log(selectedCheckBox);

    if (!selectedCheckBox.includes(id))
      return setselectedCheckBox([...selectedCheckBox, id]);
    else
      return setselectedCheckBox(
        selectedCheckBox.filter((e: any) => e !== id && e)
      );
  };

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
      <Models
        content={<AccountsDetails {...discloser} id={selctedAccount} />}
        {...discloser}
      />

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
            <Th color="white" textAlign="center">
              صورة الحساب
            </Th>
            <Th color="white" textAlign="center">
              اسم الحساب
            </Th>
            <Th color="white" textAlign="center">
              حالة الحساب
            </Th>
            <Th color="white" textAlign="center">
              وضع الحساب
            </Th>
            <Th color="white" textAlign="center">
              تاريخ الاضافة
            </Th>
          </Tr>
        </Thead>
        <Row
          {...discloser}
          selected={selectedCheckBox}
          onClick={(e: any) => {
            setSelectedAccount(() => e);

            discloser.onOpen();
          }}
          onCheckBox={(id: number) => {
            CheckBox(id);
          }}
        />
      </Table>
    </VStack>
  );
};
