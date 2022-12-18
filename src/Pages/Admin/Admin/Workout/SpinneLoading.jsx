import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react';
import { Spinner } from '@chakra-ui/react'

const SpinnerLoading = () => {
  return (
    <Flex ml="350" mt="60">
        <Spinner
            thickness='8px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
        <Heading ml="4" color="blue.500">....Loading Data Please Wait</Heading>
    </Flex>

  )
}
export default SpinnerLoading ;

