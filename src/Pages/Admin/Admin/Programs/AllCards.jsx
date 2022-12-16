import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getWorkoutPrograms } from "../../../../Redux/Programs/programs.action";

const AllCards = () => {
    const [ data, setData] = useState([])
    const [ page, setPage] = useState(1);
    // const workoutProgramData = useSelector((store) => store.programs.programData);

    const dispatch = useDispatch();
 useEffect(()=>{
   getData();
  //  dispatch(getWorkoutPrograms());
 },[page])

 async function getData(){
  let data = await axios.get(`https://fithub.onrender.com/products?category=program&page=${page}&limit=8`);
    console.log(data.data);
  setData(data.data);
  // console.log(workoutProgramData);

 }
    return (
      <Box>
      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {data.map((item,index) => <Card key={index} link={item.contentshref} perDay={item.time} price={item.price} challenge={item.week} exclusive={item.exclusiveitem} text={item.desc} img={item.image}/>)}
      </SimpleGrid>
      <Pagination total={5} current={page} onChange={(value)=>setPage(value)} />
      </Box>
    )
  }
  export default AllCards;