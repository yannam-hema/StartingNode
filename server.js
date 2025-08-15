//creating a http server using module

//importing module in our program

const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("Hello Hema! Nice to see you here!");
});
server.listen(3000);