import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getPrograms, getWorkoutPrograms } from "../../../../Redux/Programs/programs.action";
import SpinnerLoading from "../Workout/SpinneLoading";

const AllCards = () => {
    
    const [ page, setPage] = useState(1);
    const dispatch = useDispatch();

    const [updateToggle, setUpdateToggle] = useState(1);
    const data = useSelector((store) => store.programs.programData);


    function UpdateChange(){
      setTimeout(()=>{
      setUpdateToggle(prev=> prev+1)

      },1000)
    }
    

   useEffect(()=>{
    dispatch(getPrograms(`https://fithub.onrender.com/products?category=program&page=${page}&limit=8`));
  },[page,data.length,updateToggle])
  


    return (
      <Box>
       {data.length==0?<SpinnerLoading />:"" }

      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {data.map((item,index) => <Card key={index} UpdateChange={UpdateChange} id={item._id} link={item.contentshref} perDay={item.time} price={item.price} challenge={item.week} exclusive={item.exclusiveitem} text={item.desc} img={item.image}/>)}
      </SimpleGrid>
      {data!=0?<Pagination total={10} current={page} onChange={(value)=>setPage(value)} />:"" }
      </Box>
    )
  }
  export default AllCards;