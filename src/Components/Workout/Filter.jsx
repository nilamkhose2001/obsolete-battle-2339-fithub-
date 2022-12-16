import {
  Container,
  Flex,
  Text,
  Spacer,
  Box,
  SimpleGrid,
  Image,
  Radio, RadioGroup,Stack, Input, Heading,Button
} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import styles from "./filter.module.css";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlinePersonSearch, MdOutlineFilterAlt } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

import { useSelector,useDispatch } from "react-redux";
import { workoutAction } from "../../Redux/Workout/workout.action";
import { Link } from "react-router-dom";

export const Filter = () => {
  let [filter, setFilter] = useState(false);
  let [search, setSearch] = useState(false);
  let [body,setBody]=useState("");
  let [training,setTraining] = useState("")
  let [equip,setEquip]=useState("")
  let [duration,setDuration]=useState("")
  let [min,setMin] = useState("")
  let [max,setMax] = useState("")
  let [title,setTitle]=useState("")

  let url=`https://fithub.onrender.com/products?category=workout`
  const {WorkoutLoading,WorkoutError,WorkoutData}=useSelector(store=>store.workout)
let id
  const dispatch=useDispatch()

  useEffect(() =>{
    if(title){
      if(id)
    {
         clearTimeout(id)
    }

    id=setTimeout(()=>{
      url=`https://fithub.onrender.com/products?category=workout&&title=${title}`
    },3000)
    }
   else if(body && training &&  equip&& duration && min)
    {
      url=`https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&calories=${min}-${max}&&time=${duration}`
    }
    else if (body && training &&  equip&& duration)
    {
      url=`https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}&&equipment=${equip}&&time=${duration}`

    }
    else if(body && training)
    {
      url=`https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&trainingtype=${training}`

    }
    else if(training &&  equip)
    {
      url=`https://fithub.onrender.com/products?category=workout&&trainingtype=${training}&&equipment=${equip}`

    }
    else if(body && equip){
      url=`https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}&&equipment=${equip}`

    }
    else if(body){
      url=`https://fithub.onrender.com/products?category=workout&&bodyfocus=${body}`
    }
    else if(training)
    {
      url=`https://fithub.onrender.com/products?category=workout&&trainingtype=${training}`

    }
    else if(equip){
      url=`https://fithub.onrender.com/products?category=workout&&equipment=${equip}`

    }
    else if(duration){
      url=`https://fithub.onrender.com/products?category=workout&&time=${duration}`

    }
    else if(min){
      url=`https://fithub.onrender.com/products?category=workout&&calories=${min}-${max}`

    }
    dispatch(workoutAction(url))
  },[body,training,equip,duration,min,max,title])

  console.log(WorkoutData)

  

  const handleClick2 = () => {
    setSearch(false);
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };
  const handleClick3 = () => {
    setFilter(false);
    if (search) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  };

  
  

  return (
    <>
      <Container maxW="100%" pl="5%" className={styles.filterCont}>
        <Flex>
         
          <Box onClick={() => handleClick2()} className={styles.btn}>
            <MdOutlineFilterAlt />
            <Spacer />
            <Text
              sx={{
                "@media all and (min-width:0px) and (max-width:987px)": {
                  display: "none",
                },
              }}
              fontSize="12px"
            >
              FILTER
            </Text>{" "}
            <BiChevronDown />
          </Box>

          <Box onClick={() => handleClick3()} className={styles.btn}>
            <AiOutlineSearch /> <Spacer />
            <Text
              sx={{
                "@media all and (min-width:0px) and (max-width:987px)": {
                  display: "none",
                },
              }}
              fontSize="12px"
            >
              SEARCH
            </Text>
            <BiChevronDown />
          </Box>
        </Flex>
        
        {filter && (
          <Container className={styles.filter} maxW="100%" pt={2}>
            <Flex direction={['column','column','row','row']} justifyContent='space-around'>
              <Box>
                <Text fontWeight='bold'>
                  Duration 
                  <Input htmlSize={1} placeholder="Minute" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
                </Text>
                </Box>
                <Box>
                <Text fontWeight='bold'>
                  Calorie Burn
                  <Flex>
                  <Input htmlSize={1} placeholder="Min" value={min} onChange={(e)=>setMin(e.target.value)}/>-
                  <Input htmlSize={1} placeholder="Max" value={max} onChange={(e)=>setMax(e.target.value)}  />
                  </Flex>

                  
                </Text>
                </Box>
              <Box>
                <Text fontWeight='bold'>Body Focus</Text>
                <RadioGroup onChange={setBody} value={body}>
                  <Stack direction='column'>
                    <Radio value='Upper Body'>Upper</Radio>
                    <Radio value='Lower Body'>Lower</Radio>
                    <Radio value='Total Body'>Total</Radio>
                    <Radio value="">Reset</Radio>
                    
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <Text fontWeight='bold'>
                  Training Type
                  </Text>
                  <RadioGroup onChange={setTraining} value={training}>
                  <Stack direction='column'>
                    <Radio value='HIIT'>HIIT</Radio>
                    <Radio value='Strength Training'>Strength Training</Radio>
                    <Radio value='Pilates'>Pilates</Radio>
                    <Radio value='Cardiovascular'>Cardiovascular</Radio>
                    <Radio value='Stretching/Flexibility'>Stretching/Flexibility</Radio>
                    <Radio value='Low Impact'>Low Impact</Radio>
                    <Radio value='Warm Up/Cool Down'>Warm Up/Cool Down</Radio>
                    <Radio value='Kickboxing'>Kickboxing</Radio>
                    <Radio value="">Reset</Radio>
                  </Stack>
                </RadioGroup>
                
              </Box>
              <Box>
                <Text fontWeight='bold'>Equipment</Text>
                <RadioGroup onChange={setEquip} value={equip}>
                  <Stack direction='column'>
                    <Radio value='No Equipment'>No Equipment</Radio>
                    <Radio value='Dumbbell'>Dumbbell</Radio>
                    <Radio value='Mat'>Mat</Radio>
                    <Radio value='Bench'>Bench</Radio>
                    <Radio value='Exercise Band'>Exercise Band</Radio>
                    <Radio value='Kettlebell'>Kettlebell</Radio>
                    <Radio value='Physio-Ball'>Kickboxing</Radio>
                    <Radio value="">Reset</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Flex>
          </Container>
        )}
        {search && (
          <Container className={styles.filter} maxW="100%" pt={2}>
            <Input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="search by title"/>
          </Container>
        )}
      </Container>
      <Container
        maxW="100%"
        pt={6}
        pl={[8, 14, 20, 24]}
        pr={[8, 14, 20, 24]}
        className={styles.cartCont}
      >
              {WorkoutLoading &&  <div style={{margin:"auto",width:'5%'}}> <Button isLoading border='none' m='auto' ></Button></div>}

        <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
          {WorkoutData?.map((el, i) => (
            <Box bg="white" height="230px" key={i}>
              {" "}
              <Link to='/:id'>

              <Box height="230px">
                <Image src={el.image} borderBottom="1px solid #F0F4F6"></Image>
                <Text ml={2} mt={2} fontSize="13px">
                  {el.title}
                </Text>
                <Text ml={2} mr={2} fontSize="11px">
                  {el.subtitle}
                </Text>
                <Text ml={2} fontSize="11px" color="#4296CB">
                  {el.primaryvalue}
                </Text>
               
              </Box>
              {/* <Box bg="yellow" height="230px"></Box> */}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
