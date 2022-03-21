const express=require('express')
const app=express();
const fs=require('fs')
const path=require('path')
const port =process.env.PORT || 3000

// app.get('/',(req,res)=>
// {
//     res.sendFile(path.join(__dirname,'public','index.html')) // it take only path.
//     // we are not reading the file so we are not using fs., resolve and join see server1.js

// })

// app.get('/about',(req,res)=>
// {
//     res.sendFile(path.join(__dirname,'public','about.html'))
// })
app.use(express.static('public'))

app.listen(port,()=>
{
    console.log('listening the port '+port)
})

// it take the home file but not taking the other file.