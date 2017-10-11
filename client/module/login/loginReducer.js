/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {
       LOGIN_FAIL,
       IS_LOGGING,
       LOGGED_IN,
       LOGGING_OUT,
       LOGGED_OUT,
       LOGOUT_FAIL
    } from './loginActions';
    
const initialState = {
  status: false, token: '',isLoggingIn: false,isLoggingout:false, data: {}, error :''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAIL : 
           return Object.assign({},state,{error:action.error});
        case IS_LOGGING :
            return Object.assign({}, state, {isLoggingIn:action.isLoggingIn,token:action.token});
        
        case LOGGED_IN :
           
            return Object.assign({}, state, {status:action.status,isLoggingIn:false});
         case LOGGING_OUT :
           
            return Object.assign({}, state, {status:false,isLoggingout:action.status});
        case LOGGED_OUT :
         return Object.assign({},state,{status:false,token:'',isLoggingout:action.status});
         
        case LOGOUT_FAIL:
        return Object.assign({},state,{error:action.error});

        default:
            return state;
}
};


export const logInData = state => state.login;

export default LoginReducer;