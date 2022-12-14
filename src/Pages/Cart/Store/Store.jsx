import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Epass from "../gift/Epass";
import Gift from "../gift/Gift";
import shirts from "../storeImages/shirts-20200224.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStoreDataArray } from "../api/storeSlice";
import { addItemToCart } from "../api/cartSlice";
import { Link } from "react-router-dom";

const Store = () => {
  const { storeSlice } = useSelector((state) => state);
  //console.log(storeSlice)
  const dispatch = useDispatch();

  const addItem = (data) => {
    dispatch(addItemToCart(data));
  };

  useEffect(() => {
    dispatch(getStoreDataArray());
    //console.log(storeSlice)
  }, []);

  return storeSlice.status === "loading" ? (
    <Text textAlign={"center"} pt={"100px"} fontSize={"20px"} margin={"auto"}>Loading...</Text>
  ) : (
    <>
      <Container bgColor={"gray.100"} maxW="100%" border={"1px solid white"}>
        <Center>
          <Box>
            <Stack
              textAlign={"left"}
              marginTop="20"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Heading p={"1"} m={"1"}>
                FB Plus Passes
              </Heading>
              <Text p={"1"} m={"1"} fontSize="17">
                Passes give you full access to everything FB Plus has to offer,
                without a long-term subscription. Choose a pass that fits your
                budget and your schedule, and extend your access with another
                pass at any time. Multiple passes can be purchased at once for
                longer access.
              </Text>
              
            </Stack>
            <Stack
              marginTop="8"
              maxW={{ base: "90%", md: "80%", lg: "80%" }}
              marginLeft="auto"
              marginRight="auto"
              marginBottom={"20"}
            >
              <Grid
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  
                  xl:"repeat(4,1fr)",
                  lg:"repeat(3,1fr)"
                }}
                gap="2"
              >
                {storeSlice.ePassArray.map((el, index) => (
                  //console.log(el.lazyfade_src)
                  <Epass
                    key={el._id}
                    image={el.lazyfade_src}
                    day={el.x_small}
                    price={el.price}
                    fun={addItem}
                  />
                ))}
              </Grid>
             
            </Stack>
             <Text p={"1"} m={"1"}>
                Note: Passes cannot be used at the same time as a monthly or
                yearly FB Plus subscription.
              </Text>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"gray.100"} maxW="100%" border={"1px solid white"}>
        <Center>
          <Box>
            <Stack
              textAlign={"left"}
              marginTop="20"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Heading p={"1"} m={"1"}>
                Fitness Blender eGift Cards
              </Heading>
              <Text p={"1"} m={"1"} fontSize="17">
                Give the gift of health and fitness with Fitness Blender eGift
                Cards. Send an electronic card via email and the recipient can
                log in, redeem your gift and buy any of our Workout Programs,
                calendar-based Meal Plans, or a membership to FB Plus!
              </Text>
              
            </Stack>
            <Stack
              marginTop="8"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
              marginBottom={"20"}
            >
              <Grid
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(4,1fr)",
                }}
                gap="2"
              >
                {storeSlice.giftArray.map((el, index) => (
                  <Gift
                    key={el._id}
                    image={el.lazyfade_src}
                    price={el.price}
                    fun={addItem}
                  />
                ))}
              </Grid>
            </Stack>
            <Text p={"1"} m={"1"}>
                Fitness Blender eGift Cards can only be used on
                fitnessblender.com.
              </Text>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"white"} maxW="100%" marginTop={"70px"}>
        <Center>
          <Box>
            <Grid templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            }} gap={"2"}>
              <Box>
           
              <Image width={"100%"} src={shirts} alt="cloths" />
              </Box>
              <Box textAlign={"left"}>
                <Heading marginBottom={"2"} p="4" fontWeight="400" size={"2xl"}>
                  Fitness Blender Gear
                </Heading>
                <Text fontSize={"20"} p="4">
                  NOVEMBER 2020 UPDATE
                </Text>
                <Text p="4" fontSize={"xl"} fontWeight="100">
                  New Fitness Blender gear and clothing are still in the works,
                  but as you might suspect, COVID significantly impacted our
                  original plans. Unfortunately, we still don't have a solid
                  timeline we can share, but we'll keep you up-to-date as the
                  situation changes.
                </Text>
                <Text p="4" fontSize={"xl"} fontWeight="100">
                  We intend to re-launch starting with casual clothing,
                  following up with gear and other apparel if all goes well. If
                  you've already filled out the gear survey, thank you! If not,
                  it only takes about two minutes and will let us know what is
                  most important to you.
                </Text>
                <Text p="4" size={"xl"} color="blue">
                  Tell us what gear you'd like.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"#e6f0f8"} maxW="100%">
        <Center>
          <Stack marginTop={"100px"} spacing="8" marginBottom={"80px"}>
            <Heading>Other Shopping Options</Heading>
            <Text>
              Explore Workout Programs, Meal Plans, and FB Plus memberships.
            </Text>
            <Grid templateColumns={{
               base: "repeat(1,1fr)",
               md: "repeat(3,1fr)",
              
            }} gap={"3"}>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
                _hover={{
                  bgGradient:
                    "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                }}
              >
               <Link to='/workoutPrograms'> PROGRAMS</Link>
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
                _hover={{
                  bgGradient:
                    "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                }}
              >
               <Link to='/mealPlans'>MEAL PLANS</Link> 
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
                _hover={{
                  bgGradient:
                    "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                }}
              >
                <Link to='/membership'>FB PLUS</Link>
              </Button>
            </Grid>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Store;
