import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getWorkout, workoutAction } from "../../../../Redux/Workout/workout.action";
import SpinnerLoading from "./SpinneLoading";


const AllCards = () => {

  const [ page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [updateToggle, setUpdateToggle] = useState(1);
    const data =useSelector(store=>store.workout.WorkoutAdminData);

    function UpdateChange(){
      setTimeout(()=>{
      setUpdateToggle(prev=> prev+1)

      },3000)
    }
  
  useEffect(()=>{
   dispatch(getWorkout(`https://fithub.onrender.com/products?category=workout&page=${page}&limit=10`));
 },[page,data.length,updateToggle]);


    return (
      <Box>
      {data.length==0?<SpinnerLoading />:"" }
      <Box>
      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {data.map((item,index) => <Card key={index}  id={item._id}  UpdateChange={UpdateChange} trainingtype={item.trainingtype} link={item.cardcontenthref} price={item.price} primaryvalue={item.primaryvalue} title={item.title} subtitle={item.subtitle} img={item.image} calories={item.calories} />)}
      </SimpleGrid>
       {data.length!=0?<Pagination total={15} current={page} onChange={(value)=>setPage(value)} />:"" }
      </Box>
      </Box>
    )
  }
  export default AllCards;