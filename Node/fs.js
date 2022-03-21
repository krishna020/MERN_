const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const file=fs.readFile('fs.html',(err,data)=>
    {
        res.write(data)
    })
    
})
const PORT=process.env.PORT||8080

server.listen(PORT,()=>
{
    console.log("connecting the port number"+PORT)
})