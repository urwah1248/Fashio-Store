const productModel = require("../models/productSchema")
const ObjectId = require('mongoose').ObjectId;

const productController = {
    addProduct: (req, res) => {
        const { title, price, stock, images } = req.body
        if (!title || !price || !stock || !images) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }

        productModel.create({ ...req.body }).then(product => {
            res.status(200).json({
                message: 'Product added to listing',
                product
            })
        })
            .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    },

    getProductsByCategory: (req, res) => {
        const { category } = req.params
        productModel.find({ category: category }).then(products => {
            res.status(200).json({
                message: `Get all ${category}`,
                products
            })

        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong'
            })
        })
    },

    getAllProducts: (req, res) => {
        productModel.find({}).then(products => {
            res.status(200).json(
                products
            )

        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong'
            })
        })
    },
    
    getEveryProducts: (req, res) => {
        productModel.find({stock: [{quantity: {$gt: 0}}]}).then(products => {
            res.status(200).json(
                products
            )

        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong'
            })
        })
    },

    deleteProduct: (req, res) => {
        const { id } = req.params
        // ObjectId(id)
        productModel.findByIdAndDelete(id).then(product => {
            res.status(200).json({
                message: 'Product delete from listing',
                id
            })
        })
            .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    },

    getProductById: (req, res) => {
        const { id } = req.params
        // ObjectId(id)
        productModel.findById(id).then(product => {
            res.status(200).json(product)
        })
            .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    }
}
module.exports = productController