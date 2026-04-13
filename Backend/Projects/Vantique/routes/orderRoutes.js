const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')
const joi = require('joi')


//Paths

const OrderControllerPath = path.join(__dirname, '..', 'controllers', 'orderController.js')

// Controllers

const {orderRoot, getCart, createOrder, deleteOrder} = require(OrderControllerPath)

//Middleware

const validateOrderCreation = (req, res, next)=>{
    const orderSchema = joi.object({
        orders:joi.array().items(joi.object({
            bagId:joi.string().required(),
            quantity:joi.number().required()
        }))
    })

    const {error} = orderSchema.validate(req.body);
    if(error)
    {
        res.status(400).json({
            message:"Invalid order data for creating order",
            status:400,
            ok:false,
            detailed_error:error,
            error_message:error.message
        })
        return;
    }
    next();
}

const validateOrderDeletion = (req,res,next)=>{
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
    next();

}
//Routes


router.get('/', orderRoot)
router.get('/cart', getCart)

router.post('/create', validateOrderCreation)
router.post('/create', createOrder)

router.delete('/:id/delete', validateOrderDeletion)
router.delete('/:id/delete', deleteOrder)

module.exports = router
