import { GET_FIREBASE_DATA } from "../actions/types";

let vertivState:any = {
    firebaseData:{}
}

type Actions = {
    type:any,
    paylod:any
}

export const appReducer = (state=vertivState,action:Actions) => {
    switch(action.type){
        case GET_FIREBASE_DATA:
            return{
                ...state,
                firebaseData: action.paylod
            }
        default:
            return{
                ...state
            }
    }
}