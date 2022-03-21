const express=require('express')
const app=express();
const path=require('path')

// after using ejs template we have to change the extension of html file to ejs .
app.set('view-engine','ejs')  

 app.get('/',(req,res)=>
{
       res.render('index.ejs',{title:'krishna'})
 })
 app.get('/about',(req,res)=>
 {
        res.render('about.ejs',{title:'about'})
    
  })

 app.get('/download',(req,res)=>
 {
        res.render('index.ejs')      
  })

app.listen(3000,()=>
{
    console.log('creating the server')
})