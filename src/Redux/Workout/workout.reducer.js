import { ADD_WORKOUT_FAILURE, ADD_WORKOUT_REQUEST, ADD_WORKOUT_SUCCESS, DELETE_WORKOUT_FAILURE, DELETE_WORKOUT_REQUEST, DELETE_WORKOUT_SUCCESS, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_WORKOUT_ERROR, GET_WORKOUT_LOADING, GET_WORKOUT_SUCCESS, UPDATE_WORKOUT_FAILURE, UPDATE_WORKOUT_REQUEST, UPDATE_WORKOUT_SUCCESS } from "./workout.actionType"

const initialDataState={
    WorkoutLoading:false,
    WorkoutError:false,
    WorkoutData:[],
    WorkoutAdminData:[],
    WorkoutAdminLoading:false,
    WorkoutAdminError:false,
    AddWorkout: { loading: false, error: false },  DeleteWorkout: { loading: false, error: false }, UpdateWorkout : { loading: false, error: false }}

export const workoutReducer=(state=initialDataState,action)=>{
    switch(action.type){
        case GET_DATA_SUCCESS:{
            return {...state,WorkoutData:action.payload,WorkoutError:false,WorkoutLoading:false}
        }

        case GET_DATA_LOADING:{
            return {...state,WorkoutLoading:true,WorkoutError:false}
        }
        case GET_DATA_ERROR:{
            return {...state,WorkoutLoading:false,WorkoutError:true}
        }


        case GET_WORKOUT_LOADING :{
          return {...state,WorkoutAdminLoading:true,WorkoutAdminError :false}
       }

      case GET_WORKOUT_SUCCESS :{
        return {...state, WorkoutAdminData :action.payload,WorkoutAdminLoading :false,WorkoutAdminError:false}
      }
      case GET_WORKOUT_ERROR :{
          return {...state,WorkoutAdminLoading:false,WorkoutAdminError:true}
      }


      case ADD_WORKOUT_REQUEST:
          return {
        ...state,
        AddWorkout: { loading: true, error: false },
       };
      case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        AddWorkout: { loading: false, error: false },
        WorkoutAdminData: [...state.WorkoutAdminData, action.payload],
      };

      case ADD_WORKOUT_FAILURE:
      return {
        ...state,
        AddWorkout: { loading: false, error: true },
      };


       case DELETE_WORKOUT_REQUEST:
      return {
        ...state,
        DeleteWorkout: { loading: true, error: false },
      };
      case DELETE_WORKOUT_SUCCESS:
      return {
        ...state,
        DeleteWorkout: { loading: false, error: false },
        WorkoutAdminData : state.WorkoutAdminData.filter((item) => item._id !== action.payload),
      };

    case DELETE_WORKOUT_FAILURE:
      return {
        ...state,
        DeleteWorkout: { loading: false, error: true },
      };

      case UPDATE_WORKOUT_REQUEST:
        return {
          ...state,
          UpdateWorkout : { loading: true, error: false },
        };
      case UPDATE_WORKOUT_SUCCESS:
        return {
          ...state,
          UpdateWorkout  : { loading: false, error: false },
          WorkoutAdminData : state.WorkoutAdminData.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
  
      case UPDATE_WORKOUT_FAILURE:
        return {
          ...state,
          UpdateWorkout : { loading: false, error: true },
        };


        default:return state
    }

}