import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
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
  // useOutsideClick({
  //   ref: ref,
  //   handler: () => props.onClose(),
  // });

  // window.scrollTo(0, 0);

  return (
    <AlertDialog {...props} scrollBehavior="outside" leastDestructiveRef={ref}>
      <AlertDialogOverlay />
      <AlertDialogContent
        as={Stack}
        bg="rgb(200,200,200,5%)"
        rounded="20px"
        py="20px"
        backdropFilter="blur(50px)"
      >
        <AlertDialogBody>
          <VStack w="full" spacing="30px">
            <Inputs onClose={props.onClose} post={props.post} />
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Inputs = (props: { onClose: () => void; post?: Post }) => {
  const toast = useToast();
  const postsstate = state.useStore((e) => e.posts);
  const titles = state.useStore((e) => e.titles);
  const groups = state.useStore((e) => e.groups);

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
    let title_id = titles.filter((e: any) => e.title == selected.title);
    let group_id = groups.filter((e: any) => e.name == selected.group);
    const time_between_posting = value;
    const is_photo = isPhoto;
    const is_active = true;

    if (!title_id[0] || !group_id[0]) {
      !title_id[0] &&
        toast({ status: "error", isClosable: true, title: "اختر عنوان" });
      !group_id[0] &&
        toast({ status: "error", isClosable: true, title: "اختر مجموعة" });

      return;
    }

    title_id = title_id[0].id;
    group_id = group_id[0].id;
    const body = {
      title_id,
      group_id,
      time_between_posting,
      is_photo,
      is_active,
    };

    if (!props.post)
      return postsAdd(body).then(async ({ err, res }) => {
        if (err) return;

        let newState = [...postsstate, res?.data];

        state.changeState({ posts: [...newState] });
        props.onClose();
      });

    postsUpdate({ data: body, id: (props.post as any).id }).then(
      ({ err, res }) => {
        if (err) return;

        return postsGet.then(({ err, res }) => {
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
            // setSelected((e) => ({ ...e, title: r }));
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
          // onClick={fun}
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
