import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const FbPlus = () => {
  return (
    <Box
      mt="10px"
      w="100%"
      background={"linear-gradient(130deg,#ece6f8 0%,#f9e7f6 100%)"}
      h="500px"
      pt="50px"
    >
      <Box w={{ lg: "30%", md: "50%", sm: "50%", base: "50%" }} m="auto">
        <Heading fontFamily="sans-serif" color={"#212432"} textAlign={"center"}>
          Introducing
        </Heading>
        <Heading
          mt="10px"
          fontFamily="sans-serif"
          fontWeight={"bold"}
          textAlign={"center"}
        >
          FB{" "}
          <Text color={"#4296Cb"} display={"inline"}>
            PLUS
          </Text>{" "}
          Passes
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={"16px"}
          color={"#4E5262"}
          mt="10px"
        >
          Passes give you full access to everything FB Plus has to offer,
          without a long-term subscription. Choose a pass that fits your budget
          and your schedule.
        </Text>
        <Button
          display={"block"}
          w="150px"
          h="50px"
          m="auto"
          background={"#212432"}
          color={"white"}
          mt="20px"
        >
          BUY A PASS
        </Button>
      </Box>
      <Image
        display={"block"}
        m="auto"
        src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"
      />
    </Box>
  );
};

export default FbPlus;
