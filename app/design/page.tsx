"use client";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Design = () => {
  return (
    <Box>
      <Section1 />
      <VStack marginTop={["-135px", "-135px", "-140px", "-100px"]}>
        <Section2 />
      </VStack>
      <Section3 />
    </Box>
  );
};

export default Design;
