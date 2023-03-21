/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    // eslint-disable-next-line no-unused-vars
    LOGIN_FAIL,
    AUTH_ERROR,
    SET_LOADING,
    LOGOUT,
    USER_LOADED,
    CLEAR_ERRORS
} from '../types';

export default (state, action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
            case REGISTER_FAIL:  
                return{
                    ...state,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload
                }
                // eslint-disable-next-line no-duplicate-case
                case REGISTER_FAIL:  
                return{
                    ...state,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload
                }
            default:
                return state;
    }
}