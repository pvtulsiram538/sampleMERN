/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


if (process.env.NODE_ENV === 'production') {
console.log("IN PRODUCTION MODE"); 
// Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
  });
  require('babel-polyfill');

  require('./server');

} else {
  require('babel-register')({
//    "plugins": [
//     load your additional babel-pluggins here
//    
//    ]
  });
  require('babel-polyfill');

  require('./server');
}
