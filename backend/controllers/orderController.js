const orderModel = require("../models/orderSchema")
const sendOrderEmail = require('./mailer')

const orderController = {
    addOrder: async (req, res) => {
        orderModel.create({ ...req.body }).then(async(product) => {
            await sendOrderEmail(product)
            res.status(200).json({
                message: 'Order Received',
                product
            })
        })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    },
    getAllOrders: (req, res) => {
        orderModel.find({}).then(orders => {
            res.status(200).json(
                orders
            )

        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong'
            })
        })
    },

    deleteOrder: (req, res) => {
        const { id } = req.params
        // ObjectId(id)
        orderModel.findByIdAndDelete(id).then(order => {
            res.status(200).json({
                message: 'Order deleted from listing',
                id
            })
        })
            .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    },


}
module.exports = orderController