const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: false,
        default: "Cash on Delivery"
    },
    cartItems: [{
        id: Number,
        name: String,
        size: String,
        quantity: Number,
        image: String,
        price: Number
    }],
    order_date: {
        type: Date,
        default: Date.now,
    },
})

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel