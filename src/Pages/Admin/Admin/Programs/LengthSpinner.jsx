import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react';
import { Spinner } from '@chakra-ui/react'

const LengthSpinner = () => {
  return (
    <Flex ml="4">
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='green.500'
            size='lg'
        />
    </Flex>

  )
}
export default LengthSpinner ;

