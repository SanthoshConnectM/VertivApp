import { GET_FIREBASE_DATA,GET_FIREBASE_ERR,GET_FIREBASE_RECEIVED } from "./types";

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