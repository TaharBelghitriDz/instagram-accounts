import { Stack, Text, VStack } from "@chakra-ui/react";

export default () => {
  return (
    <Stack
      w="60%"
      h="full"
      p="20px"
      bgImage="/side.back.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
      display={{ start: "none", md: "flex" }}
    >
      <VStack
        h="full"
        maxW="500px"
        spacing="30px"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          p="20px"
          bg="rgb(260,260,260,10%)"
          rounded="10px"
          backdropFilter="blur(20px)"
          shadow="black"
        >
          يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc يننمي
          يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc يننمي يي تيت
        </Text>
        <Text>
          يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصص
        </Text>
        <Text>
          يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصص
        </Text>
        <Text>
          يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc يننمي
          يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc يننمي يي تيت
        </Text>
      </VStack>
    </Stack>
  );
};
