import { Box, Container, Flex ,Image} from "@chakra-ui/react"
import logo from "../../Media/Fithub.png"
import styles from "./navbar.module.css"
import {Link} from "react-router-dom"
import { AiOutlineSearch,AiOutlineCaretDown } from "react-icons/ai";
import {BsBag} from "react-icons/bs"
import { BiChevronDown } from "react-icons/bi";

export const Navbar=()=>{



    return <>
          <Container maxW="100%" bg="" className={styles.filterCont}>
          <Container maxW="100%" bg="" className={styles.filterCont}>
            <Flex justifyContent='space-around' alignItems='center' fontSize='10px' className={styles.Nav}>
            <Link to="/" >
                <Box className={styles.box}  h='80px'>
                    
                    <Image w='60px' src={logo}></Image>

                    
                </Box>
                </Link>
                <Box className={styles.box}  h='80px'>
                    WORKOUTS  <AiOutlineCaretDown style={{color:"#2EB0C7"}} />  
                </Box>
                <Box className={styles.box}  h='80px'>
                    PROGRAMS    <AiOutlineCaretDown style={{color:"#2EB0C7"}}/>
                </Box>
                <Box>
                    HEALTHY LIVING
                </Box>
                <Box>
                    COMMUNITY
                </Box>
                <Box>
                    ABOUT
                </Box>
                <Box>
                    STORE
                </Box>
                <Box>
                    MEMBERSHIP
                </Box>
                <Box>
                    <Link>
                    <span style={{color:"#2EB0C7"}}>
                    Hi! Sign In
                    </span>
                    <br/>
                    MY FITNESS
                    </Link>
                </Box>
                <Box>
                <AiOutlineSearch style={{fontSize:"17px"}}/>
                </Box>
                <Box>
                    <BsBag style={{fontSize:"17px"}}/>
                </Box>
                
            </Flex>
            </Container>

            <Container maxW="100%" bg="#212432" className={styles.filterCont}>
</Container>

            </Container>
    </>
}