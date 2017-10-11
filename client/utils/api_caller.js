/* 
 * this api caller will serve as common end point communication 
 * for the project
 * Note:change the port number below to your local node 
 * server port number
 
 */


import fetch from 'isomorphic-fetch';
import config from '../../server/config';
import AuthClient from './auth_controller';
export const API_URL = (typeof window === 'undefined'||process.env.NODE_ENV === 'production') ?
        `http://${process.env.BASE_URL}:${config.port}/api` : (`http://localhost:${process.env.PORT || config.port}/api`);


//export const API_URL = 'http://104.197.251.69:8002/api';

export default async function callApi(endpoint, method, body) {
        
     let options = {
         mode:'cor',
         headers: {'content-type': 'application/json'},
         method:method,
         body:JSON.stringify(body)
     }
        
    try {
        const  response = await fetch(`${API_URL}/${endpoint}`,options);
        return response.json();
        
    } catch (Error) {
        return {status: false, error: Error};
}
};