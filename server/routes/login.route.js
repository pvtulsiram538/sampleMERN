import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';
/*
 * create separate express router  for login and export it 
 */
const loginRoute = new Router(); 

loginRoute.route('/login').post(LoginController.loginUser);
loginRoute.route('/logout').post(LoginController.logout);

export default loginRoute;