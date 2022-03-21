const express=require('express')
const app=express();
const path=require('path')


app.set('view-engine','ejs')  // how to use any template.
//console.log(app.get('view-engine')) // it's a key-value pair.
//console.log(app.get('views'))           // template ejs search html file in views folder.
// if we want to change filename then we have to set the folder name.
//app.set('views','file_name')
//app.set('views',path.resolve(__dirname,'template'));
//console.log(app.get('views'))





app.get('/',(req,res)=>
{
       res.sendFile(path.resolve(__dirname+'/index.html'))   
 })
 app.get('/about',(req,res)=>
{
       res.sendFile(path.resolve(__dirname+'/about.html')) 
 })
 app.get('/download',(req,res)=>
 {
        res.download(path.resolve(__dirname+'/about.html'))      
  })

app.listen(3000,()=>
{
    console.log('creating the server')
})