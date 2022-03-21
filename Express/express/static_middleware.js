const express=require('express')
const app=express();
const path=require('path')

// app.get('/',(req,res)=>
// {
// //     res.send('hello from Express')
//        res.sendFile(path.resolve(__dirname+'/index.html'))  // '/' is imp
       
//  })
//  app.get('/about',(req,res)=>
// {
// //     res.send('hello from Express')
//        res.sendFile(path.resolve(__dirname+'/about.html'))  // '/' is imp
       
//  })

app.use(express.static('public'))  // how to use middleware
// we have to also use ext type of about file in static middleware
// beause it is static file
app.listen(3000,()=>
{
    console.log('creating the server')
})