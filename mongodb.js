const mongoose=require("mongoose")

mongoose.connext("mongodb://localj=host:27017/HotelManagement")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed to connect");
})
const signupschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("SignUpCollection",signupschema)
module.exports=collection
