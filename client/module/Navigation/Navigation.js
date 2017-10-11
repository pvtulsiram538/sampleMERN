/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import s from './Navigation.css';
import { Link } from 'react-router-dom';
import {store} from '../../index';
import AuthClient from '../../utils/auth_controller';
import {logout} from '../login/loginActions';
import { withRouter } from 'react-router';
class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }
    
    logout = () => {
        store.dispatch(logout(AuthClient.getSession())).then(res => {
            if (res.status) {
                AuthClient.deleteSession(); // empty token and email
                this.props.history.push({pathname: '/auth/login'});
            }
        });
    }
    render() {
        return (
                <div className={s.root} role="navigation">
                    <Link className={s.link} to="/app">
                    Home
                    </Link>
                    <Link className={s.link} to="/app/lazyload">
                    lazyload
                    </Link>
                    <span className={s.spacer}> | </span>
                    <button type = "button" onClick = {this.logout}>
                        Log out
                    </button>
                </div>
                );
    }
}

Navigation = withRouter(Navigation);

export default Navigation;
