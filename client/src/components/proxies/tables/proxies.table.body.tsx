import {
  Checkbox,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Proxies, proxiesGet } from "../../../utils/api/proxies.api";
import { date } from "../../../utils/dates";
import state from "../../../utils/state";
import ProxiesTableHeader from "./proxies.table.header";

const TableBodyRow = (
  props: Proxies & { setSelect: (p: boolean) => void; remove: boolean }
) => {
  return (
    <Tr bg={props.remove ? "red.900" : ""}>
      <Td>
        <Checkbox
          p="10px"
          type="checkbox"
          checked={props.remove}
          onChange={(e) => {
            console.log("here");

            props.setSelect(e.target.checked);
          }}
        />
      </Td>

      <Td textAlign="center">{props.username}</Td>
      <Td textAlign="center"> {props.password} </Td>
      <Td textAlign="center">{props.host}</Td>
      <Td textAlign="center">{props.port}</Td>
      <Td isNumeric>
        <VStack>
          <span style={{ textAlign: "center" }}>
            {date(props.created_date as string, "day")}
          </span>
          <span style={{ textAlign: "center" }}>
            {date(props.created_date as string, "time")}
          </span>
        </VStack>
      </Td>
    </Tr>
  );
};

export default () => {
  const toast = useToast();
  const proxiesState = state.useStore((e) => e.proxies);
  const [select, setSelect] = useState<any[]>([]);

  useEffect(() => {
    console.log("select");
    console.log(select);

    setSelect(() => []);
    console.log(select);
  }, [proxiesState]);

  useState(() => {
    proxiesGet.then(({ err, res }) => {
      if (err)
        return toast({
          status: "error",
          title: "خطا في الاتصال",
          isClosable: true,
        });

      state.changeState({ proxies: res?.data });
      return;
    });
  });

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
      <ProxiesTableHeader select={select} />
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
              اسم
            </Th>
            <Th color="white" textAlign="center">
              كلمة المرور
            </Th>
            <Th color="white" textAlign="center">
              المضيف
            </Th>
            <Th color="white" textAlign="center">
              المدخل
            </Th>
            <Th color="white" textAlign="center">
              تاريخ الاضافة
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {proxiesState.map((e: any, i: number) => (
            <TableBodyRow
              {...e}
              key={i * 38}
              remove={select.find((element) => element == e.id)}
              setSelect={(checked: boolean) =>
                !checked
                  ? setSelect((a) => [
                      ...a.filter((s) => (s != e.id ? e : undefined)),
                    ])
                  : setSelect((a) => [...a, e.id])
              }
            />
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};
