import {
    GET_ALL_TURNOS,
    GET_ALL_USERS
} from '../actions'

const initialState = {
    allUsers: [],
    allTurnos: []
}

export default function rootReducer(state = initialState,action:any){
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers : action.payload
            }
        case GET_ALL_TURNOS:
            return {
                ...state,
                allTurnos : action.payload
            }
        default:
            return state
    }
}