import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import  Card  from "./Card"
import axios from "axios";
import Pagination from "./Pagination";


const AllCards = () => {
    const [ data, setData] = useState([])
    const [page, setPage] =useState(1)

    useEffect(()=>{
      getData()
    },[page])
   
    async function getData(){
     let data = await axios.get(`https://fithub.onrender.com/products?category=workout&page=${page}&limit=8`);
       console.log(data.data);
     setData(data.data)
   
    }
    return (
      <Box>
      <SimpleGrid columns={[1,2,3]} spacing={10}>
        {data.map((item,index) => <Card key={index} link={item.contentshref} perDay={item.time} price={item.price} challenge={item.eyebrow} exclusive={item.exclusiveitem} text={item.desc} img={item.image}/>)}
      </SimpleGrid>
      <Pagination total={5} current={page} onChange={(value)=>setPage(value)} />
      </Box>
    )
  }
  export default AllCards;