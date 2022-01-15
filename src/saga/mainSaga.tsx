import {call,takeLatest,put} from 'redux-saga/effects';
import { GET_SITE_DATA,GET_SITE_DATA_FAILED } from '../actions/types';
import axios from 'axios';

export function* watchMainSaga(){
    yield takeLatest(GET_SITE_DATA,fetchSiteDataSaga)
}

export function* fetchSiteDataSaga(){
    try{

        let {data} = yield call(fetchSiteDataApi)
        console.log("Mydataaaaaaaaaaa",data)
        // const response = axios.get(
        //     'http://localhost:8071/vertiv');
        // console.log("responseeeeeeeeee",response)
        // return response;
    }catch(err){
        yield put({
            type:GET_SITE_DATA_FAILED,
            paylod:true
        })
    }
}

// function fetchSiteDataApi(){
//     console.log(axios.get("http://localhost:8071/vertiv").then())
//     return axios.request({
//         method:'GET',
//         url:'http://localhost:8071/vertiv'
//     })
// }
async function fetchSiteDataApi() {
    const response = await axios.get(
        'http://localhost:8071/vertiv');
    console.log("responseeeeeeeeee",response)
    return response;
  }
  