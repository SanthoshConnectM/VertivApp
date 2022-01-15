import {call,takeLatest,put} from 'redux-saga/effects';
import { GET_FIREBASE_DATA,GET_FIREBASE_RECEIVED,GET_FIREBASE_ERR } from '../actions/types';

// export function* watchMainSaga(){
//     yield takeLatest(GET_FIREBASE_DATA,fetchFirebaseSaga)
// }

// export function* fetchFirebaseSaga(){
//     try{

//         let {data} = yield call(fetchFirebaseData)

//     }catch(err){
//         yield put({
//             type:GET_FIREBASE_ERR,
//             paylod:""
//         })
//     }
// }

// function fetchFirebaseData(){
//     return 
// }