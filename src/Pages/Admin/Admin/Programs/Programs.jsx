import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text, useToast} from '@chakra-ui/react'
import AddProgram from './AddProgram';
import AllCards from './AllCards';
import Navbar from '../Navbar';
import { useState } from 'react';
import axios from 'axios';
import LengthSpinner from './LengthSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { getPrograms } from '../../../../Redux/Programs/programs.action';


const AdminPrograms = () => {
    const toast = useToast();
    const [data, setData] = useState([]);
    const ProgramData = useSelector((store) => store.programs.programData);
    const dispatch = useDispatch();

    async function getData(){
      let res = await axios.get("https://fithub.onrender.com/products?category=program");
      setData(res.data)
    }
    
   
    
   useEffect(()=>{
    getData();
   },[ProgramData.length])


    function alreadyPage(){
        toast({
            title: 'Already on this Page',
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
    }

    function usersButton(){
      toast({
        title: 'Under Maintaince',
        status: "warning",
        duration: 1000,
        isClosable: true,
      })
    }
      
  
  return (
    
    <Box>
    <Navbar />
    <Flex justifyContent="space-between">
        <Box mt="10" h="700" w="20%"  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Button colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> <Link to="/admin-dashboard">Dashboard</Link> </Button>
            <Button colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> <Link to="/admin-workout">Workout</Link> </Button>
            <Button onClick={alreadyPage} colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> Programs </Button>
            <Button onClick={usersButton} colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%">Users</Button>
            <Button colorScheme="red" boxShadow= "rgb(242, 121, 53) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%" mt="240">Logout</Button>
        </Box>
        <Box h="700" w="78%" boxShadow= "rgba(0, 0, 0, 0.15) 0px 2px 8px">
        <Flex justifyContent="space-between" mb="5" mt="5">
        <Flex>
          <Text fontSize="20" color="gray" fontWeight="600" >Total Programs: </Text>
          {data.length==0?<LengthSpinner />: <Text ml="5" fontSize="23" fontWeight="700">{data.length}</Text>}
        </Flex>
        <AddProgram  />
      </Flex>
            <AllCards  />
        </Box>
    </Flex>
    </Box>
   
  )
}
export default AdminPrograms;