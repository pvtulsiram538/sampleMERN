/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import { Switch, Route, Redirect }
from 'react-router-dom';
import Login from '../../login/loginComponent';
import AuthClient from '../../../utils/auth_controller';

class UnauthorizedLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(AuthClient.getSession()) {
          return (
                <Redirect to="/app" />
                );
        }
        return ( <div>
                <Switch>
                <Route path="/auth/login" component={Login}/>
                <Redirect to="/auth/login" />
                </Switch>
            </div>)
    }
}





export default UnauthorizedLayout;