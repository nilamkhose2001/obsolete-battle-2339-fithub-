import {
  Container,
  Flex,
  Text,
  Spacer,
  Box,
  SimpleGrid,
  Image,
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
  let [trainer, setTrainer] = useState(false);
  let [filter, setFilter] = useState(false);
  let [search, setSearch] = useState(false);
  const {WorkoutLoading,WorkoutError,WorkoutData}=useSelector(store=>store.workout)

  const dispatch=useDispatch()

  useEffect(() =>{
    dispatch(workoutAction())
  },[])

  console.log(WorkoutData)

  let data = [
    {
      "card-content href":
        "https://www.fitnessblender.com/videos/quick-hiit-with-extended-cool-down-tabata-inspired-intervals-and-feel-good-foam-rolling",
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg",
      title: "Quick HIIT With Extended Cool Down",
      subtitle: "Tabata-Inspired Intervals and Feel-Good Foam Rolling",
      primaryvalue: "29 Min • Total Body",
      trainingtype: "HIIT, Stretching/Flexibility",
      equipment: "No Equipment, Foam Roller",
      calories: "125-232",
      "detail-value 5": "32",
      "detail-value 6": "15",
      "detail-value 7": 6,
      "-hidden": "",
    },
  ];

  const handleClick2 = () => {
    setTrainer(false);
    setSearch(false);
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };
  const handleClick3 = () => {
    setTrainer(false);
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
            filter dfhjdhj sdfhgh fjsd sfj sdfhg sdhf
          </Container>
        )}
        {search && (
          <Container className={styles.filter} maxW="100%" pt={2}>
            search dfhjdhj sdfhgh fjsd sfj sdfhg sdhf
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
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
          {data?.map((el, i) => (
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
              <Box bg="yellow" height="230px"></Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
