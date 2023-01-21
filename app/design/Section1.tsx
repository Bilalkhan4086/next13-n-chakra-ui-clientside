import { Stack, Text, Heading } from "@chakra-ui/react";
import React from "react";

const Section1 = () => {
  return (
    <Stack
      color={"gray.50"}
      align={["flex-start", "flex-start", "center", "center"]}
      pt={28}
      paddingLeft={[3, 4, 5, 0]}
      bgColor={"purple.600"}
      height="397px"
    >
      <Heading
        fontWeight={800}
        marginRight={"1"}
        fontSize={["3xl", "3xl", "4xl", "5xl"]}
      >
        Simple pricing for your business
      </Heading>
      <Text
        marginRight={"1"}
        fontWeight={500}
        fontSize={["lg", "xl", "xl", "2xl"]}
      >
        Plans that are carefully creafted to suit your business.
      </Text>
    </Stack>
  );
};

export default Section1;
