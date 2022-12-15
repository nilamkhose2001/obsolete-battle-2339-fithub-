import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./workout.actionType"

const initialDataState={
    WorkoutLoading:false,
    WorkoutError:false,
    WorkoutData:[]
}

export const workoutReducer=(state=initialDataState,action)=>{
    switch(action.type){
        case GET_DATA_SUCCESS:{
            return {...state,WorkoutData:action.payload,WorkoutError:false,WorkoutLoading:false}
        }
        case GET_DATA_LOADING:{
            return {...state}
        }
        case GET_DATA_ERROR:{
            return {...state}
        }
        default:return state
    }

}