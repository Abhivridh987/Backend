const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')
const joi = require('joi')


//Paths

const OrderControllerPath = path.join(__dirname, '..', 'controllers', 'orderController.js')

// Controllers

const {orderRoot, getCart, getOrders, createOrder, cancelOrder} = require(OrderControllerPath)

// Models

const Order = require('../models/order.model')
//Middleware

const validateOrderCancellation = async (req,res,next)=>{
    const OrderDeletionSchema = joi.object({
        id:joi.string().required()
    })
    const {error} = OrderDeletionSchema.validate(req.params);
    if(error)
    {
        res.status(400).json({
            message:"Invalid order id for deletion",
            status:400,
            ok:false,
            detailed_error:error,
            error_message:error.message
        })
        return;
    }
    const order = await Order.findById(req.params.id)
    if(!order || order.length === 0)
    {
        res.status(400).json({
            message:"Invalid order id for deletion",
            status:400,
            ok:false,
        })
        return;
    }
    next();

}

//Routes


router.get('/', orderRoot)
router.get('/cart', getCart)
router.get('/list', getOrders)

router.post('/create', createOrder)

router.delete('/:id/delete', validateOrderCancellation)
router.delete('/:id/delete', cancelOrder)

module.exports = router
