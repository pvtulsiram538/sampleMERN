/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import config from './config';
const MongoClient = require('mongodb').MongoClient;

var MongoConnection =  function(){

return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGO_URL, {connectTimeoutMS: 90000, socketTimeoutMS: 90000}, (err, res) => {
        if (!err) {
            resolve(res);
        } else {
            console.log(err);
            reject(err);
        }
    });
});
}
export default MongoConnection;
