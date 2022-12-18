import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useParams } from "react-router-dom";

export default function SingleProgram() {
  const params = useParams();
  console.log(params.id);
  const [program, setProgram] = useState({});
  const [isSmallerThan820] = useMediaQuery("(max-width: 820px)");

  useEffect(() => {
    axios
      .get(`https://fithub.onrender.com/products/${params.id}`)
      .then((res) => {
        setProgram(res.data.product);
        console.log(res.data.product);
      });
  }, []);

  return (
    <>
      <Box w="100%">
        <Flex flexWrap="wrap">
          <Box w={isSmallerThan820 ? "100%" : "70%"}>
            <Image src={program.image} alt="img" width="100%" />
          </Box>
          <Box w={isSmallerThan820 ? "100%" : "30%"} bg="#222533" color="white" py="5">
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Box>
                <Text fontSize="lg">PROGRAM DETAILS</Text>
                <br />
                <Box fontWeight="light">
                  <Text>
                    <span style={{ opacity: "0.7" }}>Length: </span>
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      {program.week}
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Avg. Duration: </span>
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      {program.time}
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Days per Week: </span>{" "}
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      {program.week}
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Difficulty: </span>{" "}
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      3-4
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Body Focus: </span>{" "}
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      Upper Body
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Equipment: </span>{" "}
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      Dumbbell, Mat
                    </Text>
                  </Text>
                  <Text>
                    <span style={{ opacity: "0.7" }}>Training Type: </span>{" "}
                    <Text display="inline" fontSize="sm" fontWeight="semibold">
                      {" "}
                      Strength Training
                    </Text>
                  </Text>
                </Box>
                <hr />
                <Text>As Low As</Text>
                <Text>{program.price}</Text>
                <br />
                <Button bg="#4296CB" color="white">
                  <span style={{ width: "25px", height: "30px" }}>
                    <BiShoppingBag size="100%" />
                  </span>
                  &nbsp; ADD TO BAG
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
