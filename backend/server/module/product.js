const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    product: String,
    price: String,
    date: String,
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel