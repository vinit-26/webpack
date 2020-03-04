import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);
const webpackevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackevMiddleware);
server.use(webpackHotMiddleware);
const staticMiddleWare = express.static('dist')
server.use(staticMiddleWare);
debugger
server.listen(8800, ()=> {
    console.log('Server is Listening')
});