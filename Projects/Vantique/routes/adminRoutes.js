const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')
const joi = require('joi')

const Order = require('../models/order.model')
// Accessing env variables

//Paths

const AdminControllerPath = path.join(__dirname, '..', 'controllers', 'adminController.js')

//Controllers

const {
    adminRoot, 
    getAllUsers, getUserById, deleteUserById, changeUserRoleById,
    getAllBags, getBagById, createBag, updateBagById, deleteBagById,
    getAllOrders, getUserOrders, changeOrderStatus

} = require(AdminControllerPath)

// Middleware

const validateOrderStatusChange = async (req, res, next) =>{
    const OrderStatusChangeSchema = joi.object({
        status:joi.string().required()
    })
    const {error} = OrderStatusChangeSchema.validate(req.body)
    if(error)
    {
        return res.status(400).json({
            message:"Invalid Order Status Change PUT Schema",
            status:400,
            ok:false,
            detailed_error:error,
            error_message:error.message
        })
    }
    try{
        // Order Id Existence
        const foundOrder = await Order.findById(req.params.id)
        if(!foundOrder)
        {
            return res.status(400).json({
                message:"Invalid order id for updation",
                status:400,
                ok:false
            })
        }

        //Status Existence
        
        const order_status = process.env.ORDER_STATUS;
        const order_status_list = order_status.split(',').map(st=>st.trim())
        if(!order_status_list.includes(req.body.status))
        {
            return res.status(400).json({
                message:"Invalid status for order updation",
                status:400,
                ok:false
            })
        }
        next();
    }catch(err){
        res.status(500).json({
            status:500,
            ok:false,
            message: "Error occurred",
            error: err.message
        });
        return;
    }
}

//Routes

router.get('/', adminRoot)

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', changeUserRoleById)

router.get('/bags', getAllBags)
router.get('/bags/:id', getBagById)
router.post('/bags', createBag)
router.put('/bags/:id', updateBagById)
router.delete('/bags/:id', deleteBagById)

router.get('/orders/list', getAllOrders)
router.get('/orders/list/:id', getUserOrders)
router.put('/orders/:id/status', validateOrderStatusChange, changeOrderStatus)


module.exports = router