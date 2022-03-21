const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/AlienDBex'
//const 

const app=express();

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function()
{
    console.log('connected...')
})
app.use(express.json())
const alienRouter=require('./router/aliens')
app.use('/aliens',alienRouter)
app.listen(9000,()=>
{
    console.log('server is started')
})
