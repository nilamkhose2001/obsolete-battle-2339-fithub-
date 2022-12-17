import axios from "axios";
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_ERROR } from "./auth.types";

export const login =(creds)=>async(dispatch)=>{
    dispatch({type: AUTH_LOGIN_LOADING});
    try{
        
        let res= await axios.post("https://fithub.onrender.com/auth/login", creds);
        console.log(res);
        dispatch({type: AUTH_LOGIN_SUCCESS, payload:res.data.token})
        if(res.data.token){
            localStorage.setItem("userToken",JSON.stringify(res.data.token));
        }
        return res.data;
    }
    catch(err){
    dispatch({type:AUTH_LOGIN_ERROR});
    }
    // return is not mandatory thing in actions
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userToken");
    dispatch({type: AUTH_LOGOUT});
}


export const signup = (creds) => async (dispatch) => {
    dispatch({type:AUTH_SIGNUP_LOADING});
    try{
        let response = await axios.post(`https://fithub.onrender.com/auth/signup`, creds);
        console.log(response);
        dispatch({type:AUTH_SIGNUP_SUCCESS, payload: response.data.message});
        // if(response.data.token){
        //     localStorage.setItem("userToken",JSON.stringify(response.data.token));
        // }
        return response.data;
    } catch (e) {
        dispatch({type:AUTH_SIGNUP_ERROR, payload:e.response.data});
    }
}

