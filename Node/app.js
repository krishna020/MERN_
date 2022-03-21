const { fstat } = require('fs')
const http=require('http')
const fs=require('fs')
const path=require('path')
const port= process.env.PORT ||3000
const app=http.createServer((req,res)=>
  {
      res.writeHead(200,{'Content-Type':'text/html'})
      if(req.url=='/')
      {
        fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>
        {
            if(err)
            {
                console.log("Error:"+err)
            }
            else{
                res.end(data)
            }
        })
      }
      else
      {
        fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>
        {
            if(err)
            {
                console.log("Error:"+err)
            }
            else{
                res.end(data)
            }
        })
      }
     
    })

  app.listen(3000,()=>
  {
      console.log('listening the port ')
  })


//   The difference between == and === is that: == converts the variable values to 
//   the same type before performing comparison. This is called type coercion. === does
//    not do any type conversion (coercion) and returns true only if both values and types 
//    are identical for the two variables being compared.

