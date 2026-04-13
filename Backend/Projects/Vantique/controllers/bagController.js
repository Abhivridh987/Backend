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

const getBagByNameBrandModel = async (req,res)=>{
    const decodedToken = jwt.verify(req.cookies.token, JWT_SECRET);
    const {name, brand, model_no} = req.params;
    try{
        const foundBag = await Bag.findOne({name:name, brand:brand, model_no:model_no})
        if(!foundBag)
        {
            res.status(404).json({
                message:"Bag not found with the provided name, brand and model number",
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

module.exports = {bagRoot, getAllBags, getBagById, getBagByNameBrandModel, searchBags, filterBags};