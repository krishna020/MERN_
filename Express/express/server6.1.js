const express=require('express')
const app=express();
const path=require('path')
const mainrouter=require('./routes/index3.js')

// after using ejs template we have to change the extension of html file to ejs .
app.set('view-engine','ejs')  
app.use(mainrouter)
 
app.listen(3000,()=>
{
    console.log('creating the server')
})