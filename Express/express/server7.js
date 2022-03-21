const express=require('express')
const app=express();
const fs=require('fs')
const path=require('path')

const mainRouter=require('./routes/index.js')
const port =process.env.PORT || 3000
app.set('view-engine', 'ejs')
console.log(app.get('view-engine'))
//console.log(app.get('views'))
app.set('views',path.join(__dirname,'public'))
//console.log(app.get('views'))
app.use(mainRouter)


app.listen(port,()=>
{
    console.log('listening the port '+port)
})
