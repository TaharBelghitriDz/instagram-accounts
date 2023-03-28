import { Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import state from "../utils/state";

export default (props: {
  text: string;
  onclick: () => void;
  index?: number;
  sum: number;
}) => {
  const randomNumber = props.index || 0;
  const accountsView = state.useStore((e) => e.accountsView);
  const isSelected = accountsView.includes(props.text);

  return (
    <Stack
      as={motion.div}
      animate={isSelected ? { scale: 1.2 } : {}}
      bg={isSelected ? "black" : ""}
      rounded="full"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      spacing="0"
      cursor="pointer"
      onClick={props.onclick}
    >
      <VStack
        pos="absolute"
        textAlign="center"
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Text>{props.text}</Text>
        <Text>{randomNumber}0%</Text>
        <Text>{props.sum}</Text>
      </VStack>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#454545"
          strokeWidth="5"
          pathLength="100"
          strokeDasharray="100"
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E32727"
          strokeWidth="5"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={Math.floor((randomNumber * 100) / 10) + 100}
          strokeLinecap="round"
        />
      </svg>
    </Stack>
  );
};
