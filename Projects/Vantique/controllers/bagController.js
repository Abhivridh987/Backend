const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Access environment variables

const JWT_SECRET = process.env.JWT_SECRET || '12345'

// Models

const Bag = require('../models/bag.model');
console.log("Bag:", Bag);
console.log("Type:", typeof Bag);

const User = require('../models/user.model');
console.log("User:", User);
console.log("Type:", typeof User);

// Controllers

const bagRoot = (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    res.status(200).json({
        message:"Bag Root is Successfully Reached",
        token:decodedToken,
        status:200,
        ok:true
    })
}

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

const searchBags = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const {query} = req.query;
    try{
        let searchCriteria = {};
        if(query && query.trim() !== ''){
            searchCriteria = {$or:[
                {name:{$regex:query, $options:'i'}},
                {brand:{$regex:query, $options:'i'}},
                {category:{$regex:query, $options:'i'}}
            ]}
        }
        const foundBags = await Bag.find({
            ...searchCriteria
        });
        
        if(!foundBags)
        {
            res.status(404).json({
                message:"Bag not found with the provided name, brand and model number",
                status:404,
                ok:false
            })
            return;
        }
        res.status(200).json({
            message:"Bags retrieved successfully",
            data:foundBags,
            token:decodedToken,
            status:200,
            ok:true
        });
        return;
    }catch(err){
        res.status(500).json({
            message:"Error retrieving bags",
            error:err.message,
            status:500,
            ok:false
        });
        return;
    }
}



const filterBags = async (req,res) =>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const {query, categories, price_min, price_max, rating_min, bestSeller, discount} = req.query;
    try{
        let filterCriteria = {
            price:{$gte:Number(price_min) || 0, $lte:Number(price_max) || Number.MAX_VALUE},
            rating:{$gte:Number(rating_min) || 0},
            discount:{$gte:Number(discount) || 0}
        }
        let searchCriteria = {}
        if(bestSeller !== undefined)
        {
            filterCriteria.bestSeller = bestSeller === 'true' ? true : false;
        }
        if(categories !== undefined){
            const categoryArray = categories.split(',').map(cat=> cat.trim());
            filterCriteria.category = {$in:categoryArray};
        }
        if(query && query.trim() !== ''){
            searchCriteria = {
                $or:[
                    {name:{$regex:query, $options:'i'}},
                    {brand:{$regex:query, $options:'i'}},
                    {category:{$regex:query, $options:'i'}}
                ]
            }
        }
        const foundBags = await Bag.find({
            ...filterCriteria,
            ...searchCriteria
            
        })
        if(!foundBags || foundBags.length === 0)
        {
            res.status(404).json({
                message:"Bags not found with specfications",
                status:404,
                ok:false
            })
            return;
        }
        res.status(200).json({
            message:"Bags retrieved successfully",
            data:foundBags,
            token:decodedToken,
            status:200,
            ok:true
        });
        return;
    }catch(err)
    {
        res.status(500).json({
            message:'Error retrieving bags',
            status:500,
            ok:false,
            error:err.message,
            detailed_error:err
        })
    }
}

const addBagToCart = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);

    const qty = Number(req.query.quantity) || 1;
    const bagId = req.params.id;
    const userId = decoded._id;

    const foundBag = await Bag.findById(bagId);
    if (!foundBag) {
      return res.status(404).json({
        message: "Bag not found",
        ok: false
      });
    }

    if (qty > foundBag.quantity) {
      return res.status(400).json({
        message: "Quantity exceeds stock",
        ok: false
      });
    }

    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(404).json({
        message: "User not found",
        status:404,
        ok: false,
        decoded:decoded
      });
    }

    let cart = foundUser.cart;

    const existingItem = cart.find(item => item.bagId.toString() === bagId);

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.push({
        bagId: bagId,
        quantity: qty
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cart },
      { new: true }
    );

    const newToken = jwt.sign({
      email: updatedUser.email,
      username: updatedUser.username,
      _id: updatedUser._id,
      admin: updatedUser.admin,
      cart: updatedUser.cart
    }, JWT_SECRET);

    res.cookie("token", newToken, { httpOnly: true });

    res.status(200).json({
      message: "Item added to cart",
      data: updatedUser,
      ok: true
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Server error",
      ok: false
    });
  }
};

const deleteBagFromCart = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);

    const userId = decoded._id;
    const bagId = req.params.id;
    const quantity = Number(req.query.quantity) || 1;

    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found",
        ok: false
      });
    }

    let cart = foundUser.cart;

    const existBag = cart.find(
      item => item.bagId.toString() === bagId
    );

    if (!existBag) {
      return res.status(404).json({
        message: "Bag doesn't exist in cart",
        ok: false
      });
    }

    
    if (existBag.quantity <= quantity) {
      cart = cart.filter(
        item => item.bagId.toString() !== bagId
      );
    } else {
      existBag.quantity -= quantity;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cart },
      { new: true }
    );

    const newToken = jwt.sign({
      email: updatedUser.email,
      username: updatedUser.username,
      _id: updatedUser._id,
      admin: updatedUser.admin,
      cart: updatedUser.cart
    }, JWT_SECRET);

    res.cookie("token", newToken, { httpOnly: true });

    return res.status(200).json({
      message: "Cart updated successfully",
      data: updatedUser,
      ok: true
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message,
      ok: false
    });
  }
};

module.exports = {
    bagRoot, 
    getAllBags, 
    getBagById,  
    searchBags, 
    filterBags, 
    addBagToCart, 
    deleteBagFromCart
};