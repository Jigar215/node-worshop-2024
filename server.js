// Node JS Server Side Code:
// Browser

// Module:
// Core Module
//         By default Node Installed
//         example: http,fs,etc
// Local Module
//         Create own Module
//         example: http,fs,etc
// Third Part Module
//         Library
//         example: React,Mongoose,Express

var http=require('http')//http is core module

http.createServer((req,res)=>{
    res.end("<h1>This is the Server side code for the sixth time</h1>")
}).listen(5000)

console.log("The Server is created in http://127.0.0.1:5000")
