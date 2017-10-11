/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import s from './Layout.css';
import Header from '../../Header/HeaderComponent';
import Routers from '../../../components/routers';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <div>
                    <Header />
                    <Route path={`${this.props.match.path}`} component={Routers} />
                </div>
                );
    }
}
;

export default Layout;
