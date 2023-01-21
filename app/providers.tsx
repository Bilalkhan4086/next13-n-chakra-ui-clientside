"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
};

export default Providers;
