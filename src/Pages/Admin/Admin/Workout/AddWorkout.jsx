import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    Input,
    Box,
    useToast,
    Flex,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../../../../Redux/Workout/workout.action';

  
function AddWorkout() {

  const initialState = {
      image:"",
      title:"",
      subtitle:"",
      primaryvalue:"",
      trainingtype:"",
      equipment:"",
      calories:"",
      week:"",
      price:"",
      category:"workout",
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
    
    console.log(formstate);

    toast({
      title: 'Login Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    dispatch(addWorkout(formstate));
    onClose()
    setFormstate(initialState)
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Add Workout</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Add a Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>
              <Input type="text" placeholder='Image Url' borderBottom="2px solid orange" value={formstate.image} onChange={handleChange} name="image"/>
              <Input mt="5" type="text" placeholder='Title' borderBottom="2px solid orange" value={formstate.title} onChange={handleChange} name="title"/>
              <Input mt="5"  placeholder='Sub-Title' borderBottom="2px solid orange" value={formstate.subtitle} onChange={handleChange} type="string" name="subtitle" />
              <Input mt="5"  placeholder='Primary Value' borderBottom="2px solid orange" value={formstate.primaryvalue} onChange={handleChange} type="string" name="primaryvalue" />
              <Input mt="5"  placeholder='Training Type' borderBottom="2px solid orange" value={formstate.trainingtype} onChange={handleChange} type="string" name="trainingtype" />
              <Input mt="5"  placeholder='Equipment' borderBottom="2px solid orange" value={formstate.equipment} onChange={handleChange} type="string" name="equipment" />
              <Input mt="5"  placeholder='Calories' borderBottom="2px solid orange" value={formstate.calories} onChange={handleChange} type="string" name="calories" />
              <Input mt="5"  placeholder='Duration' borderBottom="2px solid orange" value={formstate.week} onChange={handleChange} type="string" name="week" />
              <Input mt="5"  placeholder='Price' borderBottom="2px solid orange" value={formstate.price} onChange={handleChange} type="string" name="price" />

              <Flex justifyContent="space-between">
                   <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="5"  color="white" placeholder='Submit form' />
                   <Button ml="2"  mt="5" colorScheme='red'  onClick={onClose}>Close</Button>
              </Flex>
            </FormControl>
      </form>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default AddWorkout;