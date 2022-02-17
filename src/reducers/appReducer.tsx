import {
  GET_FIREBASE_DATA,
  GET_FIREBASE_ERR,
  GET_FIREBASE_RECEIVED,
  USER_IS_LOGGED_IN,
  GET_SITE_DATA_RECEIVED,
  GET_SITE_DATA_FAILED,
  SET_SEARCH_TEXT,
  CLEAR_SEARCH_TEXT,
  SITE_DATA_IS_LOADING,
} from '../actions/types';

let vertivState: any = {
  firebaseData: {},
  firebaseerror: false,
  hasUserLoggedIn: false,
  siteData: {},
  searchText: '',
  siteDataFetchFailed:false,

  //loading state
  siteDataLoaded: false,

  //animation state
  siteDataIsLoading:true,
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
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case CLEAR_SEARCH_TEXT:
      return {
        ...state,
        searchText: '',
      };
    case USER_IS_LOGGED_IN:
      return {
        ...state,
        hasUserLoggedIn: true,
      };
    case GET_SITE_DATA_RECEIVED:
      return {
        ...state,
        siteData: action.payload,
        siteDataLoaded: true,
      };
    case GET_SITE_DATA_FAILED:
      return{
        ...state,
        siteDataFetchFailed:true,
      }
    case SITE_DATA_IS_LOADING:
      return{
        ...state,
        siteDataIsLoading:action.payload 
      }
    default:
      return {
        ...state,
      };
  }
};
