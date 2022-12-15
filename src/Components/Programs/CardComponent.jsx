import { Box, Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";

export default function CardComponent() {
  const [isSmallerThan700] = useMediaQuery("(max-width: 380px)");

  return (
    <Box
      w={!isSmallerThan700 ? "300px" : "100%"}
      bg="white"
      border="3px solid #F0F4F6"
      _hover={{ border: "3px solid #4296CB" }}
    >
      <Image
        src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_21_fb-meal-plan-eat-real-food-and-feel-great.jpg"
        width="100%"
        maxH="168px"
      />
      <Box margin="auto" w="90%" pt="5" pb="8">
        <Text color="#4A9ACD" mb="1" fontSize="11px">
          2 WEEK CHALLENGE - 23 MIN/DAY
        </Text>
        <Text fontWeight="bold" fontSize="15px">
          Simply Stretch Challenge - Two Week Stretching Workout Plan
        </Text>
      </Box>
      <Flex py="3" px="2" justifyContent="space-between">
        <Box>
          <Text>As Low As</Text>
          <Text fontWeight="semibold">$7.99</Text>
        </Box>
        <Box>
          <Button bg="#4296CB" color="white" height="100%">
            <span style={{ width: "25px", height: "30px" }}>
              <BiShoppingBag size="100%" />
            </span>
            &nbsp; ADD TO BAG
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
