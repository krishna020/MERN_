const express=require('express')
const app=express()
require('./db/conn.js')
const Student=require('./models/students')
const port=process.env.PORT ||3000


app.use(express.json())

// app.get('/',(req,res)=>
// {
//     res.send('this is root file')

// })
app.post('/student', async (req,res)=>
{
    //res.send('this is student')
    try
    {
    console.log(req.body)
    const user=new Student(req.body)
    res.status(201).send(user)
    }
    catch(err)
    {
        res.status(400).send(err)
    }

})

app.listen(port,()=>
{
    console.log('listening the port '+port)
})