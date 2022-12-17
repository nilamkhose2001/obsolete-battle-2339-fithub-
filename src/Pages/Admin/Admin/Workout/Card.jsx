import { Box, Button, Flex, Heading, Image,  Text, useBreakpointValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWorkout } from '../../../../Redux/Workout/workout.action'
import QuickLook from './QuickLook'
import UpdateWorkout from './UpdateWorkout'
 
const Card = ({ id,img,title,subtitle,price, primaryvalue,link,calories,trainingtype }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  // const data = useSelector((store) => store.workout.WorkoutData);


  function deleteCard(id){
    dispatch(deleteWorkout(id));
    
    toast({
      title: 'Deleted Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    // changeMe()
  }

    const h = useBreakpointValue({base: '350px', md: '350px', xl: '300px'})
  return (
    <Box  p={5} bg="gray.200"   borderRadius={20} as="article">
      
       <Image h="300px" objectFit='fill' w="100%" src={img} alt="Workout image"/>
     
       <QuickLook link={link} v={trainingtype} price={price} primaryvalue={primaryvalue} title={title} subtitle={subtitle} img={img} calories={calories}/>
       

       <Text fontSize="22" color="teal" > {title.substring(0, 30)} </Text> 
       <Flex width={["100%","90%","90%","100%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Exclusive </Text>
        <Text fontSize="17" color="violet" fontWeight="600" ml="2">{subtitle.substring(0, 40)||"Bored-Easily Strength Intervals"}</Text>
       </Flex>
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Price :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{price}</Text>
       </Flex>
       <Flex width={["100%","90%","90%","80%"]} justifyContent="space-evenly">
        <Text fontSize="20" color="gray" fontWeight="500">Calories :</Text>
        <Text fontSize="23" color="violet" fontWeight="600">{calories}</Text>
       </Flex>
       <Flex justifyContent="space-between" mt="5">
         <UpdateWorkout id={id} link={link} v={trainingtype} price={price} primaryvalue={primaryvalue} title={title} subtitle={subtitle} img={img} calories={calories}/>         
         <Button onClick={()=>deleteCard(id)} colorScheme="red">Delete</Button>
        </Flex>
    </Box> 
  )
}
export default Card;
