/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Route,Redirect } from 'react-router-dom';
import React from 'react';
//import {logInData} from '../module/login/loginReducer';
import AuthClient from '../utils/auth_controller'; 

class AuthorizedRoute extends React.Component {
    constructor(props){
        super(props);
    }
   
    render() {
        const path = this.props.path;
        const Component = this.props.component;
         
        if (AuthClient.getSession()) {
            return (<Route path={path} component={Component} />)
        } else {
            return(<Redirect to="/auth/login" />);
        }


    }
}

export default AuthorizedRoute;