const express=require('express')
const app=express()
const path=require('path');
const mainrouter=require('./route/index')
const product_router=require('./route/products')
//const { title } = require('process');

const port= process.env.PORT ||3000

app.set('view-engine','ejs');
//app.set('views',path.resolve(__dirname)+'/template')
//console.log(app.get('views'))
app.use(mainrouter)
app.use(product_router)


app.listen(port,()=>
{
    console.log(`listening the port ${port}`)
})