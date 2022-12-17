import { Box, Button, Flex, Heading, Image,  Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import QuickLook from './QuickLook'
import UpdateWorkout from './UpdateWorkout'

const Card = ({ img,text,exclusive,price,challenge,perDay,link }) => {
    const h = useBreakpointValue({base: '350px', md: '350px', xl: '300px'})
  return (
    <Box  p={5} bg="gray.200"   borderRadius={20} as="article">
      
       <Image h="300px" objectFit='fill' w="100%" src={img} alt="stock image"/>
     
       <QuickLook price={price} perDay={perDay} link={link} challenge={challenge} exclusive={exclusive} text={text} img={img}/>
       
       <Text fontSize="22" color="teal" > {text} </Text> 
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Exclusive :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{exclusive}</Text>
       </Flex>
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Price :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{price}</Text>
       </Flex>
       <Flex justifyContent="space-between" mt="5">
         <UpdateWorkout />         
         <Button colorScheme="red">Delete</Button>
        </Flex>
    </Box> 
  )
}
export default Card;
