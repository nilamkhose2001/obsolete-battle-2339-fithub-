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

  
function UpdateProgram( { img,text,exclusive,price,challenge,perDay,link } ) {

  const initialState = {
    email : "",
    password :"",
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

    toast({
      title: 'Login Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Update Program</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Add any Program</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>
              <Input   type="text" placeholder='Email' borderBottom="2px solid orange" value={formstate.email} onChange={handleChange} name="email"/>
                  
              <Input mt="5"  placeholder='Password' borderBottom="2px solid orange" value={formstate.password} onChange={handleChange} type="password" name="password" />
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
  export default UpdateProgram;