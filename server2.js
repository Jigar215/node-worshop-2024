var http=require('http')
var a=10
var b=20
var c=a+b
var msg

if(c==30){
    msg="Sum is 30"
}else{
    msg="Sum is not 30"
}

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})
    res.write("The value of A is " +a)
    res.write("<br>The value of B is " +b)
    res.write(`<br><b>The Sum of ${a} and ${b} is ${c}<b>`)
    res.end("<br>" + msg + " Done")
}).listen(4000)

console.log("The Server is created on the http://127.0.0.1:4000")