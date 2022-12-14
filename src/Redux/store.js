import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux"

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Pages/Cart/api/cartSlice';
import storeSlice from '../Pages/Cart/api/storeSlice';
import thunk from "redux-thunk"
//console.log(feedReducer)
const rootReducer=combineReducers(
    {

    }
    )

    const createCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

// export const store=legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))



const store = configureStore({
    reducer:{
        storeSlice,
        cart : cartSlice,
    },
});



export default store;