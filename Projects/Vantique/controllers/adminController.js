const jwt = require('jsonwebtoken');

// Access env variables

const JWT_SECRET = process.env.JWT_SECRET || '12345'

// Models

const User = require('../models/user.model');
const Bag = require('../models/bag.model');
const Order = require('../models/order.model')


console.log("User:", User);
console.log("Type:", typeof User);
console.log("Bag:", Bag);
console.log("Type : ", typeof Bag);

const adminRoot = (req,res) =>{
    res.status(200).json({
        message:"Welcome to the Admin Root",
        status:200,
        ok:true
    })
    return;
}


//User Management Controllers

const getAllUsers = async (req,res)=>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    try{
        const users = await User.find();
        if(users.length === 0)
        {
            res.status(404).json({
                message:"No users found in the database",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"Users retrieved successfully",
            status:200,
            ok:true,
            data:users,
            decodedToken:decoded
        })
        return;
        
    }
    catch(err)
    {
        res.status(500).json({
            message:"Error retrieving users",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}

const getUserById = async (req,res)=>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    try{
        const foundUser = await User.findOne({_id:req.params.id})
        if(!foundUser)
        {
            res.status(404).json({
                message:"User not found with the provided ID",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"User retrieved successfully",
            data:foundUser,
            status:200,
            ok:true,
            decodedToken:decoded
        })
        return;

    }
    catch(err)
    {
        res.status(500).json({
            message:"Error retrieving user",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}

const deleteUserById = async (req,res)=>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if(!deletedUser)
        {
            res.status(404).json({
                message:"User not found with the provided ID",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"User deleted successfully",
            data:deletedUser,
            status:200,
            ok:true,
            decodedToken:decoded
        })
        return;
    }
    catch(err){
        res.status(500).json({
            message:"Error deleting user",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}

const changeUserRoleById = async (req,res)=>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    const userId = req.params.id;
    const {admin} = req.body;
    if(admin === undefined)
    {
        res.status(400).json({
            message:"Admin field is required in the request body",
            status:400,
            ok:false,
            decodedToken:decoded,
        })
        return;
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {admin:admin})
        if(!updatedUser)
        {
            res.status(404).json({
                message:"User not found with the provided ID",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"User role updated successfully",
            data:updatedUser,
            status:200,
            ok:true,
            decodedToken:decoded
        })
        return;
    }
    catch(err)
    {
        res.status(500).json({
            message:"Error updating user role",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}


//Bag Management Controllers

const getAllBags = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    try{
        const bags = await Bag.find();
        res.status(200).json({
            token:decodedToken,
            message:"Bags retrieved successfully",
            data:bags,
            status:200,
            ok:true
        })
        return;
    }catch(err){
        res.status(500).json({
            message:"Error retrieving bags",
            error:err.message,
            status:500,
            ok:false
        })
    }
}

const getBagById = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const bagId = req.params.id;
    try{
        const foundBag = await Bag.findById(bagId);
        if(!foundBag)
        {
            res.status(404).json({
                message:"Bag not found with the provided ID",
                status:404,
                ok:false
            })
            return;
        }
        res.status(200).json({
            message:"Bag retrieved Successfully",
            data:foundBag,
            token:decodedToken,
            status:200,
            ok:true
        })
    }catch(err){
        res.status(500).json({
            message:"Error retrieving bag",
            error:err.message,
            status:500,
            ok:false
        })
    }
}   

const createBag = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    const {name, brand, model_no, description, category, price, discount, rating, image_url, quantity, bestSeller} = req.body;
    if(!name || !brand || !model_no || !description || !category || price === undefined || quantity === undefined)
    {
        res.status(400).json({
            message:"Missing required fields to create a bag",
            status:400,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
    try{
        let newBagModel = {
            name:name,
            brand:brand,
            model_no:model_no,
            description:description,
            category:category,
            price:price,
            quantity:quantity
        }
        if(discount !== undefined)
        {
            newBagModel.discount = discount;
        }
        if(rating !== undefined)
        {
            newBagModel.rating = rating;
        }
        if(image_url !== undefined)
        {
            newBagModel.image_url = image_url;
        }
        if(bestSeller !== undefined)
        {
            newBagModel.bestSeller = bestSeller;
        }
        const newBag = new Bag(newBagModel);
        try{
            const savedBag = await newBag.save();
            res.status(201).json({
                message:"Bag created successfully",
                data:savedBag,
                decodedToken:decoded,
                status:201,
                ok:true,
                decodedToken:decoded
            })
        }catch(err)
        {
            res.status(500).json({
                message:"Error saving bag to the database",
                error:err.message,
                status:500,
                ok:false,
                decodedToken:decoded
            })
        }
    }catch(err)
    {
        res.status(500).json({
            message:"Error saving bag to the database",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
    }
}

const updateBagById = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    const bagId = req.params.id;
    const updateData = req.body;
    try{
        const updatedBag = await Bag.findByIdAndUpdate(bagId, updateData, {new:true})
        if(!updatedBag)
        {
            res.status(404).json({
                message:"Bag not found with the provided ID",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"Bag updated successfully",
            data:updatedBag,
            decodedToken:decoded,
            status:200,
            ok:true
        })
        return;
    }catch(err)
    {
        res.status(500).json({
            message:"Error updating bag",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}

const deleteBagById = async (req,res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    const bagId = req.params.id;
    try{
        const deletedBag = await Bag.findByIdAndDelete(bagId)
        if(!deletedBag)
        {
            res.status(404).json({
                message:"Bag not found with the provided ID",
                status:404,
                ok:false,
                decodedToken:decoded
            })
            return;
        }
        res.status(200).json({
            message:"Bag deleted successfully",
            data:deletedBag,
            status:200,
            ok:true,
            decodedToken:decoded
        })
        return;
    }catch(err)
    {
        res.status(500).json({
            message:"Error deleting bag",
            error:err.message,
            status:500,
            ok:false,
            decodedToken:decoded
        })
        return;
    }
}

//Order Management

const getAllOrders = async (req, res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    try{
        const orders = await Order.find();
        return res.status(200).json({
            status:200,
            ok:true,
            message:"Retrieved all orders",
            data:orders,
            token:decoded
        })
    }catch(err)
    {
        return res.status(500).json({
            status:500,
            ok:false,
            message:"Error occured",
            error:err.message,
            detailed_err:err
        })
    }
}

const getUserOrders = async (req, res) =>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    try{
        const orders = await Order.find({userId:req.params.id});
        return res.status(200).json({
            status:200,
            ok:true,
            message:"Retrieved all orders",
            data:orders,
            token:decoded
        })
    }catch(err)
    {
        return res.status(500).json({
            status:500,
            ok:false,
            message:"Error occured",
            error:err.message,
            detailed_err:err
        })
    }
}

const changeOrderStatus = async (req,res)=>{
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET)
    try{
        const order = await Order.findByIdAndUpdate(req.params.id, {status:req.body.status}, {new:true});
        return res.status(200).json({
            status:200,
            ok:true,
            message:"Order Updated",
            data:order,
            token:decoded
        })
    }catch(err)
    {
        return res.status(500).json({
            status:500,
            ok:false,
            message:"Error occured",
            error:err.message,
            detailed_err:err
        })
    }
}

module.exports = {
    adminRoot,
    getAllUsers, getUserById, deleteUserById, changeUserRoleById,
    getAllBags, getBagById, createBag, updateBagById, deleteBagById,
    getAllOrders, getUserOrders, changeOrderStatus
}