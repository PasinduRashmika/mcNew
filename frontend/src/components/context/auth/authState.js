import React, { useReducer } from "react";
import axios from 'axios';
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";


const AuthState = props=>{
    const initialState = {
        isAuthenticated: null,
        loading:true,
        user:null,
        error:null,
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    //LOad User
    const loadUser = async ()=>{
        // try{
        //     const res = await axios.get('http://localhost:3000/api/v1/users/getUserProfile');
        //     console.log(res.data);
        // dispatch({
        //     type:USER_LOADED,
        //     payload:res.data
        // })
        // }catch(err){
        //     console.log(err);
        //     dispatch({type:AUTH_ERROR})
        // }
    }

    //Regitser User
    const register = async formData =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

    try{
        const res = await axios.post('http://localhost:3000/api/v1/users/signup',formData,config);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        })
    }catch(err){
        console.log(err.response);
        dispatch({
            type: REGISTER_FAIL,
            payload:err.response.data.msg
        })
    }
    }

    //Login USer 
    const login = ()=>{
        console.log('login');
    }

    //Logout
    const logout = ()=>{
        console.log('logout');
    }

    //Clear Errors
    const clearErrors = ()=>{
        dispatch({type: CLEAR_ERRORS})
    }

    return(
        <AuthContext.Provider
        value={{
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;