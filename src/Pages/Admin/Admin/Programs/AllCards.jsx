import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getWorkoutPrograms } from "../../../../Redux/Programs/programs.action";

const AllCards = ({changeFun}) => {
    
    const data = useSelector((store) => store.programs.programData);
    const [ page, setPage] = useState(1);
    const [c,setc] = useState(1)
    const dispatch = useDispatch();
    console.log(data);
    
    function change(){
      setc(c++)
    }

   useEffect(()=>{
     dispatch(getWorkoutPrograms(`https://fithub.onrender.com/products?category=program&page=${page}&limit=8`));
   },[page,c])
   //change


    return (
      <Box>
      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {data.map((item,index) => <Card key={index} change={change} id={item._id} link={item.contentshref} perDay={item.time} price={item.price} challenge={item.week} exclusive={item.exclusiveitem} text={item.desc} img={item.image}/>)}
      </SimpleGrid>
      <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />
      </Box>
    )
  }
  export default AllCards;