const mongoose=require('mongoose')
const alienScema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required :true
        },
        tech:{
            type:String,
            required:true
        },
        sub:
        {
            type:Boolean,
            required:true,
            default:false
        }
    }
)
module.exports=mongoose.model('krishnaa',alienScema)