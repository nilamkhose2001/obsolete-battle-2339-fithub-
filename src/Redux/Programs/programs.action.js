import axios from "axios";
import {
  GET_WORKOUT_PLANS,
  GET_MEAL_PLANS,
  GET_PILOT_PROGRAMS,
  DELETE_PROGRAM_REQUEST,
  DELETE_PROGRAM_SUCCESS,
  DELETE_PROGRAM_FAILURE,
  ADD_PROGRAM_REQUEST,
  ADD_PROGRAM_SUCCESS,
  ADD_PROGRAM_FAILURE,
  UPDATE_PROGRAM_REQUEST,
  UPDATE_PROGRAM_SUCCESS,
  UPDATE_PROGRAM_FAILURE,
  GET_PROGRAM_PLANS,
} from "../Programs/programs.actionTypes";

export const getWorkoutPrograms = () => async (dispatch) => {
  let res = await axios.get(
    "https://fithub.onrender.com/products?category=program"
  );
  let data = await res.data.product;
  dispatch({
    type: GET_WORKOUT_PLANS,
    payload: data,
  });
};

export const getPrograms = (url) => async (dispatch) => {
  let res = await axios.get(url);
  let data = await res.data.product;
  dispatch({
    type: GET_PROGRAM_PLANS ,
    payload: data,
  });
};




export const addProgram = (data) => async (dispatch) => {
 
  try {
    dispatch({ type: ADD_PROGRAM_REQUEST });

    const res = await fetch("https://fithub.onrender.com/products", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    let dataa = await res.json();
    

    dispatch({ type: ADD_PROGRAM_SUCCESS, payload: dataa });
  } catch (error) {
    dispatch({
      type: ADD_PROGRAM_FAILURE,
    });
  }
};


export const deleteProgram = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROGRAM_REQUEST });

    await fetch(`https://fithub.onrender.com/products/${id}`, {
      method: "DELETE",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: DELETE_PROGRAM_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_PROGRAM_FAILURE,
    });
  }
};


export const updateProgram = (id, data) => async (dispatch) => {
  
  try {
    dispatch({ type: UPDATE_PROGRAM_REQUEST });

   let response= await fetch(`https://fithub.onrender.com/products/${id}`, {
      body: JSON.stringify(data),
      method: "PATCH",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    
     let data1=await response.json();
     console.log(data1)
    dispatch({ type: UPDATE_PROGRAM_SUCCESS , payload: data1 });
  
  } catch (error) {
    dispatch({
      type: UPDATE_PROGRAM_FAILURE ,
    });
  }
};

export const getMealPlans = () => async (dispatch) => {
  let res = await axios.get(
    "https://fithub.onrender.com/products?category=meals"
  );
  let data = await res.data.product;
  dispatch({
    type: GET_MEAL_PLANS,
    payload: data,
  });
};

export const getPilotPrograms = () => async (dispatch) => {
  let res = await axios.get(
    "https://fithub.onrender.com/products?category=pilotprogram"
  );
  let data = await res.data.product;
  dispatch({
    type: GET_PILOT_PROGRAMS,
    payload: data,
  });
};

