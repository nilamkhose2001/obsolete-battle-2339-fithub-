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
import { updateProgram } from '../../../../Redux/Programs/programs.action';

  
function UpdateProgram( { id,img,text,exclusive,price,challenge,perDay,link,change } ) {

  const initialState = {
    image : img,
    desc :text,
    exclusiveitem:exclusive,
    week:challenge,
    time:perDay,
    price:price,
    link:link

} ;


  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();
  const dispatch =useDispatch()

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
 

    toast({
      title: 'Login Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
   
     dispatch(updateProgram(id,formstate));

    
    
    onClose()
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Update Program</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Update Program</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>

            <FormLabel color="red.300">Image Url</FormLabel>
            <Input mb="3"  type="text" placeholder='Image Url' borderBottom="2px solid orange" value={formstate.image} onChange={handleChange} name="email"/>
             
            <FormLabel color="red.300">Exclusive</FormLabel>
            <Input mb="3"  placeholder='Exclusive' borderBottom="2px solid orange" value={formstate.exclusiveitem} onChange={handleChange} type="text" name="exclusiveitem" />
    
            <FormLabel color="red.300">Description</FormLabel>
            <Input mb="3"  placeholder='Description' borderBottom="2px solid orange" value={formstate.desc} onChange={handleChange} type="text" name="desc" />

            <FormLabel color="red.300">Price</FormLabel>
            <Input mb="3"  placeholder='Price' borderBottom="2px solid orange" value={formstate.price} onChange={handleChange} type="text" name="price" />

             
            <FormLabel color="red.300">Duration</FormLabel>
            <Input mb="3"  placeholder='Duration' borderBottom="2px solid orange" value={formstate.time} onChange={handleChange} type="text" name="time" />

            <FormLabel color="red.300">Week</FormLabel>
            <Input mb="3"  placeholder='Week' borderBottom="2px solid orange" value={formstate.week} onChange={handleChange} type="text" name="week" />

            <FormLabel color="red.300">Link</FormLabel>
            <Input mb="3"  placeholder='Link' borderBottom="2px solid orange" value={formstate.link} onChange={handleChange} type="text" name="link" />

              <Flex justifyContent="space-between">
                   <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="7"  color="white" placeholder='Submit form' />
                   <Button ml="2"  mt="7" colorScheme='red'  onClick={onClose}>Close</Button>
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