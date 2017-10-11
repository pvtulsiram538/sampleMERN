/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import md5 from  'md5';
import {database} from '../server';
export function loginUser(req, res) {
    console.log(req.body);
    if (!req.body.email || req.body.email === "") {
        res.json({status: false, statusCode: 201, error: "email empty"});
    } else if (!req.body.password || req.body.password === "") {
        res.json({status: false, statusCode: 201, error: "pasword empty"});
    } else {

        var db = database.db('users');
        var collection = db.collection('sample_user_insertion20170817');
        collection.findOne({'email': req.body.email}, (err, user) => {

            if (!err) {
                if (user) {
                    if (req.body.email === user.email && md5(req.body.password) === user.password) {

                        //  Generate New Token and Update, send the new token
                        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                        var string_length = 8;
                        var randomstring = '';
                        for (var i = 0; i < string_length; i++) {
                            var rnum = Math.floor(Math.random() * chars.length);
                            randomstring += chars.substring(rnum, rnum + 1);
                        }
                        user.token = md5(randomstring);
                        // updating token when user logging in....
                        collection.save(user,(updateTokenError, updated) => {
                            if (updateTokenError) {
                                res.json({status:false,statusCode:500,error:"something went wrong"});
                            } else {

                                res.json({status: true, statusCode: 200, token: user.token,email:user.email});
                            }
                        });
                    } else {

                        res.json({status: false, statusCode: 404, error: "Invalid password"});
                    }
                } else {
                    res.json({status: false, statusCode: 404, error: "user not found"});
                }
            } else {
                res.json({status: false, statusCode: 500, error: "something went wrong"});
            }
        });
    }
}
export function logout (req,res) {
    console.log(req.body);
    res.json({status:true,statusCode: 200});
}
