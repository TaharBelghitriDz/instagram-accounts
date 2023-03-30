import {
  Box,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account, accountGet } from "../../../utils/api/accounts.api";
import { date } from "../../../utils/dates";
import state from "../../../utils/state";
import Models from "../models";
import AccountsDetails from "../models/accounts.details";
import AccountsTableHeaderComponent from "./accounts.table.header.component";

const Row = (props: {
  selected: number[];
  onClick: (e: any) => void;
  onCheckBox: (e: number) => void;
}) => {
  const toast = useToast();
  const accountsState: Account[] = state.useStore((e) => e.accounts);
  const [accounts, setAccounts] = useState<Account[]>(accountsState);
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const groups = state.useStore((e) => e.groups);
  const refreshAccounts = state.useStore((e) => e.refreshAccounts);
  const selectedView = state.useStore((e) => e.accountsView);
  const [accountsView, setAccountsView] = useState<Account[]>(accountsState);

  useEffect(() => {
    setAccountsView(() => [...accounts]);
  }, [accounts]);

  const getData = (refresh?: boolean) => {
    if (selectedGroup != "") {
      if (!refresh)
        toast({
          status: "loading",
          title: " تحميل الحسابات",
          isClosable: true,
          duration: 2000,
        });

      accountGet(selectedGroup).then(({ res, err }) => {
        if (!refresh)
          toast({
            status: "success",
            title: "تم تحميل",
            isClosable: true,
            duration: 2000,
          });

        if (err) return;

        setAccounts(() =>
          [...res?.data].map((e) => {
            if (typeof e.is_active == "string") return e;

            if (!e.is_active) e.is_active = "غير مفعل​";
            else e.is_active = "مفعل​";
            return e;
          })
        );
      });
    }
  };

  useEffect(() => {
    getData();
  }, [selectedGroup, groups]);

  useEffect(() => {
    getData(true);
  }, [refreshAccounts]);

  useEffect(() => {
    if (selectedView.length == 0) return setAccountsView(() => [...accounts]);

    const selectedAccounts = accounts.filter((e) => {
      if (selectedView.includes(e.status) || selectedView.includes(e.is_active))
        return e;
    });

    setAccountsView(() => [...selectedAccounts]);
  }, [selectedView]);

  const Selected = (props: { selected: boolean; onClick: () => void }) => {
    if (props.selected)
      return (
        <Box
          h="30px"
          w="30px"
          rounded="10px"
          bg="red"
          cursor="pointer"
          border="3px solid red "
          onClick={props.onClick}
        />
      );
    return (
      <Box
        h="30px"
        w="30px"
        rounded="10px"
        cursor="pointer"
        border="3px solid red "
        onClick={props.onClick}
      />
    );
  };

  return (
    <Tbody>
      {accountsView?.map((e, i) => (
        <Tr key={i * 12} bg={props.selected.includes(e.id) ? "red.800" : ""}>
          <Td>
            <Selected
              selected={props.selected.includes(e.id)}
              onClick={() => props.onCheckBox(e.id)}
            />
          </Td>
          <Td onClick={() => props.onCheckBox(e.id)}>
            <Image
              src={e.profile_pic_link}
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
            {e.is_active}
          </Td>
          <Td onClick={() => props.onClick(e.id)} textAlign="center">
            <Text p="10px" rounded="10px" bg="green.900" color="green.100">
              {e.status}
            </Text>
          </Td>
          <Td onClick={() => props.onClick(e.id)} isNumeric>
            <VStack>
              <span style={{ textAlign: "center" }}>
                {date(e.created_date, "day")}
              </span>
              <span style={{ textAlign: "center" }}>
                {date(e.created_date, "time")}
              </span>
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
  const refresh = state.useStore((e) => e.refreshAccounts);
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  // const [accounts, setAccounts] = useState<Account[]>([]);
  // const selectedView = state.useStore((e) => e.accountsView);

  // const [selectedCheckBox, setselectedCheckBox] = useState<number[]>([]);

  const selectedCheckBox = state.useStore((e) => e.selectedAccounts);

  const setselectedCheckBox = (e: number[]) =>
    state.changeState({ selectedAccounts: e });

  useEffect(() => {
    state.changeState({ selectedAccounts: [] });
  }, [refresh]);

  // useEffect(() => {
  //   accountGet(selectedGroup).then(({ res, err }) => {
  //     if (err) return;

  //     setAccounts(() =>
  //       [...res?.data].map((e) => {
  //         if (typeof e.is_active == "string") return e;

  //         if (!e.is_active) e.is_active = "غير مفعل​";
  //         else e.is_active = "مفعل​";
  //         return e;
  //       })
  //     );
  //   });
  // }, [selectedGroup]);

  const CheckBox = (id: number) => {
    // const selectedAccounts = accounts
    //   .filter((e) => {
    //     if (
    //       selectedView.includes(e.is_active) ||
    //       selectedView.includes(e.status)
    //     )
    //       return e;
    //   })
    //   .map((e) => e.id);

    console.log(id);

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
            <Th color="white">{"تم تحديد " + selectedCheckBox.length}</Th>
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
        {selectedGroup && (
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
        )}
      </Table>
    </VStack>
  );
};
