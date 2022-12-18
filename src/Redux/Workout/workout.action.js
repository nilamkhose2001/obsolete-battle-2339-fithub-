import axios from "axios";
import { ADD_WORKOUT_FAILURE, ADD_WORKOUT_REQUEST, ADD_WORKOUT_SUCCESS, DELETE_WORKOUT_FAILURE, DELETE_WORKOUT_REQUEST, DELETE_WORKOUT_SUCCESS, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_WORKOUT_ERROR, GET_WORKOUT_LOADING, GET_WORKOUT_SUCCESS, UPDATE_WORKOUT_FAILURE, UPDATE_WORKOUT_REQUEST, UPDATE_WORKOUT_SUCCESS } from "./workout.actionType"

export const workoutAction=(url)=>async(dispatch)=>{
    dispatch({type:GET_DATA_LOADING})
    try{
        const response=await axios.get(url)

        dispatch({type:GET_DATA_SUCCESS,payload:response.data.product})

    }catch(e){
        dispatch({type:GET_DATA_ERROR})
    }
}

export const getWorkout =(url)=>async(dispatch)=>{
  dispatch({type:GET_WORKOUT_LOADING})
  try{
      const response=await axios.get(url)

      dispatch({type:GET_WORKOUT_SUCCESS ,payload:response.data.product})

  }catch(e){
      dispatch({type:GET_WORKOUT_ERROR })
  }
}

export const addWorkout = (data) => async (dispatch) => {
 
    try {
      dispatch({ type: ADD_WORKOUT_REQUEST });
  
      const res = await fetch("https://fithub.onrender.com/products", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      let dataa = await res.json();
      
  
      dispatch({ type: ADD_WORKOUT_SUCCESS , payload: dataa });
    } catch (error) {
      dispatch({
        type: ADD_WORKOUT_FAILURE ,
      });
    }
  };
  
  
  export const deleteWorkout = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_WORKOUT_REQUEST });
  
      await fetch(`https://fithub.onrender.com/products/${id}`, {
        method: "DELETE",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: DELETE_WORKOUT_SUCCESS , payload: id });
    } catch (error) {
      dispatch({
        type: DELETE_WORKOUT_FAILURE ,
      });
    }
  };



  export const updateWorkout = (id, data) => async (dispatch) => {
  
    try {
      dispatch({ type: UPDATE_WORKOUT_REQUEST });
  
     let response= await fetch(`https://fithub.onrender.com/products/${id}`, {
        body: JSON.stringify(data),
        method: "PATCH",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
       let data1= await response.json()
      dispatch({ type: UPDATE_WORKOUT_SUCCESS , payload: data1 });
    
    } catch (error) {
      dispatch({
        type: UPDATE_WORKOUT_FAILURE ,
      });
    }
  };