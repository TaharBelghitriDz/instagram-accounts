import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  captionAdd,
  captionDelete,
  captionGet,
  captionUpdate,
} from "../../../../utils/api/lists/captions.api";
import {
  titleAdd,
  titleDelete,
  titleGet,
  titleUpdate,
} from "../../../../utils/api/lists/titles.api";
import { mediaDelete, mediaGet } from "../../../../utils/api/lists/media.api";
import state from "../../../../utils/state";
import { CustomAddIcon } from "../../../custom.button.component";
import { Historiq, Pen } from "../../../icons";
import Models from "../../models";
import ListsAddTitle from "../../models/lists.add.title";
import ListsRemove from "../../models/lists.remove";
import ListsAddPicture from "../../models/lists.add.picture";

const TitleEdit = () => {
  const [titles, setTitles] = useState<{ title: string; id: number }[]>([]);
  const discloser = useDisclosure();

  useState(() => {
    titleGet.then(({ res, err }) => {
      if (err) return;
      state.changeState({ titles: res?.data });
      setTitles(() => [...res?.data]);
    });
  });

  const Add = () => (
    <ListsAddTitle
      {...discloser}
      name="اضافة عنوان"
      fun={(e: any) => {
        titleAdd({ title: e }).then(({ res, err }) => {
          if (err) return;

          state.changeState({ titles: [...titles, res?.data] });
          setTitles((e) => [...e, res?.data]);
          discloser.onClose();
        });
      }}
    />
  );

  const TextItem = (props: { name: string; id: number }) => {
    const editDiscloser = useDisclosure();
    const removeDiscloser = useDisclosure();

    const Remove = () => (
      <ListsRemove
        {...removeDiscloser}
        fun={() => {
          titleDelete(props.id).then(({ res, err }) => {
            state.changeState({ titles: [...res?.data] });
            setTitles((e) => [...res?.data]);
            removeDiscloser.onClose();
          });
        }}
      />
    );

    const Edit = () => (
      <ListsAddTitle
        {...editDiscloser}
        name="تعديل على عنوان"
        content={props.name}
        fun={(e: any) => {
          titleUpdate({ id: props.id, title: e }).then(({ res, err }) => {
            if (err) return;

            state.changeState({
              titles: [
                ...titles.map((e) => (e.id == res?.data.id ? res?.data : e)),
              ],
            });
            setTitles((e) => [
              ...e.map((e) => (e.id == res?.data.id ? res?.data : e)),
            ]);
            discloser.onClose();
          });
        }}
      />
    );

    return (
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
        <Models {...editDiscloser} content={<Edit />} />
        <Models {...removeDiscloser} content={<Remove />} />

        <Text>{props.name}</Text>
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
            onClick={editDiscloser.onOpen}
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
            onClick={removeDiscloser.onOpen}
          />
        </Stack>
      </HStack>
    );
  };

  return (
    <VStack
      w="full"
      maxW={{ start: "full" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      style={{ margin: "10px" }}
    >
      <Models {...discloser} content={<Add />} />
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        عناوين
      </Text>
      <HStack w="full" spacing={5}>
        <Text cursor="pointer"> العدد {titles.length} </Text>
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
          onClick={discloser.onOpen}
        >
          اضافة
        </Text>
      </HStack>
      <VStack maxH="300px" w="full" overflowY="scroll">
        {titles.map((e, i) => (
          <TextItem key={i * 34} name={e.title} id={e.id} />
        ))}
      </VStack>
    </VStack>
  );
};

const Texts = (props: { selctedId: string }) => {
  const [titles, setTitles] = useState<{ caption: string; id: number }[]>([]);
  const discloser = useDisclosure();

  useEffect(() => {
    captionGet(props.selctedId).then(({ res, err }) => {
      state.changeState({ caption: res?.data });
      setTitles(() => [...res?.data]);
    });
  }, [props.selctedId]);

  const Add = () => (
    <ListsAddTitle
      {...discloser}
      name="اضافة عنوان"
      fun={(e: any) => {
        captionAdd({ id: props.selctedId, data: [{ caption: e }] }).then(
          ({ res, err }) => {
            if (err) return;

            state.changeState({ caption: [...res?.data] });
            setTitles(() => [...res?.data]);
            discloser.onClose();
          }
        );
      }}
    />
  );
  const TextItem = (props2: { name: string; id: number }) => {
    const removeDiscloser = useDisclosure();
    const editDiscloser = useDisclosure();

    const Remove = () => (
      <ListsRemove
        {...removeDiscloser}
        fun={() => {
          captionDelete({ id: props.selctedId, data: [props2.id] }).then(
            ({ res, err }) => {
              if (err) return;

              state.changeState({ titles: [...res?.data] });
              setTitles((e) => [...res?.data]);
              removeDiscloser.onClose();
            }
          );
        }}
      />
    );

    const Edit = () => (
      <ListsAddTitle
        {...editDiscloser}
        name="تعديل على النبدة"
        content={props2.name}
        fun={(e: any) => {
          captionUpdate({ id: props2.id, title: e }).then(({ res, err }) => {
            if (err) return;

            // state.changeState({
            //   titles: [
            //     ...titles.map((e) => (e.id == res?.data.id ? res?.data : e)),
            //   ],
            // });
            setTitles((e) => [
              ...e.map((e) => (e.id == res?.data.id ? res?.data : e)),
            ]);
            discloser.onClose();
          });
        }}
      />
    );
    return (
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
        <Models {...removeDiscloser} content={<Remove />} />
        <Models {...editDiscloser} content={<Edit />} />

        <Text>{props2.name}</Text>
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
            onClick={editDiscloser.onOpen}
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
            onClick={removeDiscloser.onOpen}
          />
        </Stack>
      </HStack>
    );
  };

  return (
    <VStack
      w="full"
      maxW={{ start: "full" }}
      alignItems="start"
      spacing="20px"
      bg="blackAlpha.400"
      p="10px"
      rounded="15px"
      style={{ margin: "10px" }}
    >
      <Models {...discloser} content={<Add />} />

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
      <HStack w="full" spacing={5}>
        <Text cursor="pointer"> العدد {titles.length} </Text>
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
          onClick={discloser.onOpen}
        >
          اضافة
        </Text>
      </HStack>
      <VStack maxH="300px" w="full" overflowY="scroll">
        {titles.map((e, i) => (
          <TextItem key={i * 34} name={e.caption} id={e.id} />
        ))}
      </VStack>
    </VStack>
  );
};

const Titles = () => {
  const titles = state.useStore((e) => e.titles);
  const selected = state.useStore((e) => e.selectedTitle);

  return (
    <Flex w="full" alignItems="center">
      <Menu>
        <MenuButton
          variant="outline"
          as={Button}
          rightIcon={
            <CustomAddIcon color="white" bg="whiteAlpha.100" children="-" />
          }
          rounded="20px"
          _hover={{}}
          border="none"
          bg="whiteAlpha.100"
          p="10px"
          py="25px"
          _active={{ backgroundColor: "whiteAlpha.200" }}
        >
          اختيار عنوان
        </MenuButton>

        <MenuList
          bg="rgb(0,0,0,50%)"
          backdropFilter="blur(30px)"
          p="20px"
          border="none"
          rounded="20px"
        >
          {titles.map((e: any, i: any) => (
            <MenuItem
              key={i * 60}
              bg={selected == e.id ? "gray" : "transparent"}
              _hover={{ bg: "blackAlpha.500" }}
              rounded="10px"
              p="10px"
              px="20px"
              onClick={() => state.changeState({ selectedTitle: e.id })}
            >
              {e.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Divider borderColor="transparent" w="20px" />
      <Text
        p="10px"
        bg="blue.0"
        color="blue.1"
        rounded="10px"
        fontWeight="bold"
      >
        {titles.filter((e: any) => e.id == selected && e)[0]?.title}
      </Text>
    </Flex>
  );
};

const PostsImages = (props: { selctedId: string; is_photo: boolean }) => {
  const discloser = useDisclosure();
  const toast = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const selectedGroup = state.useStore((e) => e.selectedGroup);
  const medias = state.useStore((e) => e.medias);

  useEffect(() => {
    mediaGet(props.selctedId).then(({ res, err }) => {
      if (err) return;
      console.log(res);

      setPosts(() => [
        ...res?.data.filter((e: any) => e.is_photo == props.is_photo && e),
      ]);
    });
  }, [selectedGroup, medias, props.selctedId]);

  const addPictureModel = (
    <ListsAddPicture
      {...discloser}
      for_title
      is_photo={props.is_photo}
      id={props.selctedId}
    />
  );

  const remove = () => {
    mediaDelete({
      id: props.selctedId,
      data: posts
        .filter((e: any) => e.is_photo == props.is_photo && e)
        .map((e) => e.id),
    }).then(({ res, err }) => {
      if (err)
        return toast({
          title: "خطا في الاتصال",
          status: "error",
          isClosable: true,
        });

      toast({
        title: "تم العملية",
        status: "success",
        isClosable: true,
      });

      state.changeState({ medias: [...res?.data] });
      setPosts(() => [
        ...res?.data.filter((e: any) => e.is_photo == props.is_photo && e),
      ]);
    });
  };

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
      <Models content={addPictureModel} {...discloser} />
      <Text
        bg="green.900"
        color="green.100"
        p="20px"
        py="10px"
        rounded="15px"
        fontSize="25px"
      >
        {props.is_photo ? "صور البوسة" : "ريلز"}
      </Text>
      <HStack w="full" justifyContent="space-between">
        <Text cursor="pointer"> العدد {posts.length} </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="red.800"
          color="red.100"
          rounded="10px"
          onClick={remove}
        >
          حذف الكل
        </Text>
        <Text
          cursor="pointer"
          p="10px"
          bg="blue.800"
          color="blue.100"
          rounded="10px"
          onClick={discloser.onOpen}
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
        spacing={4}
      >
        {posts?.map((e, i) => (
          <Image
            src={e.media_link}
            key={i * 50}
            maxH="100px"
            style={{ margin: "5px" }}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default () => {
  const selected = state.useStore((e) => e.selectedTitle);

  return (
    <HStack w="full" flexWrap="wrap" justifyContent="space-between">
      <TitleEdit />
      <Titles />
      {selected !== "" && (
        <>
          <Texts selctedId={selected} />
          <PostsImages selctedId={selected} is_photo={true} />
          <PostsImages selctedId={selected} is_photo={false} />
        </>
      )}
    </HStack>
  );
};
