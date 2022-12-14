import { Heading,Text } from '@chakra-ui/react'
import { Filter } from '../../Components/Workout/Filter';
import styles from "./Workout.module.css";
export const Workout=()=>{

    return <>
    <Text className={styles.heading}>Workout Videos</Text>
    <Filter/>
    </>
}