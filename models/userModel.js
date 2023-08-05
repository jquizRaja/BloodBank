const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:[true,"role field is required"],
        enum:["admin","orginazation","hospital","donar"]
    },
    name:{
        type:String,
        required: function(){
          if(this.role ==="user"|| this.role==="admin"){
            return true
          }
          return false
        }
    },
    orginazationName:{
        type:String,
        required:function(){
         if(this.role === "orginazation"){
            return true
         }
         return false
        }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role ==="hospital"){
                return true
            }
            return false
        }
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'address required field']
    },
    phone:{
        type:String,
        required:[true,"phone No is required"]
    },
},{timestamps:true})

module.exports=mongoose.model('users',userSchema)