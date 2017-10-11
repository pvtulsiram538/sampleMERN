/**
 * Root Reducer
 */

import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import login from './module/login/loginReducer';
export default combineReducers({
        login,
        toastr: toastrReducer // <- Mounted at toastr.
    });
