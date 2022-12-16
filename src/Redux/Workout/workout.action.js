import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./workout.actionType"

export const workoutAction=()=>async(dispatch)=>{
    dispatch({type:GET_DATA_LOADING})
    try{
        const response=await axios.get('https://fakestoreapi.com/products')
        dispatch({type:GET_DATA_SUCCESS,payload:response.data})

    }catch(e){
        dispatch({type:GET_DATA_ERROR})
    }
}
