'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//    devtool: 'eval-source-map',
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3002',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'client/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.MONGO_URL':JSON.stringify('mongodb://data_root:xyz1$3^nhy7@104.197.218.69:27017/admin')
        })
    ],
//      eslint: {
//          configFile: '.eslintrc',
//          failOnWarning: false,
//          failOnError: false
//      },
    module: {
//        preLoaders: [
//            {
//                test: /\.js$/,
//                exclude: /node_modules/,
//                loader: 'eslint'
//            }
//        ],
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
            },
            {test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file'}
        ]
    }

}
