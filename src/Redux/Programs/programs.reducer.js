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
  DELETE_PROGRAM_REQUEST,
  DELETE_PROGRAM_FAILURE,
  DELETE_PROGRAM_SUCCESS,
  ADD_PROGRAM_REQUEST,
  ADD_PROGRAM_SUCCESS,
  ADD_PROGRAM_FAILURE,
  UPDATE_PROGRAM_REQUEST,
  UPDATE_PROGRAM_SUCCESS,
  UPDATE_PROGRAM_FAILURE,
} from "../Programs/programs.actionTypes";

const initState = { programData: [], AddProgram: { loading: false, error: false },  DeleteProgram: { loading: false, error: false },  UpdateProgram: { loading: false, error: false } };

export const programsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_WORKOUT_PLANS: {
      return {
        ...state,
        programData: payload,
      };
    }


    case ADD_PROGRAM_REQUEST:
      return {
        ...state,
        AddProgram: { loading: true, error: false },
      };
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        AddProgram: { loading: false, error: false },
        programData: [...state.programData, payload],
      };

    case ADD_PROGRAM_FAILURE:
      return {
        ...state,
        AddProgram: { loading: false, error: true },
      };


    case DELETE_PROGRAM_REQUEST:
      return {
        ...state,
        DeleteProgram: { loading: true, error: false },
      };
    case DELETE_PROGRAM_SUCCESS:
      return {
        ...state,
        DeleteProgram: { loading: false, error: false },
        programData : state.programData.filter((item) => item._id !== payload),
      };

    case DELETE_PROGRAM_FAILURE:
      return {
        ...state,
        DeleteProgram: { loading: false, error: true },
      };


      case UPDATE_PROGRAM_REQUEST:
        return {
          ...state,
          UpdateProgram: { loading: true, error: false },
        };
      case UPDATE_PROGRAM_SUCCESS:
        return {
          ...state,
          UpdateProgram : { loading: false, error: false },
          programData : state.programData.map((item) =>
            item._id === payload._id ? payload : item
          ),
        };
  
      case UPDATE_PROGRAM_FAILURE:
        return {
          ...state,
          UpdateProgram: { loading: false, error: true },
        };


    default:
      return state;
  }
};
