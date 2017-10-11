/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import InnerLayout from '../module/Layout/InnerLayout/LayoutComponent';
import UnauthorizedLayout from '../module/Layout/UnauthorizedLayout/UnAuthorizedLayoutComponent'
import {Switch, Route,Redirect} from 'react-router-dom';
import Routers from './routers';
import AuthorisedRoute from './AuthorisedRoute';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div>
                <Switch>
                <Route path="/auth" component={UnauthorizedLayout}/>
                 <AuthorisedRoute path="/app" component ={InnerLayout}/>
                  <Redirect to="/auth" />
                </Switch>
                </div>
                );
    }
}
;

export default App;
