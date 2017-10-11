/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import s from './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    constructor(props) {
      super(props);
  }
    render() {
        return(
                <div className={s.root}>
                    <div className={s.container}>
                        <Navigation />
                        <div className={s.banner}>
                            <h1 className={s.bannerTitle}>Title</h1>
                        </div>
                    </div>
                </div>
                );
    }
}
;

export default Header;
