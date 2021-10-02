const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
   { 
        title:String,
        description :String,
        brand:String,
        price:Number,
        color:String,
        categories:Array,
        imageUrl:String,
        rating:Number,
        countInStock:Number
    
 
},{timestamps:true})
module.exports=mongoose.model('Product',productSchema)