import { Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Historiq, Pen } from "../../../icons";

const picturs: string[] = [
  "https://source.unsplash.com/random/?instagram_reels&1",
  "https://source.unsplash.com/random/?instagram_reels&2",
  "https://source.unsplash.com/random/?instagram_reels&3",
  "https://source.unsplash.com/random/?instagram_reels&4",
  "https://source.unsplash.com/random/?instagram_reels&5",
  "https://source.unsplash.com/random/?instagram_reels&6",
  "https://source.unsplash.com/random/?instagram_reels&7",
  "https://source.unsplash.com/random/?instagram_reels&8",
  "https://source.unsplash.com/random/?instagram_reels&9",
  "https://source.unsplash.com/random/?instagram_reels&10",
  "https://source.unsplash.com/random/?instagram_reels&11",
];

const Texts = () => {
  const TextItem = () => (
    <HStack
      as={motion.div}
      whileHover={{ backgroundColor: "#020202" }}
      spacing="10px"
      justifyContent="space-between"
      w="full"
      alignItems="start"
      p="10px"
      bg="blackAlpha.400"
      rounded="10px"
    >
      <Text>
        أي. ضرب عل الشهير الواقعة العالمية, الى للجزر والكساد تم, هو كلا تحرّك
        احداث الصينية.
      </Text>
      <Stack
        spacing={{ start: "10px", md: "0" }}
        flexDir={{ start: "column", md: "row" }}
      >
        <Pen
          h="40px"
          w="40px"
          p="10px"
          bg="green.900"
          color="green.100"
          rounded="5px"
          cursor="pointer"
        />
        <Divider borderColor="transparent" w="10px" h="0px" />
        <Historiq
          h="40px"
          w="40px"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="5px"
          cursor="pointer"
        />
      </Stack>
    </HStack>
  );

  return (
    <VStack
      maxW={{ start: "full", md: "46%" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      style={{ margin: "10px" }}
    >
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        النصوص
      </Text>
      <HStack w="full" justifyContent="space-between">
        <Text cursor="pointer"> العدد 5 </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="10px"
        >
          حذف الكل
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="blue.800"
          color="blue.100"
          rounded="10px"
        >
          اضافة
        </Text>
      </HStack>
      <VStack maxH="300px" overflowY="scroll">
        <TextItem />
        <TextItem />
        <TextItem />
        <TextItem />
        <TextItem />
      </VStack>
    </VStack>
  );
};

const Titles = () => {
  const TextItem = () => (
    <HStack
      as={motion.div}
      whileHover={{ backgroundColor: "#020202" }}
      spacing="10px"
      justifyContent="space-between"
      w="full"
      alignItems="start"
      p="10px"
      bg="blackAlpha.400"
      rounded="10px"
    >
      <Text>أي. والكساد تم, هو كلا تحرّك احداث الصينية.</Text>
      <Stack
        spacing={{ start: "10px", md: "0" }}
        flexDir={{ start: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Pen
          h="40px"
          w="40px"
          p="10px"
          bg="green.900"
          color="green.100"
          rounded="5px"
          cursor="pointer"
        />
        <Divider borderColor="transparent" w="10px" h="0px" />
        <Historiq
          h="40px"
          w="40px"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="5px"
          cursor="pointer"
        />
      </Stack>
    </HStack>
  );

  return (
    <VStack
      maxW={{ start: "full", md: "46%" }}
      style={{ margin: "10px" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      w="full"
    >
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        العناوين
      </Text>
      <HStack w="full" justifyContent="space-between">
        <Text cursor="pointer"> العدد 5 </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="10px"
        >
          حذف الكل
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="blue.800"
          color="blue.100"
          rounded="10px"
        >
          اضافة
        </Text>
      </HStack>
      <VStack maxH="300px" overflowY="scroll">
        <TextItem />
        <TextItem />
        <TextItem />
        <TextItem />
        <TextItem />
      </VStack>
    </VStack>
  );
};

const PostsImages = () => {
  return (
    <VStack
      maxW={{ start: "full", md: "46%" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      style={{ margin: "10px" }}
    >
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        صور البوسة
      </Text>
      <HStack w="full" justifyContent="space-between">
        <Text cursor="pointer"> العدد 5 </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="10px"
        >
          حذف الكل
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="blue.800"
          color="blue.100"
          rounded="10px"
        >
          اضافة
        </Text>
      </HStack>
      <HStack
        maxH="300px"
        overflowY="scroll"
        w="full"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {picturs.map((e, i) => (
          <Image src={e} key={i * 50} maxH="100px" style={{ margin: "5px" }} />
        ))}
      </HStack>
    </VStack>
  );
};
const ReelsImages = () => {
  return (
    <VStack
      maxW={{ start: "full", md: "46%" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      style={{ margin: "10px" }}
    >
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        صور الريلز
      </Text>
      <HStack w="full" justifyContent="space-between">
        <Text cursor="pointer"> العدد 5 </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="10px"
        >
          حذف الكل
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="blue.800"
          color="blue.100"
          rounded="10px"
        >
          اضافة
        </Text>
      </HStack>
      <HStack
        maxH="300px"
        overflowY="scroll"
        w="full"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {picturs.map((e, i) => (
          <Image src={e} key={i * 50} maxH="100px" style={{ margin: "5px" }} />
        ))}
      </HStack>
    </VStack>
  );
};

export default () => {
  return (
    <HStack w="full" flexWrap="wrap" justifyContent="space-between">
      <Texts />
      <Titles />
      <PostsImages />
      <ReelsImages />
    </HStack>
  );
};
