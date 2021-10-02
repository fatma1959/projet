const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    phone:Number,
    isAdmin:{type:Boolean,default:false}

    
},{timestamps:true})
module.exports = mongoose.model('User',userSchema)