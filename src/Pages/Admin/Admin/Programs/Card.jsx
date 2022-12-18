import { Box, Button, Flex, Heading, Image,  Text, useBreakpointValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProgram } from '../../../../Redux/Programs/programs.action'
import QuickLook from './QuickLook'
import UpdateProgram from './UpdateProgram'

const Card = ({ id,img,text,exclusive,price,challenge,perDay,link, UpdateChange }) => {
  const toast = useToast();
  // const data = useSelector((store) => store.programs.programData);
  const dispatch = useDispatch();
 


  function deleteCard(id){
    dispatch(deleteProgram(id));
    
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
      
       <Image h="300px" objectFit='fill' w="100%" src={img} alt="Programs image"/>
     
       <QuickLook price={price} perDay={perDay} link={link} challenge={challenge} exclusive={exclusive} text={text} img={img}/>
       
       <Text fontSize="22" color="teal" > {text} </Text> 
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Exclusive :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{exclusive||"FB Plus"}</Text>
       </Flex>
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Price :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{price}</Text>
       </Flex>
       <Flex justifyContent="space-between" mt="5">
         <UpdateProgram  id={id} price={price} UpdateChange={UpdateChange} perDay={perDay} link={link} challenge={challenge} exclusive={exclusive} text={text} img={img} />         
         <Button onClick={()=>deleteCard(id)} colorScheme="red">Delete</Button>
        </Flex>
    </Box> 
  )
}
export default Card;
