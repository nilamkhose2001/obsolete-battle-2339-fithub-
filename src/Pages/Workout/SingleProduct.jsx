import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import {Container, Text,Image} from "@chakra-ui/react"
import axios from "axios"
export const SingleProduct=()=>{
    const [data,setData]=useState({})
    const [loading,setLoading]= useState("false")
    const {id}=useParams()
    console.log(id)

    const getData=async(id)=>{
        let response= await axios.get(`https://fithub.onrender.com/products/${id}`)
        
        setData(response.data.product)
    }

    useEffect(()=>{
        setLoading(true)
     getData(id)
    setLoading(false)
      },[id])
      console.log("single",data)

      if(loading)
      {
        return <Text>Loading......</Text>
      }
    return <>
         <Container borderBottom='1px solid #F0F4F6'  pl="5%" maxW='100%'>
            <Image src={data.image} w='80%' m='auto' ></Image>
            
            </Container>
            <Container mt={6} borderBottom='1px solid #F0F4F6'  pl="5%" maxW='100%'>
                <Text fontSize='25px' fontWeight='600'>{data.title}</Text>
                <Text fontSize='20px' fontWeight='450'>    {data.subtitle}</Text>
                <Text color="#2EB0C7">{data.primaryvalue}</Text>
                </Container>
                <Container mt={6} borderBottom='1px solid #F0F4F6'  pl="5%" maxW='100%'>

                <Text>Equipments   :{data.equipment}</Text>
                <Text>Training Type:{data.trainingtype}</Text>
                <Text>Calories     :{data.calories}</Text>
                </Container>
    </>
}