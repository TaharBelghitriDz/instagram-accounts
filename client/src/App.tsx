import { Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Loading, { ProgressLoading } from "./components/loading";
import Login from "./components/login/login";
import Navbar from "./components/navbar";
import RightSideBar from "./components/navbar/right.sideBar";
import Pages from "./pages";

function App() {
  const [count, setCount] = useState();

  const location = window.location.pathname;

  if (location == "/login") return <Login />;

  return (
    <Stack w="full" alignItems="center" justifyContent="center">
      <Stack
        w="full"
        maxW="1250px"
        justifyContent="space-between"
        spacing="0"
        p="15px"
        alignItems="start"
        flexDir={{ start: "column", lg: "row" }}
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

        <Navbar />
        <Divider
          borderColor="transparent"
          w="0px"
          p={{ start: "10px", lg: "20px" }}
        />

        <Pages place="/" />
        {/* <ProgressLoading />
      <Loading isLoading={false} /> */}
      </Stack>
    </Stack>
  );
}

export default App;
