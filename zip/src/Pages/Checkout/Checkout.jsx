import {
    Box,
    Button,
    Center,
    FormLabel,
    Container,
    Flex,
    FormControl,
    FormHelperText,
    Input,
    Select,
    Spacer,
    Text,
    WrapItem,
    Grid,
    Radio,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import { TfiAngleLeft } from "react-icons/tfi"
import { BsCreditCard2Back } from "react-icons/bs"

import "./Checkout.css"
import { Link } from 'react-router-dom'



const Checkout = () => {

    let data = JSON.parse(localStorage.getItem("cartArray"));
    console.log(data)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalprice = 0
        data.map((ele) => {
            totalprice += ele.price
        })

        setTotal(totalprice)


    }, [])

    const [togglePayment, setTogglePayment] = useState("hidden")
    const [toggleSelect, setToggleSelect] = useState("show")

    const haddleChange = () => {
        setTogglePayment("show")
        setToggleSelect("hidden")
    }

    const handleChangeagin = () => {
        setTogglePayment("hidden")
        setToggleSelect("show")
    }

    const [div, sdiv] = useState(1)

    const show = (e) => {
        sdiv(e)
    }

    return (
        <>
            <div style={{ width: "100%" }}>
                <div className='ccontainer' ><Text className='heading' textAlign={'left'}>Checkout</Text></div>



                <div className='checkoutBody'>
                    <div className='ccontainer' >

                        <div>

                            <div className='Cflex section_heading'>
                                <div style={{ marginLeft: "20px" }}>Review</div>
                                <div className='edit'><TfiAngleLeft size={12} /><Link to={"/cart"}>Edit Cart</Link></div>
                            </div>

                            <div className='Cflex spaceh'>
                                <div style={{ marginLeft: "20px" }}>ITEM</div>
                                <div style={{ marginRight: "20px" }}>PRICE</div>
                            </div>
                            {
                                data.map((ele) => <div className='Cflex' style={{ fontWeight: "bold", fontSize: "1rem" }}>
                                    <div style={{ marginLeft: "20px" }}>{ele.day}-Day Pass</div>
                                    <div style={{ marginRight: "20px" }}>${ele.price}</div>
                                </div>)
                            }

                            <div className='Cflex ' style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                                <div style={{ marginLeft: "20px" }}>Order Total:</div>
                                <div style={{ marginRight: "20px" }}>${total}</div>
                            </div>
                        </div>

                        {div === 1 ?
                            <Box className="bill_maindiv" w={"100%"} mt={"4%"}>
                                <Box
                                    h="65px"
                                    bg="#fafcfd"
                                    w="100%"
                                    p={4}
                                    color="black"
                                    margin="auto"
                                    boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                                    textAlign={"left"}
                                >
                                    <Text
                                        fontFamily="Maison Neue - 600"
                                        fontSize="19px"
                                        lineHeight="23px"
                                        color="#212432"
                                        as="b"
                                        m="auto"


                                    >
                                        Billing Information
                                    </Text>
                                </Box>

                                <Container maxW="container.sm" bg="white" h={"fit-content"} color="white" mb={"10"}>
                                    <FormControl>
                                        <FormHelperText textAlign={"left"} mb="2" mt="4" fontSize={"1xl"} color="#7b7f92">City</FormHelperText>
                                        <Input type="email" placeholder="City Name" color="black" />

                                        <FormHelperText textAlign={"left"} mb="2" mt="4" fontSize={"1xl"} color="#7b7f92">
                                            State / Province / Region
                                        </FormHelperText>

                                        <Select placeholder="Select One" color="black">
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                        </Select>

                                        <FormHelperText textAlign={"left"} mb="2" mt="4" fontSize={"1xl"} color="#7b7f92">Postal Code</FormHelperText>

                                        <Input
                                            type="email"
                                            placeholder="Postal Code or Zip Code"
                                            color="black"
                                        />

                                        <FormHelperText textAlign={"left"} mb="2" mt="4" fontSize={"1xl"} color="#7b7f92">Country</FormHelperText>

                                        <Select placeholder="India" color="black">
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                            <option>United Arab Emirates</option>
                                            <option>Nigeria</option>
                                        </Select>



                                        <Flex mt={"1"} className="paybtn">
                                           
                                            <Link to={"/cart"} > <Button mt={"5"}  colorScheme="linkedin" variant="link" fontWeight={"thin"}>
                                                    Cancel
                                                </Button>
                                        </Link> 
                                            <Spacer />
                                            <WrapItem>


                                                <Button _hover={{bg:"linear(to right,rgb(48,179,205), rgb(63,154,203))"}} bg="#4296cb" height="55px" mt={2} px={"10"} onClick={() => show(2)}>
                                                    PROCEED TO PAYMENT
                                                </Button>

                                            </WrapItem>
                                        </Flex>
                                    </FormControl>
                                </Container>
                            </Box>
                            :
                            <div className='paymentInfo' >
                                <div className='section_heading' > <p style={{ marginLeft: "20px", padding: "20px 0px" }}> Payment Information</p></div>
                                <div className="paymentbox"> <Text textAlign={"left"}>Choose a way to pay</Text> </div>

                                <div className='paymentbox' id={toggleSelect} onClick={haddleChange}>
                        
                                    <button className="paymentButton" id='border'><BsCreditCard2Back size={35} color='#B5B5B' style={{ marginLeft: "10px" }} /> Card</button>

                                </div>

                                <Box className="paymentbox"  > <Radio  >Cash on delivery</Radio> </Box>


                                <div id={togglePayment}>

                                    <div className='paymentbox borderbox' >


                                        <div className="boxxx">
                                            <p className="paymentButton"><BsCreditCard2Back size={35} color='#B5B5B' style={{ marginLeft: "10px" }} /> Pay with card</p>
                                            <div style={{ display: "flex", marginRight: "110px" }}>
                                                <img src='https://cdn.worldvectorlogo.com/logos/visa.svg' width={40} height={40} />
                                                <img src='https://cdn.worldvectorlogo.com/logos/mastercard-2.svg' width={40} height={40} />
                                                <img src='https://cdn.worldvectorlogo.com/logos/union-pay.svg' width={40} height={40} />
                                                <img src='https://cdn.worldvectorlogo.com/logos/amek.svg' width={40} height={40} />
                                                <img src='https://cdn.worldvectorlogo.com/logos/jcb-emblem-logo.svg' width={40} height={40} />
                                                <img src='https://cdn.worldvectorlogo.com/logos/discover-4.svg' width={40} height={40} />

                                            </div>
                                        </div>


                                        {/* atm card selection   */}
                                        <div className='cardsection'>
                                            <div className='flexN'>
                                                <p>Card Number</p>
                                                <input type="card" className='cardNumbox' placeholder='•••• •••• •••• ••••' style={{ width: "95%" }} />
                                            </div>
                                            <div className='flexH'>
                                                <div style={{ width: "50%" }}>
                                                    <p>Expiration Date <span className='spaceh'>(MM/YY)</span> </p>
                                                    <input type="month" className='pd' placeholder='MM/YY' style={{ width: "90%" }} />
                                                </div>

                                                <div style={{ width: "50%" }}>
                                                    <p>CVV <span className='spaceh' > (3 digits)</span></p>
                                                    <input type="password" className='pd' placeholder='•••' style={{ width: "90%" }} />
                                                </div>

                                            </div>
                                        </div>

                                        {/* atm card selection end  */}



                                    </div>


                                    <div style={{ margin: "auto", marginTop: "50px" }} className="goback placeorder" onClick={handleChangeagin}>Choose another way to pay</div>

                                </div>

                                <div style={{ margin: "auto", marginTop: "50px", paddingBottom: "50px" }} className="placeorder">
                                    <div className=' flexf'>
                                        <Link to='/cart' > <Button className='edit'colorScheme="linkedin" variant="link"  fontWeight={"thin"}>Cancel</Button> </Link>
                                        <Link to='/success'>
                                            <button className='btn'>PLACE ORDER</button>
                                        </Link>
                                    </div>
                                </div>



                            </div>
                        }
                        <Grid justifyContent={'center'} >  <Text w={"100%"} bg={"#e3ebee"} textAlign={"left"} p={"5"} mt={"6"}>
                            By purchasing an eGift Card, you agree to Fitness Blender’s <Button colorScheme={'linkedin'} fontWeight={"thin"} variant={"link"}>Gift Card Terms and Conditions</Button>, including no refunds.
                        </Text>
                            <Text w={"100%"} bg={"#e3ebee"} textAlign={"left"} p={"5"} mt={"6"} >
                                By purchasing an FB Plus Pass, you agree to Fitness Blender’s <Button colorScheme={'linkedin'} fontWeight={"thin"} variant={"link"}>FB Plus Pass Terms and Conditions</Button>, including no refunds.
                            </Text>
                        </Grid>
    
                    </div>

                </div>

            </div>
        </>
    )
}

export default Checkout