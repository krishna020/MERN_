const mongoose=require('mongoose')
const validator=require('validator')

const studentScema=new mongoose.Schema(
    {
        name:
        {
            type: String,
            required:true,
            minlength:5,
        },
        email:
        {
            type:String,
            required:true,
            unique:[true,'email already registered'],
            validate(value)
            {
                if(!validator.isEmail(value))
                {
                     throw new Error('invalid email')
                }   
            } 

        },
        phone:{
            type:Number,
            minlength:10,
            maxlength:10,
            required:true,
            unique:true
        },
        address:
        {
            type:String,
            required:true
        }

    }
)

const Student=new mongoose.model('Student',studentScema)
module.exports=Student;