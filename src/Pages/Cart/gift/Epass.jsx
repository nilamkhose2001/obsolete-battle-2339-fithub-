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
import { Link, useNavigate } from "react-router-dom";

const Epass = ({ image, day, price, fun }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        borderRadius={"5px"}
        minWidth="250px"
        bgColor={"white"}
        paddingBottom={"2"}
      >
        <img
          src={image}
          alt="image"
          width="100%"
        />
        <Flex justifyContent={"space-between"} p="1" paddingEnd={"2"}>
          <Stack>
            <Box textAlign={"left"} p="2">
              <Text fontSize="xs">FB PLUS PASS</Text>
              <Text fontWeight="600">{`${day}-Day Pass`}</Text>
            </Box>
            <Spacer />
            <Text textAlign={"left"} fontWeight="500" p={"2"}>
              {`$${price}`}
            </Text>
          </Stack>
          <Stack flexDirection={"column-reverse"}>
            <Button
              leftIcon={<Icon as={BiShoppingBag} fontSize="lg" />}
              color="white"
              bg={"blue.500"}
              fontSize="xs"
              _hover="none"
              onClick={() => fun({ image, day, para: "FB PLUS PASS", price })}
            >
              <Link to='/cart'>ADD TO BAG</Link> 
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Epass;
