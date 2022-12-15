import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux"
import { workoutReducer } from "./Workout/workout.reducer"
import thunk from "redux-thunk"
//console.log(feedReducer)
const rootReducer=combineReducers(
    {
        workout:workoutReducer
    }
    )

    const createCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export const store=legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))
//compose