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
    Image,
    Flex,
    Text,
    Card,
    Stack,
    CardBody,
    Heading,
    CardFooter,
  } from '@chakra-ui/react'
import React from 'react'




const QuickLook = ({ img,text,exclusive,price,challenge,perDay,link }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button w="100%" onClick={onOpen} my="2"  colorScheme='whatsapp'>Quick look</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Detailed Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Image objectFit='fill'
                     
                      maxW={{ base: '100%', sm: '200px' }}
                      src={img}
                      alt='Caffe Latte'
                    />

                    <Stack>
                      <CardBody>
                        <Heading size='md' color="red.400">{exclusive}</Heading>

                        <Text py='2' color="teal">
                          {text}
                        </Text>
                       <Flex>
                        <Text fontSize="17">Price: </Text>
                        <Text fontSize="18" ml="3" fontWeight="600" color="orange">{price}</Text>
                       </Flex>
                       <Flex>
                        <Text fontSize="17">Day: </Text>
                        <Text fontSize="17" ml="1" fontWeight="600" color="orange">{perDay}</Text>
                       </Flex>
                       <Text mt="3" fontSize="18" fontWeight="600" color="gray">{challenge}</Text>
                       <Flex mt="4">
                        <Text fontSize="16">For more info:</Text>
                         <Text fontSize="17" ml="1" fontWeight="600" color="blue"><a target="blank" href={link}>Click</a></Text> 
                       </Flex>
                      </CardBody>
                      
                    </Stack>
                  </Card>
            
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default QuickLook;