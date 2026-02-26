const express = require('express')
const path = require('path')
const router = express.Router()

//Paths
const controllerPathDB = path.join(path.dirname(__dirname), 'controllers', 'product_controller.js')

//Middleware

const {addProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = require(controllerPathDB)

//Routes
router.get('/', (req,res)=>{res.status(200).json({status:200, ok:true, result:"Product API Root"})})
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router