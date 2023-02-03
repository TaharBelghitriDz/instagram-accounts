import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Loading, { ProgressLoading } from "./components/loading";
import Login from "./components/login/login";
import RightSideBar from "./components/right.sideBar";
import Pages from "./pages";

function App() {
  const [count, setCount] = useState();

  const location = window.location.pathname;

  if (location == "/login") return <Login />;

  return (
    <Stack w="full" alignItems="center" justifyContent="center">
      <HStack
        w="full"
        maxW="1250px"
        justifyContent="space-between"
        spacing="0"
        p="15px"
        alignItems="start"
      >
        <Image
          pos="absolute"
          top="0"
          left="0"
          zIndex={-1}
          src="/back.svg"
          h="100vh"
          objectFit="cover"
        />

        <RightSideBar />
        <Pages place="/" />
        {/* <ProgressLoading />
      <Loading isLoading={false} /> */}
      </HStack>
    </Stack>
  );
}

export default App;
