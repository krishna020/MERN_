const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/krishnaDB").then(()=>
{
    console.log('connected successfully')
}).catch((err)=>
{
    console.log("Error is : "+err)
});

//scema
// A mongoose scema define the structure of the document.
// default value, validation

const playList=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:String,
    age:Number,
    Course:String,
    Date:{
        type:Date,
        default:Date.now
    }

})
//mongoose model is wrapped the mongoose scema.
//providing an interface to database fo crud operaton
const Play=new mongoose.model("Play",playList); // it return a model, it return plural collection. like Plays


const dataAsync=async()=>{
    try{
   const something =new Play({
        name:"krishna",
        lastName:"Sahu",
        age:21,
        Course:"MongoDb"
      })
  const result= await something.save();
  console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
    }
    dataAsync();

