// const initState = {
//     _id: "",
//     contentshref: "",
//     exclusiveitem: "",
//     image: "",
//     week: "",
//     time: "",
//     desc: "",
//     price: "",
//     category: "",
//   };

import {
  GET_WORKOUT_PLANS,
  GET_MEAL_PLANS,
  GET_PILOT_PROGRAMS,
} from "../Programs/programs.actionTypes";

const initState = { programData: [] };

export const programsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_WORKOUT_PLANS: {
      return {
        ...state,
        programData: payload,
      };
    }
    default:
      return state;
  }
};
