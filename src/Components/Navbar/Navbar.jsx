import { Box, Container, Flex, Image,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,IconButton} from "@chakra-ui/react";
import {HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon,EditIcon,ChevronDownIcon} from "@chakra-ui/icons";
import logo from "../../Media/Fithub.png";
import workoutVideo from "../../Media/workout-video.png"
import customWorkout from "../../Media/custom-workouts.png"
import workoutProgram from "../../Media/workout-programs.png"
import mealPlan from "../../Media/meal-plans.png"
import piloteProgram from "../../Media/pilot-programs.png"
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineCaretDown } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

export const Navbar = () => {
    const [program,setProgram]=useState(false)
    const [workout,setWorkout]=useState(false)

    const handlehover1=()=>{
        setProgram(false)
        if(workout==false)
        {
            setWorkout(true)
        }
        else{
            setWorkout(false)
        }

    }

    const handlehover2=()=>{
        setWorkout(false)
        if(program==false)
        {
            setProgram(true)
        }
        else{
            setProgram(false)
        }
    }
    const stikc={
        position: '-webkit-sticky',
        position: 'sticky',
        top: '0',
        zIndex:100,
        
      }

  return (
    <>
      <Container style={stikc} maxW="100%" bg="" p={0} className={styles.filterCont} borderBottom='1px solid #F0F4F6' >
        <Container maxW="100%" bg="white" m={0} className={styles.filterCont} display={['none','none','block','block']}>
          <Flex
            justifyContent="space-around"
            alignItems="center"
            fontSize="10px"
            className={styles.Nav}
          >
            <Link to="/">
              <Box className={styles.box} h="80px">
                <Image w="60px" src={logo}></Image>
              </Box>
            </Link>
            <Box className={styles.box} h="80px" onMouseEnter={handlehover1} >
              WORKOUTS <AiOutlineCaretDown style={{ color: "#2EB0C7" }} />
            </Box>
            <Box className={styles.box} h="80px" onMouseEnter={handlehover2} >
              PROGRAMS <AiOutlineCaretDown style={{ color: "#2EB0C7" }} />
            </Box>
            <Box>HEALTHY LIVING</Box>
            <Box>COMMUNITY</Box>
            <Box>ABOUT</Box>
            <Box>STORE</Box>
            <Box>MEMBERSHIP</Box>
            <Box>
              <Link to='/signup'>
                <span style={{ color: "#2EB0C7" }}>Hi! Sign In</span>
                <br />
                MY FITNESS
              </Link>
            </Box>
            
            <Box>
              <Link to='/cart'>
              <BsBag style={{ fontSize: "17px" }} />
              </Link>
            </Box>
          </Flex>
        </Container>
{
      workout &&   <Container
      
       p={4}
          maxW="100%"
          bg="#212432"
          className={styles.filterCont}
          color="white"
           onMouseLeave={handlehover1}
        >
            <Container   maxW='md'  display='flex' justifyContent='space-around' alignItems='center'>
                <Link  to='/workoutvideo'>
                <Image m='auto' mb={2} src={workoutVideo} w='40%' h='50px'></Image>
                    WORKOUT VIDEOS
                </Link>
                <Link to='/customworkout'>
                <Image m='auto' mb={2} src={customWorkout} w='40%' h='50px'></Image>
                    CUSTOM WORKOUT
                </Link>
                </Container>

        </Container>
}
        {
       program && <Container
       p={4}
          maxW="100%"
          bg="#212432"
          className={styles.filterCont}
          color="white"
          onMouseLeave={handlehover2}
        >
           <Container   maxW='container.sm' bg=''  display='flex' justifyContent='space-around' alignItems='center'>
                <Link  to='/workoutprogram'>
                <Image m='auto' mb={2} src={workoutProgram} w='40%' h='50px'></Image>
                    WORKOUT PROGRAMS
                </Link>
                <Link to='/mealplans'>
                <Image m='auto' mb={2} src={mealPlan} w='40%' h='50px'></Image>
                    MEAL PLANS
                </Link>
                <Link  to='/pilotprograms'>
                <Image m='auto' mb={2} src={piloteProgram} w='40%' h='50px'></Image>
                    PILOT PROGRAMS
                </Link>
                <Link to='/routines'>
                <Image m='auto' mb={2} src={customWorkout} w='40%' h='50px'></Image>
                    ROUTINES
                </Link>
                </Container>
        </Container>
}


{/* hamerberge */}

<Container maxW="100%" bg="white" m={0} display={['visible','visible','none','none']}>
  <Flex ml={4}  justifyContent='space-around' alignItems='center'>
  <Link to="/">
              <Box className={styles.box} h="80px">
                <Image w="60px" src={logo}></Image>
              </Box>
            </Link>


            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon  color='#2EB0C7' />}
    variant='outline'
    border='2px solid #2EB0C7'
  />
  <MenuList>
    <MenuItem  >
    <Link  to='/workoutvideo'>
      Workout
    </Link>
   
    </MenuItem>
    <MenuItem  >
      <Link  to='/workoutprogram'>
      Workout Programs
    </Link>
    </MenuItem>
    <MenuItem  >
      <Link  to='/mealplans'>
      Meal Plans
    </Link>
    </MenuItem>
    <MenuItem >
      <Link  to='/pilotprograms'>
      Pilot Programs
    </Link>
    </MenuItem>
    <MenuItem >
      <Link  to='/cart'>
      Cart
    </Link>
    </MenuItem>
    <MenuItem >
      <Link  to='/signup'>
      Signup
    </Link>
    </MenuItem>
  </MenuList>
</Menu>
  </Flex>
</Container>

      </Container>
    </>
  );
};
