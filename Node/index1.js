//const { listen } = require('express/lib/application')
const http=require('http')
const url=require('url')
http.createServer((req,res)=>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<h1>Hello Baby..!</h1>')
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
  res.end(txt);

}).listen(3000,()=>
{
    console.log("server is connected with port 3000")
})

// http.server_name.listen(3000);

