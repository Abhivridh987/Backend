const jwt = require('jsonwebtoken')
const Order = require('../models/order.model')
const Bag = require('../models/bag.model')

const JWT_SECRET = process.env.JWT_SECRET;


const orderRoot = (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    res.status(200).json({
        message:"Order Root is Successfully Reached",
        token:decodedToken,
        status:200,
        ok:true
    })
    return;
}

const getCart = (req,res)=>{
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

const createOrder = async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const userId = decodedToken._id;

    const { orders } = req.body;

    if (!orders || orders.length === 0) {
      return res.status(400).json({
        message: "No orders provided",
        ok: false
      });
    }

    const foundBags = await Bag.find({
      _id: { $in: orders.map(order => order.bagId) }
    });

    if (foundBags.length !== orders.length) {
      return res.status(400).json({
        message: "Some bags not found",
        ok: false
      });
    }

    // Validate stock
    for (let order of orders) {
      const foundBag = foundBags.find(
        bag => bag._id.toString() === order.bagId
      );

      if (!foundBag) {
        return res.status(400).json({
          message: "Bag missing during validation",
          ok: false
        });
      }

      if (order.quantity > foundBag.stock) {
        return res.status(400).json({
          message: `Stock exceeded for ${foundBag.name}`,
          ok: false
        });
      }
    }

    // Create order
    const newOrder = new Order({
      userId,
      orders: orders.map(order => ({
        bagId: order.bagId,
        quantity: order.quantity
      }))
    });

    const savedOrder = await newOrder.save();

    // Update stock (SAFE WAY)
    for (let order of orders) {
      await Bag.findByIdAndUpdate(
        order.bagId,
        { $inc: { stock: -order.quantity } }
      );
    }

    return res.status(201).json({
      message: "Order created successfully",
      ok: true,
      order: savedOrder
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error creating order",
      ok: false,
      error: err.message
    });
  }
};

const deleteOrder = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const orderId = req.params.id;
    try{
        const foundOrder = await Order.findById(orderId);
        if(!foundOrder)
        {
            res.status(404).json({
                message:"Order not found",
                status:404,
                ok:false,
                orderId:orderId
            })
            return;
        }
        if(foundOrder.userId.toString() !== decodedToken._id)
        {
            res.status(403).json({
                message:"User is not authorized to delete this order",
                status:403,
                ok:false,
                orderUserId:foundOrder.userId,
                tokenUserId:decodedToken._id
            })
            return;
        }
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        res.status(200).json({
            message:"Order deleted successfully",
            order:deletedOrder,
            status:200,
            ok:true
        })
    }catch(err)
    {   
        res.status(500).json({
            message:"Error deleting order",
            status:500,
            ok:false,
            error:err.message   
        })
        return;
    }
}

module.exports = {
    orderRoot,
    getCart,
    createOrder,
    deleteOrder
}