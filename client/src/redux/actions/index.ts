import { async } from "@firebase/util";
import axios from "axios";
import {Dispatch} from "redux";


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