import {
  CloseButton,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { mediaAdd } from "../../../utils/api/lists/media.api";
import { profilePicAdd } from "../../../utils/api/lists/profile.pics.api";
import state from "../../../utils/state";
import { Add } from "../../icons";

export default (props: {
  onClose: () => void;
  for_title?: boolean;
  is_photo?: boolean;
  id?: string;
}) => {
  const toast = useToast();
  const [file, setFile] = useState<File>();
  const ref = useRef(null);

  if (file) console.log((file as any)[0].name);

  const fun = async () => {
    const formData = new FormData();
    formData.append("image", (file as any)[0]);

    await axios({
      method: "POST",
      url: "https://api.imgbb.com/1/upload?key=1a35d76d15a4a8c56e74013014094285",
      data: formData,
    })
      .then((e) => {
        const picUrl = e.data.data.display_url;

        console.log(picUrl);
        toast({ status: "loading", duration: 1000, title: "جاري التحميل" });
        props.onClose();

        const uploadTo = () => {
          if (props.for_title)
            return mediaAdd({
              id: props.id,
              data: [{ is_photo: props.is_photo, media_link: picUrl }],
            });

          return profilePicAdd([{ profile_pic_link: picUrl }]);
        };

        uploadTo().then(({ res, err }) => {
          if (err)
            return toast({
              title: "خطا في التحميل",
              status: "error",
              isClosable: true,
            });

          if (props.for_title) state.changeState({ medias: [...res?.data] });
          else state.changeState({ profile_pics: res?.data });

          toast({
            title: "تم التحميل",
            status: "success",
            isClosable: true,
          });
          props.onClose();
        });
      })
      .catch((e) => {
        toast({
          title: "خطا في التحميل",
          status: "error",
          isClosable: true,
        });
      });
  };

  const upload = () => {
    (ref.current as any).click();
  };
  return (
    <VStack w="full" spacing="50px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="30px">اضافة نبذة</Text>
        <CloseButton
          bg="white"
          color="black"
          rounded="full"
          h="40px"
          w="40px"
          onClick={() => props.onClose()}
        />
      </HStack>
      <Text
        bg="green.0"
        color="green.1"
        p="20px"
        py="10px"
        rounded="15px"
        cursor="pointer"
        onClick={upload}
      >
        {!file ? "تحميل صورة" : (file as any)[0].name}
      </Text>
      <Input
        type="file"
        height="0%"
        width="0%"
        position="absolute"
        top="0"
        left="0"
        opacity="0"
        aria-hidden="true"
        accept="image/*"
        ref={ref}
        onChange={({ target: { files } }) => setFile(() => files as any[0])}
      />

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
    </VStack>
  );
};
