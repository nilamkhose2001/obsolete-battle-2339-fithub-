import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs'; 
import { BsGoogle } from 'react-icons/bs';
import { Box, Button,  Checkbox,  Flex, FormControl, Heading, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import Captcha from './Captcha';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "../../Redux/auth/auth.action";


const SignIn = () => {
  const initialState = {
    email : "",
    password :"",
} ;

  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val
    });
  };


 function handleSubmit(e){
  
    e.preventDefault();
    dispatch(login(formstate));

    toast({
      title: 'Login Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
 }
 async function googleAuth(){
  let res = await axios.get("http://localhost:8080/auth/google");
  let data = await res.data;
  console.log(data);
 }
//  function logoutt(){
//   dispatch(logout());
//  }
  

  return (
  <Box w="50%" m="auto">
    <VStack
      spacing={10}
      align='stretch'
    >
    <Heading textAlign="center" color="teal">Join</Heading>

    <Flex>
         <Stack direction={['column', 'row']} spacing={["10", "30"]}  m="auto" textAlign="center">
           <Button w={["40","40","60"]} colorScheme='facebook' leftIcon={<BsFacebook />} >Facebook</Button>
           <Button onClick={googleAuth} w={["40","40","60"]} colorScheme='red' leftIcon={<BsGoogle />} > Google </Button>
         </Stack>
    </Flex>
    <hr />
    <Text textAlign="center">OR</Text>

      <Box textAlign="center">
      <form onSubmit={(e)=>handleSubmit(e)}>
      <FormControl>
        <Input  w={["100%","90%","80%","60%"]} type="text" placeholder='Email' borderBottom="2px solid orange" value={formstate.email} onChange={handleChange} name="email"/>
            
        <Input mt="5" w={["100%","90%","80%","60%"]} placeholder='Password' borderBottom="2px solid orange" value={formstate.password} onChange={handleChange} type="password" name="password" />

        <Box mt="10" pl={["0","5","20","70","220"]}>
            <Captcha />
        </Box>

        <Checkbox defaultChecked pl="15" mt="5"> <Text fontSize="18"> I agree to the Fitness Blender terms of service and privacy policy JOIN</Text></Checkbox>

        <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="10" w="70%" color="white" placeholder='Submit form' />
      </FormControl>
      </form>
      {/* <Button onClick={logoutt} >Logout</Button> */}
     
      </Box>

    </VStack>
  </Box>
  )
}
export default SignIn;