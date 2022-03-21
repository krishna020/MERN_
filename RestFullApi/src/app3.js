// read the data by property

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
app.get('/student/:id',async(req,res)=>
{
    try{

        const _id=req.params.id
         const studentData=await res.send(_id)
         console.log(studentData)
         if(!studentData)
         {
             return res.status(404).send();
         }
         else{
             res.send(studentData)
         }
    }
    catch(err)
    {
        res.status(500).send('something is error')
        
    }
   
}

)
// update the student

app.patch('/student/:id', async (req,res)=>
{
    try{
    const _id= req.params.id
     const update=await Student.findByIdAndUpdate(_id,req.body,{new:true})
     res.status().send(update)
    }
    catch(err)
    {
          res.send(err)
    }
})

// delete the data.

app.delete('/student/:id', async (req,res)=>
{
   const id=req.params.id
     const deleteData=await Student.findByIdAndDelete(id)
     res.send(deleteData)
})
{

}

app.listen(port,()=>
{
    console.log('listening the port '+port)
})