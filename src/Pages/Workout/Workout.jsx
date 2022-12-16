import { Container, Heading,Text } from '@chakra-ui/react'
import { Filter } from '../../Components/Workout/Filter';
import styles from "./Workout.module.css";
export const Workout=()=>{

    return <Container maxW="100%" bg="" p={0}>
    <Text className={styles.heading}>Workout Videos</Text>
    <Filter/>
    </Container>
}