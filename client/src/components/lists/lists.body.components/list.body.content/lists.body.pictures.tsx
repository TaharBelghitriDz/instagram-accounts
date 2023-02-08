import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ListsHeaderPictures from "../list.body.header/lists.header.pictures";

const Picture = (props: { src: string }) => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked(() => !clicked);

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
        maxH={{ start: "80px", md: "150px" }}
        rounded="10px"
      />
    </Box>
  );
};

export default () => {
  const picturs: string[] = [
    "https://source.unsplash.com/random/?profile_picture&1",
    "https://source.unsplash.com/random/?profile_picture&2",
    "https://source.unsplash.com/random/?profile_picture&3",
    "https://source.unsplash.com/random/?profile_picture&4",
    "https://source.unsplash.com/random/?profile_picture&5",
    "https://source.unsplash.com/random/?profile_picture&6",
    "https://source.unsplash.com/random/?profile_picture&7",
    "https://source.unsplash.com/random/?profile_picture&8",
    "https://source.unsplash.com/random/?profile_picture&9",
    "https://source.unsplash.com/random/?profile_picture&10",
    "https://source.unsplash.com/random/?profile_picture&11",
    "https://source.unsplash.com/random/?profile_picture&1",
    "https://source.unsplash.com/random/?profile_picture&2",
    "https://source.unsplash.com/random/?profile_picture&3",
    "https://source.unsplash.com/random/?profile_picture&4",
    "https://source.unsplash.com/random/?profile_picture&5",
    "https://source.unsplash.com/random/?profile_picture&6",
    "https://source.unsplash.com/random/?profile_picture&7",
    "https://source.unsplash.com/random/?profile_picture&8",
    "https://source.unsplash.com/random/?profile_picture&9",
    "https://source.unsplash.com/random/?profile_picture&10",
    "https://source.unsplash.com/random/?profile_picture&11",
  ];

  return (
    <VStack spacing="0px" w="full" bg="#323232" rounded="20px" p="0px">
      <ListsHeaderPictures />
      <HStack spacing="0" flexWrap="wrap" justifyContent="space-evenly">
        {picturs.map((e, i) => (
          <Picture key={i * 34} src={e} />
        ))}
      </HStack>
    </VStack>
  );
};
