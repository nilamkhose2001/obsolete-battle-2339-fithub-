import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux"

import thunk from "redux-thunk"
//console.log(feedReducer)
const rootReducer=combineReducers(
    {}
    )

    const createCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export const store=legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))
//compose