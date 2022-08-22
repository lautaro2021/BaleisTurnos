// import { async } from "@firebase/util";
import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_ALL_TURNOS = "GET_ALL_TURNOS"


export function getAllUsers(){
    return async (dispatch:any)=>{
        try {
            const allUsers = await axios('/users')
            console.log('action',allUsers.data)
            dispatch({
                type: GET_ALL_USERS,
                payload: allUsers.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getAllTurnos(){
    return async (dispatch:any)=>{
        try {
            const allTurnos = await axios('/turnos')
            console.log('action',allTurnos.data)
            dispatch({
                type: GET_ALL_TURNOS,
                payload: allTurnos.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function createUser(user:any){
    return async() => {
        try {
            let resp = await axios.post('/users', user);
            return resp;
        } catch (error) {
            console.log(error)
        }
    }
}