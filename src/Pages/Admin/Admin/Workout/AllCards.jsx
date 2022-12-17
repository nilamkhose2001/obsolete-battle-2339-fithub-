import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { workoutAction } from "../../../../Redux/Workout/workout.action";


const AllCards = () => {

  const {data} = useSelector((store) => store.workout);
  const [ page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {WorkoutLoading,WorkoutError,WorkoutData}=useSelector(store=>store.workout)
 console.log(WorkoutData);
  useEffect(()=>{
   dispatch(workoutAction(`https://fithub.onrender.com/products?category=workout&page=${page}&limit=8`));
 },[page])

    return (
      <Box>
      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {WorkoutData.map((item,index) => <Card key={index}  id={item._id} trainingtype={item.trainingtype} link={item.cardcontenthref} price={item.price} primaryvalue={item.primaryvalue} title={item.title} subtitle={item.subtitle} img={item.image} calories={item.calories} />)}
      </SimpleGrid>
      <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />
      </Box>
    )
  }
  export default AllCards;