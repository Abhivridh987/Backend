const jwt = require('jsonwebtoken')
const Order = require('../models/order.model')
const User = require('../models/user.model')
const Bag = require('../models/bag.model')
const mongoose = require('mongoose')

const JWT_SECRET = process.env.JWT_SECRET;


const orderRoot = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    res.status(200).json({
        message:"Order Root is Successfully Reached",
        token:decodedToken,
        status:200,
        ok:true
    })
    return;
}

const getCart = async (req,res)=>{
    try{
        const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
        res.status(200).json({
            message:"Cart Obtained Successfully",
            status:200,
            ok:true,
            cart:decodedToken.cart
        });
        return;
    }catch(err)
    {
        res.status(500).json({
            message:"Error occured",
            status:500,
            ok:false,
            error:err.message,
            detailed_err:err
        })
        return;
    }
}

const getOrders = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    try{
        const orders = await Order.find({userId:decoded._id})
        res.status(200).json({
            status:200,
            ok:true,
            decoded:true,
            data:orders
        })
        return;
    }catch(err){
        res.status(500).json({
            status:500,
            ok:false,
            message: "Error occurred",
            error: err.message,
            decoded:decoded
        });
        return;
    }
}
const createOrder = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    const userId = decoded._id;
    const cart = decoded.cart;

    for(let order of cart)
    {
        const foundBag = await Bag.findById(order.bagId)
        if(!foundBag)
        {
            res.status(404).json({
                message:`Bag with id ${order.bagId} in the cart not found in DB`,
                status:404,
                ok:false,
                token:decoded
            })
            return;
        }
        if(order.quantity > foundBag.quantity)
        {
            res.status(403).json({
                message:`Bag with id ${order.bagId} in the cart exceeded the current stock`,
                status:404,
                ok:false,
                requiredQuantity:order.quantity,
                availableQuantity:foundBag.quantity,
                token:decoded
            })
            return;
        }

    }
    const session = await mongoose.startSession()
    session.startTransaction()
    try{
        const newOrder = new Order({
          userId:userId,
          orders:cart
        })
        const savedOrder = await newOrder.save({session});

        for (let order of cart)
        {
            const updatedBag = await Bag.findOneAndUpdate(
                { _id: order.bagId, quantity: { $gte: order.quantity } },
                { $inc: { quantity: -order.quantity } },
                { session }
            );
            if (!updatedBag) {
                await session.abortTransaction()
                session.endSession()
                res.status(403).json({
                    message:`Bag with id ${order.bagId} in the cart exceeded the current stock`,
                    status:403,
                    ok:false,
                    token:decoded
                })
                return;
            }

        }

        const foundUser = await User.findByIdAndUpdate(decoded._id, {cart:[]}, {new:true,session})
        const token = jwt.sign({email:foundUser.email, username:foundUser.username, _id:foundUser._id, cart:foundUser.cart, admin:foundUser.admin}, JWT_SECRET);
        res.cookie("token", token, {httpOnly:true})

        await session.commitTransaction()
        session.endSession()

        res.status(200).json({
            message:"Order placed successfully and DB Updated",
            status:200,
            ok:true,
            order:savedOrder,
            token:jwt.verify(token, JWT_SECRET)
        })
        return;
    }catch(err)
    {
        await session.abortTransaction()
        session.endSession()

        res.status(500).json({
            message:"Error occured",
            error:err.message,
            status:500,
            ok:true,
            detailed_err:err
        })
        return;
    }
}

const cancelOrder = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        
        const order = await Order.findOne({
            _id: req.params.id,
            userId: decoded._id
        }).session(session);

        if (!order) {
            await session.abortTransaction();
            session.endSession();

            return res.status(403).json({
                message: "Unauthorized or order not found",
                ok: false
            });
        }

        if(order.status !== 'ORDER_PLACED'){
            await session.abortTransaction();
            session.endSession();

            return res.status(404).json({
                message: "Order Cancellation Duration Expired",
                ok: false,
                status:404
            });
        }

        for (let item of order.orders) {
            await Bag.findByIdAndUpdate(
                item.bagId,
                { $inc: { quantity: item.quantity } },
                { session }
            );
        }

        await Order.findByIdAndDelete(order._id, { session });

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({
            message: "Order cancelled successfully",
            ok: true,
            status:200,
            decoded:decoded
        });
        return;

    } catch (err) {
        await session.abortTransaction();
        session.endSession();

        res.status(500).json({
            status:500,
            ok:false,
            message: "Error occurred",
            error: err.message,
            decoded:decoded
        });
        return;
    }
}



module.exports = {
    orderRoot,
    getCart,
    getOrders,
    createOrder,
    cancelOrder
}