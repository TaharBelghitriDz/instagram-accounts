import { Box, HStack, Image, VStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profilePicGet } from "../../../../utils/api/lists/profile.pics.api";
import state from "../../../../utils/state";
import ListsHeaderPictures from "../list.body.header/lists.header.pictures";

const Picture = (props: { src: string; id: number }) => {
  const [clicked, setClicked] = useState(false);
  const pictsState = state.useStore((e) => e.selectedPics);

  const states = state.useStore((e) => e.profile_pics);
  useEffect(() => {
    setClicked(() => false);
    state.changeState({
      selectedPics: [],
    });
  }, [states]);

  const toggle = () => {
    if (!clicked)
      state.changeState({
        selectedPics: [...pictsState, props.id],
      });
    else
      state.changeState({
        selectedPics: [
          ...pictsState.filter((e: any) => (e == props.id ? false : e)),
        ],
      });

    setClicked(() => !clicked);
  };

  return (
    <Box
      as={motion.div}
      p="5px"
      animate={
        clicked
          ? {
              backgroundColor: "#FF0000",
              padding: "5px",
              opacity: 0.4,
              scale: 0.9,
            }
          : {}
      }
      rounded="10px"
    >
      <Image
        src={props.src}
        onClick={toggle}
        h="1000px"
        maxH={{ start: "80px", md: "150px" }}
        rounded="10px"
      />
    </Box>
  );
};

export default () => {
  const pictureState = state.useStore((e) => e.profile_pics);
  const [pictures, setPictures] = useState([...pictureState]);

  useState(() => {
    profilePicGet.then(({ err, res }) => {
      if (!err) state.changeState({ profile_pics: res?.data });
    });
  });

  useEffect(() => {
    setPictures(() => [...pictureState]);
  }, [pictureState]);

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="0px">
      <ListsHeaderPictures />

      <HStack spacing="0" flexWrap="wrap" justifyContent="space-evenly">
        {pictures.map((e, i) => (
          <Picture key={i * 34} src={e.profile_pic_link} id={e.id} />
        ))}
      </HStack>
    </VStack>
  );
};
