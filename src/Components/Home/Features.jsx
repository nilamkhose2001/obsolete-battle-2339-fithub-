import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <SimpleGrid
      h="auto"
      w="100%"
      gap={"5px"}
      mt="20px"
      columns={{ lg: 2, md: 2, sm: 1, base: 1 }}
    >
      <Box pt="40px" background={"#F0F4F6"}>
        <Heading fontFamily={"sans-serif"} textAlign={"center"}>
          Workout Videos
        </Heading>
        <Box w="60%" m="auto" mt="10px" mb="20px">
          <Text textAlign={"center"}>
            Exercise with certified personal trainers whether you’re at home or
            on the road.
          </Text>
        </Box>
        <Box textAlign={"center"} color={"#4296CB"} pb="30px" w="30%" m="auto">
          <Link m="auto" to="">
            Find a Workout
          </Link>
        </Box>
        <Image
          w="100%"
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"
        />
      </Box>
      <Box pt="40px" background={"#F9FCFD"}>
        <Heading fontFamily={"sans-serif"} textAlign={"center"}>
          Programs
        </Heading>
        <Box w="60%" m="auto" mt="10px" mb="20px">
          <Text textAlign={"center"}>
            Exercise with certified personal trainers whether you're at home or
            on the road.
          </Text>
        </Box>
        <Box textAlign={"center"} color={"#4296CB"} pb="30px" w="30%" m="auto">
          <Link m="auto" to="">
            Browse All Programs
          </Link>
        </Box>
        <Image
          w="100%"
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"
        />
      </Box>
      <Box pt="40px" background={"#000000"}>
        <Heading color={"white"} fontFamily={"sans-serif"} textAlign={"center"}>
          Wellness Articles
        </Heading>
        <Box w="60%" m="auto" mt="10px" mb="20px">
          <Text color={"white"} textAlign={"center"}>
            Exercise with certified personal trainers whether you’re at home or
            on the road.
          </Text>
        </Box>
        <Box textAlign={"center"} color={"#4296CB"} pb="30px" w="30%" m="auto">
          <Link m="auto" to="">
            Learn From Experts
          </Link>
        </Box>
        <Image
          w="100%"
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"
        />
      </Box>
      <Box pt="40px" background={"#D8D9DA"}>
        <Heading fontFamily={"sans-serif"} textAlign={"center"}>
          Healthy Recipes
        </Heading>
        <Box w="60%" m="auto" mt="10px" mb="20px">
          <Text textAlign={"center"}>
            Exercise with certified personal trainers whether you’re at home or
            on the road.
          </Text>
        </Box>
        <Box textAlign={"center"} color={"#4296CB"} pb="30px" w="30%" m="auto">
          <Link m="auto" to="">
            Find a Recipe
          </Link>
        </Box>
        <Image
          w="100%"
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"
        />
      </Box>
    </SimpleGrid>
  );
};

export default Features;
