const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const user =require('./routes/user')
const product=require('./routes/product')
const order=require('./routes/order')

var cors = require("cors");


app.use(cors());
app.use(express.json())
connectDB()

app.use('/user',user)
app.use('/product',product)
app.use('/order',order)


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, (err) => err ? console.log(err) : console.log(`server running on port ${PORT}`))