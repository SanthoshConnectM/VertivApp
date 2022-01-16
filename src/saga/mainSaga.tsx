import {call,takeLatest,put} from 'redux-saga/effects';
import { GET_SITE_DATA,GET_SITE_DATA_FAILED,GET_SITE_DATA_RECEIVED } from '../actions/types';
import axios from 'axios';

export function* watchMainSaga(){
    yield takeLatest(GET_SITE_DATA,fetchSiteDataSaga)
}

export function* fetchSiteDataSaga(){
    try{

        let {data} = yield call(fetchSiteDataApi)
        yield put({
            type:GET_SITE_DATA_RECEIVED,
            payload:data
        })
    }catch(err){
        yield put({
            type:GET_SITE_DATA_FAILED,
            paylod:true
        })
    }
}

function fetchSiteDataApi() {
    const response = axios.get(
        'http://192.168.65.16:8071/vertiv');
    return response;
  }
  