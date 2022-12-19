import { Box, Button, Flex, Heading, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HiUsers} from 'react-icons/hi';
import { FaBox} from 'react-icons/fa';
import Navbar from './Navbar';
import axios from 'axios';
import LengthSpinner from './Programs/LengthSpinner';
import ApexChart from './Workout/PieChart';


const Admin = () => {
  const toast = useToast();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([])
  const [show, setShow] = useState(false)

  async function getData(){
    let res1 = await axios.get("https://fithub.onrender.com/products?category=workout");
    setData1(res1.data);

    let res2 = await axios.get("https://fithub.onrender.com/products?category=workout");
    setData2(res2.data)
  }
 
 useEffect(()=>{
  getData()
 },[])


  function alreadyPage(){
    toast({
        title: 'Already on this Page',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
}

function userButton(){
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
        <Button onClick={alreadyPage} colorScheme="twitter" boxShadow= "rgb(106, 90, 205) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> Dashboard </Button>
        <Button colorScheme="twitter" boxShadow= "rgb(106, 90, 205) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"><Link to="/admin-workout">Workout</Link></Button>
        <Button colorScheme="twitter" boxShadow= "rgb(106, 90, 205) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> <Link to="/admin-programs">Programs</Link> </Button>
        <Button onClick={userButton} colorScheme="twitter" boxShadow= "rgb(106, 90, 205) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%">Users</Button>
        <Button colorScheme="red" boxShadow= "rgb(242, 121, 53) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%" mt="250">Logout</Button>
    </Box>
    <Box h="700" w="78%" boxShadow= "rgba(0, 0, 0, 0.15) 0px 2px 8px">
      <Heading fontFamily="cursive" ml="480" mb="20" mt="10" color="blue" textDecoration="underline">Dashboard</Heading>
        

     <Flex justifyContent="space-evenly" >
       <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="20%" bg='teal.200' height='150' justifyContent="center" alignItems="center">  <HiUsers fontSize="30" />  <Text ml="2" fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer" , fontSize:"25"}}>View Users</Text> </Flex>
       <Flex onClick={()=> setShow(!show)} boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="20%" bg='teal.200' height='150' justifyContent="center" alignItems="center"><FaBox fontSize="23" /> <Text ml="2" fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"25"}}>{show?"Hide Products":"View Products"}</Text> </Flex>
       {show&&<ApexChart />}
     </Flex>

      <Flex justifyContent="space-evenly" mt="100">
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Products : </Text>
        {(data1.length==0 || data2.length==0) ?<LengthSpinner />:   <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}>{data1.length+data2.length}</Text>} </Flex>
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Users : </Text> <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}> 200</Text> </Flex>
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Revenue : </Text> <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}>$ 7,150</Text> </Flex>
    </Flex>
    </Box>
    
</Flex>
</Box>
  )
}
export default Admin;

// import { Routes, Route } from "react-router-dom";
// import Admin from "../Pages/Admin/Admin/Admin";
// import AdminPrograms from "../Pages/Admin/Admin/Programs/Programs";
// import AdminWorkout from "../Pages/Admin/Admin/Workout/Workout";
// import Home from "../Pages/Home/Home";
// import MealPlansPage from "../Pages/Programs/MealPlansPage";
// import PilotProgramsPage from "../Pages/Programs/PilotProgramsPage";
// import WorkoutProgramsPage from "../Pages/Programs/WorkoutProgramsPage";

// import { SingleProduct } from "../Pages/Workout/SingleProduct";
// import {Workout} from "../Pages/Workout/Workout"

// export const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/signup" element={<h1>signup</h1>} />
//       <Route path="/cart" element={<h1>CArt</h1>} />
//       <Route path="/workoutprogram" element={<WorkoutProgramsPage />} />
//       <Route path="/mealplans" element={<MealPlansPage />} />
//       <Route path="/pilotprograms" element={<PilotProgramsPage />} />
//       <Route path="/workoutvideo" element={<Workout/>} />
//       <Route path="/customworkout" element={<h1>Custom workout</h1>}/>
//       <Route path="/routines" element={<h1>Routines</h1>}/>
//       <Route path="/workoutvideo/:id" element={<SingleProduct/>}></Route>
//       <Route path="/admin-dashboard" element={<Admin />} />
//       <Route path="/admin-programs" element={<AdminPrograms />} />
//       <Route path="/admin-workout" element={<AdminWorkout />} />
//     </Routes>
//   );
// };