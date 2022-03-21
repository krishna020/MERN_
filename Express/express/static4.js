const express=require('express')
const app=express();
const fs=require('fs')
const path=require('path')
const port =process.env.PORT || 3000


app.use(express.static('public'))

app.listen(port,()=>
{
    console.log('listening the port '+port)
})

// we have to use /about.html, beause static don't get the file, bydefault  it take only index file