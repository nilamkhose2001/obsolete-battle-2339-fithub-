import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs'; 
import { BsGoogle } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { Box, Button,  Checkbox,  Flex, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import Captcha from './Captcha';
import { signup } from "../../Redux/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const initialState = {
    firstname : "",
    lastname : "",
    email : "",
    username : "",
    password :"",
    confirmpassword : ""
  } ;

  const [formstate, setFormstate] = useState(initialState);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {userRegister} = useSelector((store)=> store.auth)
  const navigate= useNavigate();
  
  const handleClickPassword = () => setShow(!show)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val
    });
  };

  function print(){
    console.log(formstate);
    dispatch(signup(formstate));
    alert("Sign Up Successfully")
    navigate('/signin')
  }
  console.log(userRegister);

  return (
  <Box w="50%" m="auto">
    <VStack
      spacing={10}
      align='stretch'
    >
    <Heading textAlign="center" color="teal">Join</Heading>

    <Flex>
         <Stack direction={['column', 'row']} spacing={["10", "30"]}  m="auto">
           <Button w={["40","40","60"]} colorScheme='facebook' leftIcon={<BsFacebook />} >Facebook</Button>
           <Button w={["40","40","60"]} colorScheme='red' leftIcon={<BsGoogle />} > Google </Button>
         </Stack>
    </Flex>
    <hr />
    <Text textAlign="center">OR</Text>
    <Stack direction={['column', 'column', 'row']} spacing="120px">
      <Box w={["100%","90%","50%"]}>
        <VStack
          spacing={5}
          align='stretch'>
            
              <Input type="text" placeholder='First Name' borderBottom="2px solid orange" value={formstate.firstname}
                    onChange={handleChange}
                    name="firstname"/>
              <Input type="text" placeholder='Last Name' borderBottom="2px solid orange" value={formstate.lastname}
                    onChange={handleChange}
                    name="lastname"/>
              <Input type="text" placeholder='Email Address' borderBottom="2px solid orange" value={formstate.email}
                    onChange={handleChange}
                    name="email"/>
              <Input type="text" placeholder='Username' borderBottom="2px solid orange" value={formstate.username}
                    onChange={handleChange}
                    name="username"/>
              <InputGroup size='md'>
                  <Input borderBottom="2px solid orange" value={formstate.password} onChange={handleChange}
                    name="password"
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClickPassword}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
              </InputGroup>
                     
              <Input placeholder='Confirm Password' borderBottom="2px solid orange" value={formstate.confirmpassword}
                    onChange={handleChange} type="password"
                    name="confirmpassword" />
        </VStack>
      </Box>
      <Box w={["100%","90%","40%"]}  borderRadius="20"  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Text fontSize="20" fontFamily="sans-serif" ml="5" mb="5" mt="4">Key Benfits:</Text>
          <Box w="70%" m="auto">
           <VStack
              spacing={5}
              align='stretch'>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> Customise fitness time </Flex>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> Daily progress tracking </Flex>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> Favorite workout videos </Flex>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> 24/7 community support </Flex>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> Helpful health, nutrition </Flex>
                <Flex justifyContent="space-around"> <AiOutlineCheck fontSize="20" color='blue' /> and much, much more… </Flex>
           </VStack>
          </Box>
      </Box>
      </Stack>
    <Box textAlign="center">
          <Checkbox defaultChecked> <Text fontSize="19"> I agree to the Fitness Blender terms of service and privacy policy JOIN</Text></Checkbox>
    </Box>
   <Box pl={["50","50","90","220"]}>
       <Captcha />
    </Box>
    <Box m="auto" textAlign="center">
          <Button w="35%" colorScheme='twitter' onClick={print}> Join </Button>
    </Box>

    <Text fontSize="20" display="inline" textAlign="center">Already a member? <Link to='/signin' display="inline"> <Text color="blue" _hover={{color:"red"}}>Sign In</Text> </Link> </Text>
    
        


    </VStack>
  </Box>
  )
}
export default SignUp;