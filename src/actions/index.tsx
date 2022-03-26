import {
  GET_FIREBASE_DATA,
  GET_FIREBASE_ERR,
  GET_FIREBASE_RECEIVED,
  USER_IS_LOGGED_IN,
  GET_SITE_DATA,
  SET_SEARCH_TEXT,
  CLEAR_SEARCH_TEXT,
  SITE_DATA_IS_LOADING,
  SITE_DATA_RENDERING
} from './types';

export const getFirebaseData = (message: any) => {
  return {
    type: GET_FIREBASE_DATA,
    payload: message,
  };
};

export const getFirebaseDataErr = (message: any) => {
  return {
    type: GET_FIREBASE_ERR,
    payload: message,
  };
};

export const firebaseDataReceived = (message: any) => {
  return {
    type: GET_FIREBASE_RECEIVED,
    payload: message,
  };
};


export const setSearchText = (message: any) => {
    return {
      type: SET_SEARCH_TEXT,
      payload: message,
    };
};

export const clearSearchText = () => {
    return {
      type: CLEAR_SEARCH_TEXT
    };
};

export const userHasLoggedIn = () => {
  return {
    type: USER_IS_LOGGED_IN,
  };
};

export const getSiteDetails = (reqPayload:any) => {
  return {
    type: GET_SITE_DATA,
    payload:reqPayload
  };
};

export const siteDataIsLoading = (data:any) => {
  return{
    type:SITE_DATA_IS_LOADING,
    payload:data
  }
} 

export const setSiteDataRendering = (data:any) => {
  return{
    type:SITE_DATA_RENDERING,
    payload:data
  }
}