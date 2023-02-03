import { Stack, Text, VStack } from "@chakra-ui/react";

export default (props: { text: string }) => {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      pos="relative"
      spacing="0"
    >
      <VStack
        pos="absolute"
        textAlign="center"
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Text>{props.text}</Text>
        <Text>{randomNumber}0%</Text>
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
