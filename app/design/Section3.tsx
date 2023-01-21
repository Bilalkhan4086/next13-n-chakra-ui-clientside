import { Stack, Text, HStack, StackProps, Box } from "@chakra-ui/react";
import React from "react";
import PayBackIcon from "../../icons/PayBackIcon";
import SetUpFeeIcon from "../../icons/SetUpFeeIcon";
import PermnentIcon from "../../icons/PermnentIcon";
interface CardProps extends StackProps {
  icon: React.ReactNode;
}

const CustomCard = (props: CardProps) => {
  const { children, icon } = props;
  return (
    <HStack width={["382px", "382px", "482px", "unset"]} spacing={[7, 7, 7, 5]}>
      <Box>{icon}</Box>
      <Text
        fontSize="18px"
        maxW={["unset", "unset", "unset", "220px"]}
        fontWeight={700}
      >
        {children}
      </Text>
    </HStack>
  );
};

const Section3 = () => {
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      justifyContent={"center"}
      display="flex"
      alignItems={"center"}
      marginTop={16}
      marginBottom={16}
      spacing={8}
    >
      <CustomCard icon={<PayBackIcon />}>
        30 days money back Guarantee
      </CustomCard>
      <CustomCard icon={<SetUpFeeIcon />}>
        No setup fees 100% hassle-free
      </CustomCard>
      <CustomCard icon={<PermnentIcon />}>
        No monthly subscription Pay once and for all
      </CustomCard>
    </Stack>
  );
};

export default Section3;
