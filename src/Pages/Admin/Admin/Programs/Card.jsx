import { Box, Button, Flex, Heading, Image,  Text, useBreakpointValue, useToast } from '@chakra-ui/react'
import React from 'react'
import QuickLook from './QuickLook'
import UpdateProgram from './UpdateProgram'

const Card = ({ img,text,exclusive,price,challenge,perDay,link }) => {
  const toast = useToast();

  function deleteCard(){
    toast({
      title: 'Deleted Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }
    const h = useBreakpointValue({base: '350px', md: '350px', xl: '300px'})
  return (
    <Box  p={5} bg="gray.200"   borderRadius={20} as="article">
      
       <Image h="300px" objectFit='fill' w="100%" src={img==""?"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7590-2-week-fb-reboot-challenge-a-balanced-approachable-return-to-fitness-bb7b.jpg":img} alt="stock image"/>
     
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
         <UpdateProgram  price={price} perDay={perDay} link={link} challenge={challenge} exclusive={exclusive} text={text} img={img} />         
         <Button onClick={deleteCard} colorScheme="red">Delete</Button>
        </Flex>
    </Box> 
  )
}
export default Card;
