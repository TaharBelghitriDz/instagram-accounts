import { Divider, Image, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ProgressLoadingCompnent } from "./components/loading";
import Login from "./components/login/login";
import Navbar from "./components/navbar";
import Pages from "./pages";
import { initialData } from "./utils/api/accounts.api";

function App() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const location = window.location.pathname;

  if (location == "/login") return <Login />;

  const token = localStorage.getItem("token");
  if (!token && location != "/login") window.location.replace("/login");

  token &&
    useState(() =>
      initialData.then((res) => {
        // if (!res)
        //   return (
        //     toast({
        //       status: "warning",
        //       isClosable: true,
        //       description: "لا توجد مجموعات ",
        //     }),
        //)
        setIsLoading(() => false);
      })
    );

  if (isLoading) return <ProgressLoadingCompnent />;

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

        <Pages place={location} />
      </Stack>
    </Stack>
  );
}

export default App;
