import express from 'express';
import path from 'path';

const server = express();

server.listen(8800, ()=> {
    console.log('Server is Listening')
});