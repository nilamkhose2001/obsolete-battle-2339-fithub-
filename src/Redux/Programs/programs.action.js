import axios from "axios";
import {
  GET_WORKOUT_PLANS,
  GET_MEAL_PLANS,
  GET_PILOT_PROGRAMS,
} from "../Programs/programs.actionTypes";

export const getWorkoutPrograms = () => async (dispatch) => {
  let res = await axios.get(
    "https://fithub.onrender.com/products?category=program"
  );
  let data = await res.data;
  dispatch({
    type: GET_WORKOUT_PLANS,
    payload: data,
  });
};
