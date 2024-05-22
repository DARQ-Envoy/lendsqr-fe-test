import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { userReducer } from "./services/reducer";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import { UserDataInitialStateType } from "./services/data-structure";

const resultingReducers = combineReducers({
    userReducer:userReducer
})
type GlobalState = {
    userReducer: UserDataInitialStateType
}
const store = configureStore({
        reducer: resultingReducers,
        middleware: (defaultMiddleware)=>[...defaultMiddleware({serializableCheck:false, immutableCheck:false}),logger, thunk]
    })

export {store};
export type {GlobalState};