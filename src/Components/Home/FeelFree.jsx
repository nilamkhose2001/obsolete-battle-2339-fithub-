import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const FeelFree = () => {
  return (
    <Flex
      background={"linear-gradient(to bottom right,#3d97ce 0%,#12debb 100%)"}
      w="100%"
      // h="500px"
      justify={"center"}
      align={"center"}
      gap={{ lg: "100px", md: "60px", base: "60px" }}
      flexDirection={{ lg: "row", md: "column", base: "column" }}
    >
      <Flex
        justify={{
          lg: "flex-start",
          md: "center",
          sm: "center",
          base: "center",
        }}
        align={{ lg: "flex-start", md: "center", sm: "center", base: "center" }}
        flexDirection={{ lg: "column", md: "column", base: "column" }}
        w={{ lg: "40%", md: "", base: "" }}
      >
        <Heading color={"white"}>Feel Great.</Heading>
        <Heading color={"white"}>Body and Mind.</Heading>
        <Box w={{ lg: "100%", md: "80%" }} m="auto" mt="10px">
          <Text
            textAlign={{
              lg: "left",
              md: "center",
              sm: "center",
              base: "center",
            }}
            color={"white"}
            fontSize={"25px"}
          >
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </Text>
        </Box>
        <Button
          w="150px"
          h="60px"
          fontSize={"14px"}
          mt="10px"
          background={"#212432"}
          color={"white"}
          _hover={{ background: "#212432", color: "white" }}
        >
          Join Now
        </Button>
      </Flex>
      <Box w={{ lg: "40%", md: "100%", base: "100%" }}>
        <Image
          w={{ lg: "auto", md: "100%", sm: "100%", base: "100%" }}
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"
        />
      </Box>
    </Flex>
  );
};

export default FeelFree;
