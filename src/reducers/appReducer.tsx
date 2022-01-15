import {
  GET_FIREBASE_DATA,
  GET_FIREBASE_ERR,
  GET_FIREBASE_RECEIVED,
  USER_IS_LOGGED_IN,
  GET_SITE_DATA,
} from '../actions/types';

let vertivState: any = {
  firebaseData: {},
  firebaseerror: false,
  hasUserLoggedIn: false,
};

type Actions = {
  type: any;
  payload: any;
};

export const appReducer = (state = vertivState, action: Actions) => {
  switch (action.type) {
    case GET_FIREBASE_DATA:
      return {
        ...state,
        firebaseData: action.payload,
      };
    case GET_FIREBASE_ERR:
      return {
        ...state,
        firebaseerror: action.payload,
      };
    case GET_FIREBASE_RECEIVED:
      return {
        ...state,
        firebaseData: action.payload,
      };
    case USER_IS_LOGGED_IN:
      return {
        ...state,
        hasUserLoggedIn:true
      };
    default:
      return {
        ...state,
      };
  }
};
