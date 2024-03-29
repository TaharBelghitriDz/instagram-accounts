import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { biographiesGet } from "../../../../utils/api/lists/bio.api";
import state from "../../../../utils/state";
import ListBodyComponentHeader from "../list.body.header/list.body.component.header";

const Bio = (props: {
  onClick: () => void;
  name: string;
  selected: boolean;
}) => (
  <HStack
    w="full"
    style={{ margin: "10px" }}
    spacing="10px"
    border={props.selected ? "solid 1px transparent" : "solid 1px gray"}
    p="10px"
    rounded="15px"
    cursor="pointer"
    color={props.selected ? "red" : "white"}
    bg={props.selected ? "red.900" : ""}
    onClick={props.onClick}
    alignItems="start"
    justifyContent="space-between"
  >
    <VStack alignItems="start" spacing={0}>
      {props.name.split("\n").map((e, i) => (
        <Text key={i}>{e}</Text>
      ))}
    </VStack>
    <Box
      border="solid 2px red"
      bg={props.selected ? "red" : "transparent"}
      p="5px"
      rounded="20px"
    />
  </HStack>
);

export default () => {
  const namesState = state.useStore((e) => e.bio);

  const [bio, setBio] = useState([
    ...namesState.map((e: any) => ({
      name: e.bio,
      selected: false,
      id: e.id,
    })),
  ]);

  useEffect(
    () =>
      setBio(() => [
        ...namesState.map((e: any) => ({
          name: e.bio,
          selected: false,
          id: e.id,
        })),
      ]),
    [namesState]
  );

  useEffect(() => {
    state.changeState({
      selcted: bio.filter((e) => e.selected && e.id).map((e) => e.id),
    });
  }, [bio]);

  useEffect(() => {
    biographiesGet.then(({ err, res }) => {
      if (err) return;
      state.changeState({ bio: res?.data });
    });
  }, []);

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="0px">
      <ListBodyComponentHeader
        place="bio"
        names={bio}
        status={bio.filter((e) => e.selected == false && e).length > 0}
        selectAll={(checked: boolean) => {
          var newOne = bio.map((e) => ((e.selected = checked), e));
          return setBio(() => [...newOne]);
        }}
      />
      <HStack
        spacing="0"
        flexWrap="wrap"
        justifyContent="space-around"
        p="10px"
        w="full"
      >
        {bio.map((e, i) => (
          <Bio
            key={i * 34}
            selected={e.selected}
            name={e.name}
            onClick={() => {
              var newOne = bio;
              newOne[i].selected = !newOne[i].selected;

              return setBio(() => [...newOne]);
            }}
          />
        ))}
      </HStack>
    </VStack>
  );
};
