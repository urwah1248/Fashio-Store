const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: [{
        size: String,
        Quantity: Number,
    }],
    images: [{
        orignal: String,
        thumbnail: String,
    }],
    created_at: {
        type: Date,
        default: Date.now,
    },
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel