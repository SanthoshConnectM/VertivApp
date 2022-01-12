import { createStore,combineReducers,applyMiddleware } from "redux";
import { appReducer } from "./appReducer";

let rootReducer = combineReducers({data:appReducer})

export const store = createStore(rootReducer)
