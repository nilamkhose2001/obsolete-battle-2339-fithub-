import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const NotSure = () => {
  const [data1, setData1] = useState([]);

  const getdata = async () => {
    try {
      let res = await axios.get(
        "https://fithub.onrender.com/products?category=program"
      );
      setData1(res.data.product);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

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
          {data1?.slice(0, 4).map((el, i) => {
            return (
              <Card
                key={i}
                image={el.image}
                title={el.week}
                subtitle={el.desc}
                price={el.price}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default NotSure;
