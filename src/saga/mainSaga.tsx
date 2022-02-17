import {call,takeLatest,put} from 'redux-saga/effects';
import { GET_SITE_DATA,GET_SITE_DATA_FAILED,GET_SITE_DATA_RECEIVED } from '../actions/types';
import axios from 'axios';

export function* watchMainSaga(){
    yield takeLatest(GET_SITE_DATA,fetchSiteDataSaga)
}

export function* fetchSiteDataSaga(reqPayload:any){
    try{
        let {data} = yield call(fetchSiteDataApi,reqPayload)
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

function fetchSiteDataApi(reqPayload:any) {
    // const response = axios.get(
    //     'http://192.168.43.16:8071/vertiv');
    const response = axios.get(reqPayload.payload.siteURL, { headers: { 'Authorization': reqPayload.payload.siteAuth} })
    return response;
  }
  