import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { elementReducer, userReducer } from "./services/reducer";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import { ElementStateType, UserDataInitialStateType } from "./services/data-structure";

const resultingReducers = combineReducers({
    userReducer:userReducer,
    elementReducer: elementReducer
})
type GlobalState = {
    userReducer: UserDataInitialStateType,
    elementReducer: ElementStateType
}
const store = configureStore({
        reducer: resultingReducers,
        middleware: (defaultMiddleware)=>defaultMiddleware({serializableCheck:false, immutableCheck:false}).concat(thunk,logger)
    })

export {store};
export type {GlobalState};