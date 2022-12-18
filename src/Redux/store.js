import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { workoutReducer } from "./Workout/workout.reducer"

import thunk from "redux-thunk";
import { programsReducer } from "./Programs/programs.reducer";
import { cartReducer } from "./Cart/cart.reducer";
//console.log(feedReducer)

const rootReducer = combineReducers({
  auth: authReducer,
  programs: programsReducer,
        workout:workoutReducer,
        cart: cartReducer,
    }
    )

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createCompose(applyMiddleware(thunk))
);
//compose
