import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const Gift = ({ image, price, fun }) => {
  return (
    <>
      <Box
        borderRadius={"5px"}
        minWidth="250px"
        bgColor={"white"}
        paddingBottom={"1"}
      >
        <img src={image} alt="image"  width="100%" />
        <Flex justifyContent={"space-between"} p="2" paddingEnd={"2"} marginTop='3'>
          <Text textAlign={"left"} fontWeight="500" p={"2"}>
            {`$${price.toFixed(2)}`}
          </Text>

          <Button
            leftIcon={<Icon as={BiShoppingBag} fontSize="lg" />}
            color="white"
            bg={"blue.500"}
            fontSize="xs"
            _hover='none'
            onClick={()=>fun({image, price})}
          >
            <Link to='/cart'>ADD TO BAG</Link> 
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Gift;
