import { HStack, Text, useDisclosure } from "@chakra-ui/react";
import React, { Component, ReactNode, useState } from "react";
import { ActionIcon } from "../custom.button.component";
import Models from "../models";
import addAccount from "../models/add.account";
import AddAccount from "../models/add.account";
import addLinkAccounts from "../models/add.link.accounts";
import changeAccountsBio from "../models/change.accounts.bio";
import ChangeAccountsNames from "../models/change.accounts.names";
import changeAccountsPictures from "../models/change.accounts.pictures";
import changeAccountsStatus from "../models/change.accounts.status";
import removeAccounts from "../models/remove.accounts";

export default () => {
  const discloser = useDisclosure();

  const [Content, setContent] = useState<JSX.Element>(
    <AddAccount {...discloser} />
  );

  const view = (Comp: React.ComponentType<any>) => {
    setContent(<Comp {...discloser} />);
    discloser.onOpen();
  };

  return (
    <HStack alignItems="start" flexWrap="wrap" justifyContent="space-evenly">
      <Models {...discloser} content={Content} />
      <ActionIcon
        text="تغيير اسم الحسابات​"
        onClick={() => view(ChangeAccountsNames)}
      />
      <ActionIcon text="إضافة حسابات" onClick={() => view(addAccount)} />
      <ActionIcon
        text=" تغيير نبذة عن الحسابات​"
        onClick={() => view(changeAccountsBio)}
      />
      <ActionIcon
        text="تغيير صور الحسابات​"
        onClick={() => view(changeAccountsPictures)}
      />
      <ActionIcon
        text="إضافة رابط للحسابات​"
        onClick={() => view(addLinkAccounts)}
      />
      <ActionIcon
        text="تغيير وضع الحسابات​"
        onClick={() => view(changeAccountsStatus)}
      />
      <ActionIcon text="حذف الحسابات​" onClick={() => view(removeAccounts)} />
    </HStack>
  );
};
