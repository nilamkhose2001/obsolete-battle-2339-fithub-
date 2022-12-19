import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { image, title, subtitle, price } = props;
  return (
    <Link to="/workoutprogram">
      <Box
        w={{ lg: "100%", md: "100%" }}
        bg="white"
        border="3px solid #F0F4F6"
        _hover={{ border: "3px solid #4296CB" }}
      >
        <Image src={image} width="100%" maxH="168px" />
        <Box margin="auto" w="90%" pt="5" pb="8">
          <Text color="#4A9ACD" mb="1" fontSize="11px">
            {title}
          </Text>
          <Text fontWeight="bold" fontSize="15px">
            {subtitle}
          </Text>
        </Box>
        <Flex py="3" px="2" justifyContent="space-between">
          <Box>
            <Text>As Low As</Text>
            <Text fontWeight="semibold">{price}</Text>
          </Box>
          {/* <Box>
          <Button bg="#4296CB" color="white" height="100%">
          <span style={{ width: "25px", height: "30px" }}>
          <BiShoppingBag size="100%" />
            </span>
            &nbsp; ADD TO BAG
            </Button>
          </Box> */}
        </Flex>
      </Box>
    </Link>
  );
};

export default Card;
