/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import React, { Component } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Home from '../module/home/HomeComponent';
import Login from '../module/login/loginComponent';
import lazyload from '../module/lazyload/load_images';

class RootComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return(
        <main>
         <Switch>
      <Route path={`${this.props.match.path}`} exact component={Home} />
      <Route path={`${this.props.match.path}/login`} component={Login} />
      <Route path={`${this.props.match.path}/lazyload`} component={lazyload} />
      <Redirect to={`${this.props.match.path}`} />
    </Switch>
        </main>
      );
    }
};

export default RootComponent;
