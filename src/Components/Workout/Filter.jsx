import {
    Container,
    Flex,Text,Spacer,Box
  } from '@chakra-ui/react'
  import {useState} from "react"
  import styles from "./filter.module.css"
  import {BiChevronDown} from "react-icons/bi"
  import {MdOutlinePersonSearch,MdOutlineFilterAlt} from "react-icons/md"
  import {AiOutlineSearch} from "react-icons/ai"
export const Filter=()=>{
  let [trainer,setTrainer]=useState(false)
  let [filter,setFilter]=useState(false)
  let [search,setSearch]=useState(false)

  const handleClick1=()=>{
    setSearch(false)
    setFilter(false)
      if(trainer)
      {
        setTrainer(false)
      }
      else{
        setTrainer(true)
      }
  }
  const handleClick2=()=>{
    setTrainer(false)
    setSearch(false)
    if(filter)
    {
      setFilter(false)
    }
    else{
      setFilter(true)
    }
  }
  const handleClick3=()=>{
    setTrainer(false)
    setFilter(false)
    if(search)
    {
      setSearch(false)
    }
    else{
      setSearch(true)
    }
  }
  


    return <>
    <Container maxW='100%' pl='5%' className={styles.filterCont}>
     
    <Flex >
    <Box onClick={()=>handleClick1()} className={styles.btn} bg='white'> <MdOutlinePersonSearch/><Spacer/><Text sx={{
          '@media all and (min-width:0px) and (max-width:987px)':{
           display:'none'
          }
  
          
         }} fontSize='12px'>TRAINERS</Text><BiChevronDown  /></Box>
    <Box onClick={()=>handleClick2()}  className={styles.btn}><MdOutlineFilterAlt/><Spacer/><Text sx={{
          '@media all and (min-width:0px) and (max-width:987px)':{
           display:'none'
          }
  
          
         }} fontSize='12px'>FILTER</Text> <BiChevronDown /></Box>
      
      <Box onClick={()=>handleClick3()} className={styles.btn}><AiOutlineSearch/> <Spacer/><Text sx={{
          '@media all and (min-width:0px) and (max-width:987px)':{
           display:'none'
          }
  
          
         }} fontSize='12px'>SEARCH</Text><BiChevronDown /></Box>
    </Flex>
     {trainer && <Container  className={styles.trainer} maxW='100%' pt={2}> trainerdfhjdhj sdfhgh fjsd sfj sdfhg sdhf</Container>} 
     {filter && <Container  className={styles.filter} maxW='100%' pt={2}>filter dfhjdhj sdfhgh fjsd sfj sdfhg sdhf</Container>} 
      {search &&<Container  className={styles.filter} maxW='100%' pt={2}>search dfhjdhj sdfhgh fjsd sfj sdfhg sdhf</Container>}

    </Container>
    <Container maxW='100%' pt={2}  className={styles.cartCont}>
      <div style={{border:"1px solid green"}} className={styles.a}>gadfgfasdgh <br />ashdashjdh <br />hsahjhd</div>
      <div style={{border:"1px solid green"}} className={styles.b}>asbnvbdnbdn <br />sajjsdjsdjsd</div>
    </Container>
    </>
}