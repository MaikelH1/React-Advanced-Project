import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const Footer = ({ screenSize }) => {
  return (
    <Flex
      bg={"#171c24"}
      p={2}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Text color={"white"} fontSize={screenSize.width <= 700 && "xx-small"}>
        © 2023 Winc Academy. All rights reserved{" "}
      </Text>
    </Flex>
  );
};
