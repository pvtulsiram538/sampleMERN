/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import md5 from 'md5';
var insertDefaultUser = function (database) {


    return new Promise((resolve, reject) => {
        var db = database.db('users');
        var collection = db.collection('sample_user_insertion20170817');
        const password = md5('123456');
        collection.count({}, (err, result) => {
            if (!err) {
                if (result !== 0 && result > 1) {
                    resolve(true);
                } else {
                    collection.update({},
                            {
                                $set: {
                                    "email": "pvtulsiram538@gmail.com",
                                    "password":password,
                                    "profile": {
                                        "name": "superadmin",
                                        "company": "buzzboard"
                                    },
                                    role: __roles.S,
                                    createdBy: __roles.S
                                }}, {upsert: true}, (error, updated) => {
                        if (!error) {
                            resolve(true);
                        } else {
                            reject(error);
                        }
                    });
                }
            }
        });

    });
};


export default insertDefaultUser;   //need to create default users as Admin
