import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';

const Pagination = ( {current, onChange, total} ) => {
    const prev = <Button leftIcon={<AiOutlineDoubleLeft />}  mr="2" disabled={current==1} onClick={()=>onChange(current-1)} >Prev</Button>
    const next = <Button rightIcon={<AiOutlineDoubleRight />} ml="2" disabled={current==total} onClick={()=>onChange(current+1)} >Next</Button>
  
    const pages= new Array(total).fill(0).map((a,i) => 
    <Button     mx={1}
    px={4}
    py={2}
    rounded="md" colorScheme="teal" _hover={{color:"white",background:"black"}}
     disabled={current==(i+1)} onClick={()=>onChange(i+1)}>{i+1}</Button>
    )

    return (
    <Box textAlign="center" mt="20" mb="10">
       {prev}
       {pages}
       {next}
    </Box>
  )
}
export default Pagination;