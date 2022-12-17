import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Community = () => {
  return (
    <Box
      w="100%"
      h="720px"
      bgImage="url('https://cloudfront.fitnessblender.com/assets/img/homepage/community-1440.webp')"
      // bgPosition="center"
      bgRepeat="no-repeat"
      mt="20px"
      mb="20px"
    >
      <Box textAlign={"center"} w="30%" m="auto" pt="50px">
        <Heading pb="20px" fontFamily={"sans-serif"}>
          Supportive Community
        </Heading>
        <Text pb="10px">
          Stay motivated and engaged with a little help from a supportive
          community of other members.
        </Text>
        <Link color={"blue"} href="">
          Become a Member
        </Link>
      </Box>
    </Box>
  );
};

export default Community;
