import { createStore,combineReducers,applyMiddleware } from "redux";
import { appReducer } from "./appReducer";
// import rootSaga  from './../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';

let rootReducer = combineReducers({data:appReducer})
let sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga)