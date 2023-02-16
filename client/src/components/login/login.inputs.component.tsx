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
import queryString from "query-string";
import { UserIcon } from "../icons";

export const InputProps = {
  variant: "filled",
  bg: "rgb(260,260,260,10%)",
  color: "white",
  fontSize: "20px",
  rounded: "10px",
  _hover: { backgroundColor: "rgb(0,0,0,10%)" },
  maxW: "400px",
  _placeholder: { color: "#eeeeee" },
};

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

      console.log(err);
      console.log(res);

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

      // console.log(localStorage.getItem("token"));

      // function for response
    });
  };
  return (
    <Stack
      w="40%"
      p="20px"
      alignItems="center"
      justifyContent="center"
      display={{ start: "none", md: "flex" }}
    >
      <VStack
        spacing="20px"
        maxW="400px"
        w="full"
        bg="rgb(260,260,260,5%)"
        backdropFilter="blur(5px)"
        p="20px"
        rounded="20px"
      >
        <Text fontSize="30px" w="full">
          مرحبا بك مجددا
        </Text>
        <Text color="whiteAlpha.400" pb="20px">
          صنى صا صض ا صاثض صثصثنضصصc يننمي يي تيت ي تي يت ي ي ي ي ينيك ثص صنى صا
          صض ا صاثض صثصثنض
        </Text>
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
    </Stack>
  );
};
