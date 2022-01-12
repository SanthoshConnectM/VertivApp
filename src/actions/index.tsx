import { GET_FIREBASE_DATA } from "./types";

export const getFirebaseData = (data:any) => {
    return{
        type:GET_FIREBASE_DATA,
        payload:data.payload

    }
}