import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ListBodyComponentHeader from "./list.body.component.header";

const Bio = (props: {
  onClick: () => void;
  name: string;
  selected: boolean;
}) => (
  <HStack
    style={{ margin: "10px" }}
    spacing="10px"
    border={props.selected ? "solid 1px transparent" : "solid 1px gray"}
    p="10px"
    rounded="15px"
    cursor="pointer"
    color={props.selected ? "red" : "white"}
    bg={props.selected ? "red.900" : ""}
    onClick={props.onClick}
    alignItems="center"
    justifyContent="center"
  >
    <Text>{props.name}</Text>
    <Box
      border="solid 2px red"
      bg={props.selected ? "red" : "transparent"}
      p="5px"
      rounded="20px"
    />
  </HStack>
);

export default () => {
  const [names, setNames] = useState([
    { name: "تسويق الكتروني", selected: false },
    { name: "اكواد خصم", selected: false },
    { name: "تسويق الكتروني", selected: false },
    { name: "اكواد خصم", selected: false },
    { name: "تسويق الكتروني", selected: false },
    { name: "اكواد خصم", selected: false },
    { name: "تسويق الكتروني", selected: false },
    { name: "اكواد خصم", selected: false },
    { name: "تسويق الكتروني", selected: false },
    { name: "اكواد خصم", selected: false },
  ]);

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="20px">
      <ListBodyComponentHeader
        names={names}
        status={names.filter((e) => e.selected == false && e).length > 0}
        selectAll={(checked: boolean) => {
          var newOne = names.map((e) => ((e.selected = checked), e));
          return setNames(() => [...newOne]);
        }}
      />
      <HStack spacing="0" flexWrap="wrap" justifyContent="space-around">
        {names.map((e, i) => (
          <Bio
            key={i * 34}
            selected={e.selected}
            name={e.name}
            onClick={() => {
              var newOne = names;
              newOne[i].selected = !newOne[i].selected;
              return setNames(() => [...newOne]);
            }}
          />
        ))}
      </HStack>
    </VStack>
  );
};