import {all,fork} from 'redux-saga/effects';

import {watchMainSaga} from './mainSaga';

export default function* rootSaga(){
    yield  all([fork(watchMainSaga)])
}