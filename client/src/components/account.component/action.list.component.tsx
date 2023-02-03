import { HStack, Text, useDisclosure } from "@chakra-ui/react";
import { ActionIcon } from "../custom.button.component";
import Models from "../models";
import AddAccount from "../models/add.account";

export default () => {
  const discloser = useDisclosure();

  return (
    <HStack alignItems="start" flexWrap="wrap" justifyContent="space-evenly">
      <Models {...discloser} content={<AddAccount {...discloser} />} />
      <ActionIcon
        text="تغيير اسم الحسابات​"
        onClick={() => discloser.onToggle()}
      />
      <ActionIcon text="إضافة حسابات" onClick={() => discloser.onToggle()} />
      <ActionIcon
        text=" تغيير نبذة عن الحسابات​"
        onClick={() => discloser.onToggle()}
      />
      <ActionIcon
        text="تغيير صور الحسابات​"
        onClick={() => discloser.onToggle()}
      />
      <ActionIcon
        text="إضافة رابط للحسابات​"
        onClick={() => discloser.onToggle()}
      />
      <ActionIcon
        text="تغيير وضع الحسابات​"
        onClick={() => discloser.onToggle()}
      />
      <ActionIcon text="حذف الحسابات​" onClick={() => discloser.onToggle()} />
    </HStack>
  );
};
