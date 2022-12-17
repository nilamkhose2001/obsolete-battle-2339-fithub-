import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const NotSure = () => {
  const [data1, setData1] = useState([]);

  const getdata = async () => {
    let res = await fetch(
      "https://fithub.onrender.com/products?category=program"
    );

    let data = await res.json();
    setData1(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  console.log(data1);

  return (
    <Box w="100%" h="auto" background={"#F0F4F6"} py={20}>
      <Box w="90%" m="auto">
        <Heading pb="20px" fontFamily={"sans-serif"} fontSize={"35px"}>
          Not sure where to start?
        </Heading>
        <Text pb="30px">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </Text>
        <SimpleGrid
          w="100%"
          gap={"5px"}
          columns={{ lg: 4, md: 3, sm: 2, base: 1 }}
        >
          {data1.slice(0, 4).map((el) => {
            return <Card />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default NotSure;
