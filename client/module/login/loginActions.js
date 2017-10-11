/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import callApi from '../../utils/api_caller';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const IS_LOGGING = 'IS_LOGGING';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING_OUT = 'LOGGING_OUT';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';


function loginUser(res) {
    return {
        type: IS_LOGGING,
        isLoggingIn:res.status,
        token:res.token
       
    };
}

function loginFail(res) {
    return {
        type: LOGIN_FAIL,
        status: res.status,
        error:res.error
    };
}

function userLoggedIn(res) {
    return {
        type: LOGGED_IN,
        status: res.status
    };
}

function logutFail(res) {
    return {
        type: LOGOUT_FAIL,
        status: res.status
    };
}
function logoutUser(res) {
    return {
        type: LOGGING_OUT,
        status: res.status,
        token:''
    };
}
function userLoggedOut(res) {
    return {
        type: LOGGED_OUT,
        status: res.status
    };
}

export function login(usedData) {

    return (dispatch) => {
        return callApi('login', 'post',
                usedData
                ).then(res => {
            if (res.error) {
                return dispatch(loginFail(res));
            } else {
                return dispatch(loginUser(res));
            }
        });
    };
}

export function isLoggedIn() {
    return (dispatch) => {
       
      return  dispatch(userLoggedIn({status:true}));
    };
    
}

export function logout(userData) {
    let body = JSON.parse(userData);
    return (dispatch) => {
       return callApi('logout', 'post',
                body).then(res => {
                    
            if (res.error) {
                return dispatch(logutFail(res));
            } else {
                
                return dispatch(logoutUser(res));
            }
        });
    }
}