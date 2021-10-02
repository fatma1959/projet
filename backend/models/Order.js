const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    userId:String,
    products:[
        {
            productId:String,
            quantity:{type:Number,default:1,},
        },
    ],
    amount:Number,
    address:Object,
    status:{type:String,default:"pending"},
})
module.exports = mongoose.model("Order",orderSchema);