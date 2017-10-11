
import cluster from 'cluster';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import config from './config';
import insertDefaultUser from './default_users.js';
import dbConnect from './db.connection';
import loginRoute from './routes/login.route';
const api = new express({strict: true}); //Initialize the Express
var database = "";


/*
 * init of server by launching clusters
 * for multi core usage
 */
if (cluster.isMaster) {
    var numWorkers = require('os').cpus().length;
    for (var i = 0; i < numWorkers; i++) {
        cluster.fork(); //creating child process
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {

    (async () => {

        try {
            if (process.env.NODE_ENV !== 'production') {
              process.env.MONGO_URL = 'mongodb://localhost:27017/users';

            } else {
                // process.env.MONGO_URL = ""
            }

            console.log(process.env.MONGO_URL);
            global.__roles = {
                S: "superAdmin"
            };
            database = await dbConnect(); //connet to db
            await insertDefaultUser(database); //inser default user when init
            api.use(compression()); //compress response bodies for all requests
            api.use(function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                return next();
            });
            api.use('/api', bodyParser.json({}), bodyParser.urlencoded({extended: false}), [loginRoute]);

            api.use((req, res, next) => {
                /*
                 *To make server-side authentication
                 * for every request
                 */
                return next();
            });
            api.listen(config.port, () => {
                console.log("Magic happens on port no", config.port);
            });
        } catch (err) {
            console.log(`${err.name} ::${err.errmsg}`);
        }
    })();
}

export default api;
export {database};
