import { HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Loading, { ProgressLoading } from "./components/loading";
import Login from "./components/login/login";
import RightSideBar from "./components/right.sideBar";

function App() {
  const [count, setCount] = useState();

  const location = window.location.pathname;

  // if (location == "/login") return <Login />;

  return (
    <HStack w="full" justifyContent="space-between" spacing="0">
      <Image
        pos="absolute"
        top="0"
        left="0"
        zIndex={-1}
        src="/back.svg"
        h="100vh"
        objectFit="cover"
      />
      <Login />
      {/* <Text>ني يتيت يتي تي يت</Text>
      <Login />
      <Loading isLoading={true} />
      <RightSideBar /> */}
      {/* <ProgressLoading />
      <Loading isLoading={false} /> */}
    </HStack>
  );
}

export default App;
