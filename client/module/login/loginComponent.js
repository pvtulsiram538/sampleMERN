/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import PropTypes from 'prop-types';
import s from './Login.css';
import {connect}  from 'react-redux';
import { browserHistory } from 'react-router';
import {Prompt} from 'react-router-dom';
import * as loginAction from './loginActions';
import {logInData} from './loginReducer';
import AuthClient from '../../utils/auth_controller';
import {bindActionCreators} from 'redux'
import {actions as toastrActions} from 'react-redux-toastr';
import {toastr} from 'react-redux-toastr'
import  {validateFields} from '../../utils/validate_fields';
import { lazyload } from 'react-lazyload';

@lazyload({
  height: 200,
  once: true,
  offset: 100
})
class Login extends React.Component {
  constructor(props){
      super(props);

      this.state = {
       email:"",
       password:"",
       isBlocking: false,
       formErrors : {
           email:'',
           password:''

       },
      emailValid: false,
      passwordValid: false,
       formValid:false
  };
//  this.toastr = bindActionCreators(toastrActions, this.props.dispatch);
  }
    static propTypes = {

    };
    checkStatus (res) {
        if(res.isLoggingIn){
            AuthClient.setSession({token:res.token,email:res.email});
             toastr.removeByType('info');
             toastr.removeByType('error');
             this.props.history.push({ pathname: '/app' });

        } else {
             toastr.removeByType('info');
             toastr.removeByType('error');
             toastr.error(`${res.type}`,`${res.error}`);
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        toastr.info('Logging...', 'please wait');
        let userData = {email:this.state.email,password:this.state.password};
        this.props.dispatch(loginAction.login(userData)).then(res=>this.checkStatus(res));
    }
    handleClick = (event)=> {
       event.preventDefault();
        this.setState({
            isBlocking: true
          });
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.name] :e.target.value
        });
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value},
                  () => { validateFields(name, value,this) });
    }


  render() {

     const isBlocking = this.state.isBlocking;
     let pStyle = {
         color:"red"
     };
    return (


      <div>

      <div className={s.root}>

        <div className={s.container}>
          <h1>
            Login Page
          </h1>
          <p className={s.lead}>
            Log in with your username as email address.
          </p>
          <strong className={s.lineThrough}>OR</strong>
          <form onSubmit={this.handleSubmit}>

            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                Username or email address:
              </label>
              <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
                name="email"
                value = {this.state.email}
                autoFocus
                onChange ={this.handleChange}
              />
            </div>
             <div>
          	{this.state.formErrors.email != null ? <p className={`error`} style ={pStyle}>{this.state.formErrors.email}</p> : null}
          </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                value = {this.state.password}
                onChange = {this.handleChange}
              />
            </div>
            <div>
          	{this.state.formErrors.password != null ? <p  style ={pStyle} className={`error`}>{this.state.formErrors.password}</p> : null}
          </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit" disabled={!this.state.formValid}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        logInData: logInData(state)
    };
}

export default connect(mapStateToProps)(Login);
