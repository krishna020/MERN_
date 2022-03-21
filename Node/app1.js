//const { fstat } = require('fs')
const http=require('http')
const fs=require('fs')
const path=require('path')
const port= process.env.PORT ||3000
const app=http.createServer((req,res)=>
  {
    //   res.writeHead(200,{'Content-Type':'text/html'})
    //   if(req.url=='/')
    //   {
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>
    //     {
    //         if(err)
    //         {
    //             console.log("Error:"+err)
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
    //   }
    //   else
    //   {
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>
    //     {
    //         if(err)
    //         {
    //             console.log("Error:"+err)
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
      //}
    const fileSystem=path.join(__dirname,'public',req.url==='/' ? 'index.html':req.url+'.html')
    fs.readFile(fileSystem,(err,data)=>
    {
        if(err)
        {
            res.writeHead(500,{'Context-Type':'txt/html'})
            res.end("error")
        }
        else{
            res.writeHead(200,{'Context-Type':'txt/html'})
            res.end(data)
        }
    })
     
    })

  app.listen(3000,()=>
  {
      console.log('listening the port ')
  })




