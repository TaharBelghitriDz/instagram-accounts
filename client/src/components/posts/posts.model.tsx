import {
  AlertDialog,
  AlertDialogBody,
  Checkbox,
  CloseButton,
  HStack,
  Input,
  Stack,
  Text,
  useOutsideClick,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useRef, useState } from "react";
import { Add } from "../icons";
import { InputProps as defaultProps } from "@chakra-ui/react";
import { InputProps as Props } from "../login/login.inputs.component";
import state from "../../utils/state";
import { postsAdd, postsGet, postsUpdate } from "../../utils/api/posts.api";
import { Titles } from "./posts.titels";
import { Post } from ".";

const AccountsSettingsInput = (props: defaultProps) => (
  <Input {...props} {...Props} _hover={{}} _placeholder={{ color: "gray" }} />
);

const AccountsGroupElmntProps = {
  w: "full",
  alignItems: "start",
  spacing: "10px",
  p: "10px",
  rounded: "15px",
};

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  post?: Post;
}) => {
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  window.scrollTo(0, 0);

  return (
    <AlertDialog
      {...props}
      leastDestructiveRef={ref}
      size="full"
      preserveScrollBarGap
    >
      <AlertDialogBody
        pos="absolute"
        top="0px"
        left="0px"
        w="100vw"
        minH="100vh"
        h="full"
        as={HStack}
        alignItems="center"
        justifyContent="center"
        bg={{ start: "rgb(0,0,0,30%)" }}
      >
        <Stack
          w="full"
          h="full"
          alignItems="center"
          justifyContent="start"
          spacing="0"
        >
          <Stack
            maxW="500px"
            w="full"
            h="auto"
            p="20px"
            bg="rgb(0,0,0,50%)"
            backdropFilter="blur(20px)"
            rounded="20px"
            spacing="0"
            justifyContent="center"
            alignItems="center"
            ref={ref}
            style={{ margin: "30px" }}
          >
            <VStack w="full" spacing="30px">
              <Inputs onClose={props.onClose} post={props.post} />
            </VStack>
          </Stack>
        </Stack>
      </AlertDialogBody>
    </AlertDialog>
  );
};

const Inputs = (props: { onClose: () => void; post?: Post }) => {
  const toast = useToast();
  const titles = state.useStore((e) => e.titles);
  const groups = state.useStore((e) => e.groups);

  console.log(titles);

  groups.length < 1 &&
    (props.onClose(),
    toast({ status: "error", isClosable: true, title: "اضف مجموعات" }));

  titles.length < 1 &&
    (props.onClose(),
    toast({ status: "error", isClosable: true, title: "اضف عناوين" }));

  const [selected, setSelected] = useState(
    !props.post
      ? { title: "", group: "" }
      : {
          title: titles.filter((e: any) => e.id == props.post?.title_id && e)[0]
            .title,
          group: groups.filter((e: any) => e.id == props.post?.group_id && e)[0]
            .name,
        }
  );

  const [value, setValue] = useState(props.post?.time_between_posting || 10);
  const [isPhoto, setIsPhoto] = useState<boolean>(props.post?.is_photo || true);

  const fun = () => {
    const title_id = titles.filter((e: any) => e.title == selected.title)[0].id;
    const group_id = groups.filter((e: any) => e.name == selected.group)[0].id;
    const time_between_posting = value;
    const is_photo = isPhoto;
    const body = { title_id, group_id, time_between_posting, is_photo };

    if (!props.post)
      return postsAdd(body).then(({ err, res }) => {
        if (err) return;

        return postsGet.then(({ err, res }) => {
          console.log(res);

          if (err) return;

          state.changeState({ posts: res?.data });
          props.onClose();
        });
      });

    postsUpdate({ data: body, id: (props.post as any).id }).then(
      ({ err, res }) => {
        if (err) return;

        return postsGet.then(({ err, res }) => {
          console.log(res);

          if (err) return;

          state.changeState({ posts: res?.data });
          props.onClose();
        });
      }
    );
  };

  return (
    <Fragment>
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">إضافة عنوان للنشر</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <HStack {...AccountsGroupElmntProps}>
        <Titles
          value={selected.title}
          name="العنوان"
          names={state.useStore((e) => e.titles)}
          fun={(r: string) => {
            setSelected((e) => ({ ...e, title: r }));
          }}
        />
        <Titles
          value={selected.group}
          name="المجموعة"
          names={state.useStore((e) => e.groups)}
          fun={(r: string) => {
            setSelected((e) => ({ ...e, group: r }));
          }}
        />
      </HStack>
      {/* <VStack {...AccountsGroupElmntProps}>
        <Text> نشر كل</Text>
        <HStack w="90%" justifyContent="" spacing="10px">
          <AccountsSettingsInput
            w="30%"
            type="number"
            value={value.toString()}
            onChange={({ target: { value } }) =>
              setValue(() => parseInt(value))
            }
          />
          <Text>دقيقة</Text>
        </HStack>
      </VStack> */}
      <VStack {...AccountsGroupElmntProps}>
        <Text>اختيار النوع</Text>
        <HStack spacing="10px">
          <Checkbox
            size="lg"
            p="10px"
            type="checkbox"
            isChecked={isPhoto}
            onChange={() => setIsPhoto(() => true)}
          >
            بوسة
          </Checkbox>
          <Checkbox
            size="lg"
            p="10px"
            type="checkbox"
            isChecked={!isPhoto}
            onChange={() => setIsPhoto(() => false)}
          >
            ريلز
          </Checkbox>
        </HStack>
      </VStack>
      <HStack w="full" justifyContent="space-between">
        <HStack
          spacing="20px"
          h="50px"
          bg="green.900"
          color="green.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
          onClick={fun}
        >
          <Text>تاكيد</Text>
          <Add h="24px" w="24px" />
        </HStack>
        <HStack
          spacing="20px"
          h="50px"
          bg="red.900"
          color="red.100"
          p="20px"
          rounded="15px"
          cursor="pointer"
          onClick={() => props.onClose()}
        >
          <Text>الغاء</Text>
          <CloseButton h="24px" w="24px" />
        </HStack>
      </HStack>
    </Fragment>
  );
};
