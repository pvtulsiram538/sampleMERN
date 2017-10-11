/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export default class AuthClient {
	constructor(){
	}

	static getSession(){
		if(typeof(Storage) !== "undefined"){
			return localStorage.getItem("login_session");
		}
	}

	static setSession(sessionValue){
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem("login_session", JSON.stringify(sessionValue));
		}
	}

	static deleteSession(){
		if(typeof(Storage) !== "undefined"){
			localStorage.removeItem("login_session");
		}
	}

}