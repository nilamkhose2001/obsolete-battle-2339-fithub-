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
    FormLabel,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWorkout } from '../../../../Redux/Workout/workout.action';

  
function UpdateWorkout({ id,img,title,subtitle,price, primaryvalue,link,calories,trainingtype,UpdateChange}) {

  const initialState = {
    img : img,
    title : title,
    subtitle : subtitle,
    price: price ,
    primaryvalue: primaryvalue,
    calories: calories ,
    trainingtype: trainingtype ,
    link: link
} ;


  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();
  const dispatch = useDispatch()

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

    dispatch(updateWorkout(id,formstate))

    toast({
      title: 'Updated Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    UpdateChange();
    onClose()
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Update Workout</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Update a Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>
            <FormLabel color="red.300">Image url</FormLabel>
              <Input mb="3"  type="text" placeholder='Image Url' borderBottom="2px solid orange" value={formstate.img} onChange={handleChange} name="img"/>

              <FormLabel color="red.300">Title</FormLabel>
              <Input mb="3"  type="text" placeholder='Title' borderBottom="2px solid orange" value={formstate.title} onChange={handleChange} name="title"/>

              <FormLabel color="red.300">SubTitle</FormLabel>
              <Input mb="3"  type="text" placeholder='SubTitle' borderBottom="2px solid orange" value={formstate.subtitle} onChange={handleChange} name="subtitle"/>

              <FormLabel color="red.300">Price</FormLabel>
              <Input mb="3"  type="text" placeholder='Price' borderBottom="2px solid orange" value={formstate.price} onChange={handleChange} name="price" />

              <FormLabel color="red.300">Primary Value</FormLabel>
              <Input mb="3"  type="text" placeholder='Primary Value' borderBottom="2px solid orange" value={formstate.primaryvalue} onChange={handleChange} name="primaryvalue"/>


              <FormLabel color="red.300">Calories</FormLabel>
              <Input mb="3" type="text" placeholder='Calories' borderBottom="2px solid orange" value={formstate.calories} onChange={handleChange} name="calories"/>

              <FormLabel color="red.300">Training type</FormLabel>
              <Input mb="3"  type="text" placeholder='Training type' borderBottom="2px solid orange" value={formstate.trainingtype} onChange={handleChange} name="trainingtype"/>

              <FormLabel color="red.300">Link</FormLabel>
              <Input mb="3" type="text" placeholder='Link' borderBottom="2px solid orange" value={formstate.link} onChange={handleChange} name="link"/>

                  
              <Flex justifyContent="space-between">
                   <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="10"  color="white" placeholder='Submit form' />
                   <Button ml="2"  mt="10" colorScheme='red'  onClick={onClose}>Close</Button>
              </Flex>
            </FormControl>
      </form>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default UpdateWorkout;