import {
  HStack,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { loginFun } from "../../utils/api/login.api";
import { UserIcon } from "../icons";
import { InputProps } from "./login.inputs.component";

export default () => {
  const [isError, setError] = useState({ name: "", place: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [{ email, password }, setInputs] = useState({
    password: "",
    email: "",
  });

  const toast = useToast();

  const login = () => {
    setIsLoading(() => true);

    loginFun(
      new URLSearchParams({
        username: email,
        password,
        grant_type: "",
        scope: "",
        client_id: "",
        client_secret: "",
      })
    ).then(async ({ res, err }) => {
      setIsLoading(() => false);

      if (!res?.data || err)
        return (
          setError(() => ({
            name: "connection error",
            place: "notification",
          })),
          toast({ status: "error", title: "خطا في الارسال", duration: 2000 })
        );

      localStorage.setItem(
        "token",
        `${res.data.token_type} ${res.data.access_token}`
      );
      window.location.replace("/");
    });
  };

  return (
    <VStack
      alignItems="center"
      justifyContent="start"
      w="full"
      h="full"
      spacing="10%"
      display={{ start: "flex", md: "none" }}
      pb="50px"
    >
      <Stack
        w="full"
        p="20px"
        bgImage="/side.back.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        alignItems="center"
        justifyContent="start"
        backgroundPosition="bottom"
        display={{ start: "flex", md: "none" }}
      >
        <VStack
          h="300px"
          maxW="500px"
          spacing="30px"
          alignItems="start"
          justifyContent="center"
        >
          {/* <Text
            p="20px"
            bg="rgb(260,260,260,10%)"
            rounded="10px"
            backdropFilter="blur(20px)"
            shadow="black"
          >
            يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc
            يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا صض ا صاثض صثصثنضصصc
            يننمي يي تيت
          </Text> */}
        </VStack>
      </Stack>

      <VStack
        spacing="20px"
        w="90%"
        bg="rgb(260,260,260,5%)"
        backdropFilter="blur(5px)"
        p="20px"
        rounded="20px"
      >
        {/* <Text fontSize="30px" w="full">
          مرحبا بك مجددا
        </Text>
        <Text color="whiteAlpha.400" pb="20px">
          صنى صا صض ا صاثض صثصثنضصصc يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا
          صض ا صاثض صثصثنض
        </Text> */}
        <Input
          {...InputProps}
          placeholder="الايمايل"
          value={email}
          onChange={({ target: { value } }) =>
            setInputs((e) => ({ ...e, email: value }))
          }
        />
        <Input
          {...InputProps}
          type="password"
          placeholder="باسوورد"
          value={password}
          onChange={({ target: { value } }) =>
            setInputs((e) => ({ ...e, password: value }))
          }
        />

        <Stack
          w="full"
          cursor="pointer"
          color="blue.100"
          alignItems="center"
          pt="20px"
        >
          <HStack
            px="20px"
            py="10px"
            bg="blue.900"
            rounded="10px"
            spacing="20px"
            w="200px"
            onClick={login}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <Fragment>
                <Text>تسجيل الدخول</Text>
                <UserIcon />
              </Fragment>
            )}
          </HStack>
        </Stack>
      </VStack>
    </VStack>
  );
};
