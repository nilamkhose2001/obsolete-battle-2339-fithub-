import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../Images/Fithub.png";

const Footer = () => {
  return (
    <Box py={10} background={"#212432"} w="100%" h="auto">
      <Flex
        justify={"space-between"}
        w="90%"
        m="auto"
        flexDirection={{
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
        gap={5}
      >
        <Box w="30%">
          <Image w="200px" h="100px" src={logo} />
          <Text color={"grey"}>Workout Complete</Text>
        </Box>
        <Flex
          flexDirection={{ lg: "row", md: "row", sm: "row", base: "column" }}
          color="white"
          w="80%"
          gap="30px"
          h="auto"
        >
          <Box w={{ lg: "30%", md: "30%", sm: "30%", base: "100%" }}>
            <Text mt="20px" fontWeight={"bold"}>
              WORKOUTS
            </Text>
            <Text color={"grey"} mt="20px">
              WORKOUT VIDEOS
            </Text>
            <Text color={"grey"} mt="20px">
              CUSTOM WORKOUTS
            </Text>
            <Text color={"grey"} mt="20px">
              PROGRAMS
            </Text>
            <Text color={"grey"} mt="20px">
              WORKOUT PROGRAMS
            </Text>
            <Text color={"grey"} mt="20px">
              MEAL PLANS
            </Text>
            <Text color={"grey"} mt="20px">
              PILOT PROGRAMS
            </Text>
            <Text color={"grey"} mt="20px">
              WORKOUT VIDEOS
            </Text>
            <Text color={"grey"} mt="20px">
              ROUTINES
            </Text>
          </Box>
          <Box w={{ lg: "30%", md: "30%", sm: "30%", base: "100%" }}>
            <Text mt="20px" fontWeight={"bold"}>
              HEALTHY LIVING
            </Text>
            <Text color={"grey"} mt="20px">
              FITNESS
            </Text>
            <Text color={"grey"} mt="20px">
              HEALTH
            </Text>
            <Text color={"grey"} mt="20px">
              NUTRITION
            </Text>
            <Text color={"grey"} mt="20px">
              HEALTHY RECIPES
            </Text>
            <Text color={"grey"} mt="20px">
              EXPERTS
            </Text>
          </Box>
          <Box w={{ lg: "30%", md: "30%", sm: "30%", base: "100%" }}>
            <Text mt="20px" fontWeight={"bold"}>
              ABOUT
            </Text>
            <Text color={"grey"} mt="20px">
              CAREERS
            </Text>
            <Text color={"grey"} mt="20px">
              TUTORIALS
            </Text>
            <Text color={"grey"} mt="20px">
              OUR TEAM
            </Text>
            <Text color={"grey"} mt="20px">
              B2B OPTIONS
            </Text>
          </Box>
          <Box w={{ lg: "30%", md: "30%", sm: "30%", base: "100%" }}>
            <Text mt="20px" fontWeight={"bold"}>
              MEMBERSHIP
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              FB PLUS
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              COMMUNITY
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              BLOG
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              CONTACT US
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              FAQ'S
            </Text>
            <Text fontWeight={"bold"} color={"grey"} mt="20px">
              STORE
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
