import { GET_FIREBASE_DATA,GET_FIREBASE_ERR,GET_FIREBASE_RECEIVED,USER_IS_LOGGED_IN,GET_SITE_DATA } from "./types";

export const getFirebaseData = (message:any) => {
    return{
        type:GET_FIREBASE_DATA,
        payload:message
    }
}

export const getFirebaseDataErr = (message:any) => {
    return{
        type:GET_FIREBASE_ERR,
        payload:message
    }
}

export const firebaseDataReceived = (message:any) => {
    return{
        type:GET_FIREBASE_RECEIVED,
        payload:message
    }
}

export const userHasLoggedIn = () => {
    return{
        type:USER_IS_LOGGED_IN
    }
}

export const getSiteDetails = () => {
    return{
        type:GET_SITE_DATA
    }
}