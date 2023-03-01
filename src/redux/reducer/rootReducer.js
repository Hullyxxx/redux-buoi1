import { combineReducers } from "redux";
import { demoReducer } from "./DemoReduxMiniReducer";

export const rootReducer = combineReducers({
    demoReducer,
})