require('babel-runtime/regenerator')
require('./style.css');
require('./index.html');

let a = async (args) => {
    const { a, b} = args;
    await console.log('Hello from the future',a,b);
}

a({a:1,b:2});