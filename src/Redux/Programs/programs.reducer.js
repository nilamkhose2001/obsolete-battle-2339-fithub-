import {
  GET_WORKOUT_PLANS,
  GET_MEAL_PLANS,
  GET_PILOT_PROGRAMS,
} from "../Programs/programs.actionTypes";

const initState = {
  workoutProgramData: [],
  pilotProgramData: [],
  mealPlansData: [],
};

export const programsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_WORKOUT_PLANS: {
      return {
        ...state,
        workoutProgramData: payload,
      };
    }

    case GET_MEAL_PLANS: {
      return {
        ...state,
        mealPlansData: payload,
      };
    }

    case GET_PILOT_PROGRAMS: {
      return {
        ...state,
        pilotProgramData: payload,
      };
    }

    default:
      return state;
  }
};
