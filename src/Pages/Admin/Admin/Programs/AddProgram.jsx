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

  
function AddProgram() {

  const initialState = {
    desc : "",
    exclusive :"",
    image:"",
    week:"",
    time:"",
    challenge:"",
    category:"program"
} ;

  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();

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
    // dispatch(login(formstate));
    console.log(formstate);

    toast({
      title: 'Login Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    setFormstate(initialState);
    onClose()
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Add Program</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Add any Program</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>
              <Input   type="text" placeholder='Title' borderBottom="2px solid orange" value={formstate.desc} onChange={handleChange} name="desc"/>
                  
              <Input mt="5"  placeholder='Exclusive' borderBottom="2px solid orange" value={formstate.exclusive} onChange={handleChange} type="text" name="exclusive" />
              
              <Input mt="5"  placeholder='Image Url' borderBottom="2px solid orange" value={formstate.image} onChange={handleChange} type="text" name="image" />
            
              <Input mt="5"  placeholder='Duration' borderBottom="2px solid orange" value={formstate.week} onChange={handleChange} type="text" name="week" />

              <Input mt="5"  placeholder='Price' borderBottom="2px solid orange" value={formstate.price} onChange={handleChange} type="text" name="price" />
             
              <Input mt="5"  placeholder='Per Day' borderBottom="2px solid orange" value={formstate.time} onChange={handleChange} type="text" name="time" />
             
              <Input mt="5"  placeholder='Challenge duration' borderBottom="2px solid orange" value={formstate.challenge} onChange={handleChange} type="text" name="challenge" />

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
  export default AddProgram;