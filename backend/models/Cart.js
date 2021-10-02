const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    useId:String,
    products:[
        {
            productId:String,
            quantity:{ type:Number, default:1,},      
        },
    ]
})
module.exports= mongoose.model("Cart",cartSchema)