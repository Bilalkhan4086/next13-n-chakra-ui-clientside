"use client";
import React from "react";
import { Heading, Text, Link, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <VStack color={"gray.700"} spacing={8} marginTop={["10vh"]}>
      <Heading
        textAlign="center"
        marginX={4}
        fontSize={["xl", "2xl", "3xl", "3xl"]}
      >
        Welcome to app designed by Chakra UI
      </Heading>
      <Text
        align="center"
        paddingLeft={8}
        paddingRight={8}
        fontSize={["xs", "sm", "sm", "md"]}
      >
        This is demo design app build with{" "}
        <Link href="https://nextjs.org/blog/next-13" isExternal>
          NEXT 13
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com" isExternal>
          CHAKRA-UI
        </Link>
      </Text>
      <Button
        color="gray.50"
        bgColor="gray.700"
        onClick={() => {
          router.push("/design");
        }}
        width={"200px"}
        sx={{
          "&:hover": {
            color: "gray.700",
          },
        }}
      >
        Design
      </Button>
    </VStack>
  );
}
