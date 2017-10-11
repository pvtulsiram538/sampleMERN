/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Home.css';
import {store} from '../../index';
import {isLoggedIn} from '../login/loginActions';
import {toastr} from 'react-redux-toastr';
class  Home extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        store.dispatch(isLoggedIn());
    }

    updateViewport = () => {
        this.setState({
            viewport: {
                top: window.pageYOffset,
                height: window.innerHeight
            }
        });
    }

    render() {


        return(<div>
            <div className={s.root}>
                <div className={s.container}>
                    <h1>HOME</h1>
                </div>
            </div>
        </div>)
    }

}

export default Home;