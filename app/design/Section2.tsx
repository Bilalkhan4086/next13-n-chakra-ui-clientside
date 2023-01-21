import {
  Box,
  Button,
  Text,
  HStack,
  StackProps,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const CustomListItem = (props: StackProps) => {
  const { children } = props;
  return (
    <HStack spacing={4}>
      <CheckCircleIcon fontSize={"18px"} color="purple.600" />
      <Text fontSize={"18px"}>{children}</Text>
    </HStack>
  );
};

const Section2 = () => {
  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      bgColor={"gray.50"}
      borderRadius={"10px"}
      width={["382px", "382px", "482px", "unset"]}
      marginX={"4"}
    >
      <Box
        bgColor="#F0EAFB"
        borderRadius={[
          "10px 10px 0px 0px",
          "10px 10px 0px 0px",
          "10px 10px 0px 0px",
          "10px 0px 0px 10px",
        ]}
        padding={12}
      >
        <Text align={"center"} fontWeight={800} color="#171923" fontSize="24px">
          Premium PRO
        </Text>
        <Text
          align={"center"}
          fontWeight={800}
          color="#171923"
          fontSize={"5xl"}
        >
          $329
        </Text>
        <Text align={"center"} fontWeight={500} color="#171923" fontSize={"xl"}>
          billed just once
        </Text>
        <Button
          width="282px"
          color="white"
          height={"51px"}
          display="flex"
          justifyContent="center"
          margin={"auto"}
          marginTop={6}
          backgroundColor={"purple.600"}
          sx={{
            "&:hover": {
              color: "purple.600",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box p={[7, 7, 8, 12]}>
        <Text
          fontSize={"xl"}
          marginBottom={4}
          width={["336px", "336px", "460px", "unset"]}
        >
          Access these features when you get this pricing package for your
          business.
        </Text>

        <Stack as="ul">
          <CustomListItem>
            International calling and messaging API
          </CustomListItem>
          <CustomListItem>Additional phone number</CustomListItem>
          <CustomListItem>Automated messages and Zapier</CustomListItem>
          <CustomListItem>24/7 support and consulting</CustomListItem>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Section2;
