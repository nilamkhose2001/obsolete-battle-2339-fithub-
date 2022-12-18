import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    Heading,
    Hide,
    HStack,
    Icon,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Image,
    Tr,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EgiftForm from "./gift/EgiftForm";
import { deleteCartItem, getCartArrayData } from "./api/cartSlice";
import { Link } from "react-router-dom";



const Cart = () => {
    const { cart } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartArrayData());
    }, []);




    return (
        <>
            <Container maxW={"100%"} marginBottom="2em" p={"0"}>
                <Center m="0" p="0">
                    {cart.cart.length ? (
                        <Container maxW={"100%"} m="0" p={"0"}>
                            <Box
                                maxW={"80%"}
                                textAlign="left"
                                marginX={"auto"}
                                paddingY="3.5em"
                            >
                                <Heading fontSize={"3em"} fontWeight="400">
                                    Shopping Bag
                                </Heading>
                            </Box>
                            <Box bgColor={"gray.100"} w="100%" paddingY="3.5em">
                                <TableContainer w={{ base: "98%", md: "90%" }} marginX="auto" bgColor={"white"}>
                                    <Table variant="simple">

                                        <Thead borderBottom={"2px solid lightgrey"}>
                                            <Tr>
                                                <Th>ITEM</Th>
                                                <Th>REMOVE</Th>
                                                <Th>PRICE</Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            {cart.cart.map((el, ind) => (
                                                <Tr borderBottom="1px solid lightgrey" key={ind + 1}>
                                                    <Td>
                                                        <Flex alignItems={"flex-start"}>
                                                            <HStack w={{ base: "100px", md: "130px" }}>
                                                                <img
                                                                    src={el.image}
                                                                    alt="passes"
                                                                    width={"100%"}
                                                                />
                                                            </HStack>
                                                            {el.para !== undefined ? (
                                                                <Stack p="2">
                                                                    <Text fontSize={"12px"} color={"#7b7f92"}>{el.para.toUpperCase()}</Text>
                                                                    <Text
                                                                        textTransform={"capitalize"}
                                                                        fontWeight="600"
                                                                        fontSize={"16px"}
                                                                    >
                                                                        {`${el.day}-Day Pass`}
                                                                    </Text>
                                                                    <Text> Purchase:</Text>
                                                                    <Accordion display={"flex"}>
                                                                        <AccordionItem>
                                                                            <AccordionButton>
                                                                                <Button gap={"2"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                                                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                                                </svg>  <Text >For Myself</Text></Button>
                                                                            </AccordionButton>
                                                                            <AccordionPanel pb={4}>

                                                                            </AccordionPanel>
                                                                        </AccordionItem>

                                                                        <AccordionItem>

                                                                            <AccordionButton>
                                                                                <Button gap={"2"}><svg width="20" height="20" ml={"1"} viewBox="0 0 16 16">
                                                                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                                                                </svg> <Text>As A Gift</Text></Button>
                                                                            </AccordionButton>
                                                                            <AccordionPanel pb={4}>
                                                                                <EgiftForm />
                                                                            </AccordionPanel>
                                                                        </AccordionItem>
                                                                    </Accordion>
                                                                    {/* <Flex gap={"1"}> <Button gap={"2"}  ><svg width="20" height="20" viewBox="0 0 16 16">
                                                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                                    </svg>  <Text >For Myself</Text></Button>
                                                                        <Button gap={"2"}><svg width="20" height="20" ml={"1"} viewBox="0 0 16 16">
                                                                            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                                                        </svg> <Text>As A Gift</Text></Button>
                                                                    </Flex> */}
                                                                </Stack>
                                                            ) : (
                                                                <Stack pl={"2"} >
                                                                    <Text fontSize={"12px"} color={"#7b7f92"}>GIFT CARD</Text>
                                                                    <Text
                                                                        fontWeight={"600"}
                                                                    >{`$${el.price} eGift Card`}</Text>
                                                                    <Text> Purchase:</Text>
                                                                    <Accordion display={"flex"}>
                                                                        <AccordionItem>
                                                                            <AccordionButton>
                                                                                <Button gap={"2"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                                                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                                                </svg>  <Text >For Myself</Text></Button>
                                                                            </AccordionButton>
                                                                            <AccordionPanel pb={4}>

                                                                            </AccordionPanel>
                                                                        </AccordionItem>

                                                                        <AccordionItem>

                                                                            <AccordionButton>
                                                                                <Button gap={"2"}><svg width="20" height="20" ml={"1"} viewBox="0 0 16 16">
                                                                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                                                                </svg> <Text>As A Gift</Text></Button>
                                                                            </AccordionButton>
                                                                            <AccordionPanel pb={4}>
                                                                                <EgiftForm />
                                                                            </AccordionPanel>
                                                                        </AccordionItem>
                                                                    </Accordion>


                                                                    {/* <Flex gap={"1"}> <Button gap={"2"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                                    </svg>  <Text >For Myself</Text></Button>
                                                                        <Button gap={"2"}><svg width="20" height="20" ml={"1"} viewBox="0 0 16 16">
                                                                            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                                                        </svg> <Text>As A Gift</Text></Button>
                                                                    </Flex> */}
                                                                </Stack>
                                                            )}
                                                        </Flex>
                                                    </Td>
                                                    <Td>
                                                        <CloseIcon
                                                            cursor={"pointer"}
                                                            onClick={() => dispatch(deleteCartItem(ind))}
                                                        />
                                                    </Td>
                                                    <Td fontWeight="600">{`$${el.price.toFixed(2)}`}</Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                        <Tfoot>
                                            <Tr>
                                                <Th
                                                    fontSize={"1.5em"}
                                                    fontFamily="heading"
                                                    color={"black"}
                                                    p="1.2em"
                                                >
                                                    Order Total:
                                                </Th>
                                                <Th></Th>
                                                <Th
                                                    fontSize={"1.5em"}
                                                    fontFamily="heading"
                                                    color={"black"}
                                                >{`$${cart.totalSum.toFixed(2)}`}</Th>
                                            </Tr>
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                                <Box

                                    display={"flex"}
                                    flexDirection={{ sm: "row", base: "column" }}
                                    justifyContent={"space-between"}
                                    gap={"5px"}
                                    w={{ base: "98%", md: "90%" }}
                                    m={"auto"}
                                    pt="15px"
                                    pb={"20px"}
                                    bgColor="white"
                                    px={"20px"}
                                    h="7em"
                                    borderTop={"2px solid lightgrey"}
                                >
                                    <Button
                                        variant={"outline"}
                                        colorScheme="blue"
                                        _hover={{
                                            backgroundColor: "rgb(66,150,203)",
                                            color: "white",
                                        }}
                                        fontSize="13px"
                                        fontWeight={"600"}
                                        px="2em"
                                    >
                                        <Link to="/store">CONTINUE SHOPPING</Link>
                                    </Button>

                                    <Button
                                        paddingX={{ base: "1.5rem", sm: "3.8rem" }}
                                        paddingY={{ base: "1rem", sm: "2rem" }}
                                        bgColor="#4296cb"
                                        letterSpacing={{ base: "0.5px", md: "1px" }}
                                        fontSize={{ base: "0.8rem", md: "1rem" }}
                                        fontWeight="600"
                                        color={"white"}
                                        _hover={{
                                            bgGradient:
                                                "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                                        }}
                                    >
                                        <Link to="/billing">  PROCEED TO CHECKOUT    </Link>
                                    </Button>


                                </Box>
                            </Box>
                        </Container>
                    ) : (
                        <Box
                            p="3em"
                            bgColor={"#e6f0f8"}
                            w={{ base: "80%", md: "50%" }}
                            marginX="2em"
                            marginY={"7em"}
                        >
                            <Stack marginTop={"3em"} textAlign="center" >
                                <Heading fontWeight={"400"} m="1" p={"1"}>
                                    Your Shopping Bag is Empty
                                </Heading>
                                <Text m="1" p={"1"}>
                                    Explore the site for programs, gifts, or FB Plus
                                    subscriptions.
                                </Text>
                            </Stack>
                            <Grid
                                templateColumns={{
                                    base: "repeat(1, 1fr)",
                                    md: "repeat(2, 1fr)"

                                }}
                                gap={"3"}
                                marginBottom="3em"
                                marginTop={"2em"}
                            >
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
                                    <Link to="/plans">PROGRAMS</Link>
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
                                    <Link to="/meal">MEAL PLANS</Link>
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
                                    <Link to="/membership">FB PLUS</Link>
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
                                    <Link to="/store">GIFT CARDS</Link>
                                </Button>
                            </Grid>
                        </Box>
                    )}
                </Center>
            </Container>
        </>
    );
};

export default Cart;
