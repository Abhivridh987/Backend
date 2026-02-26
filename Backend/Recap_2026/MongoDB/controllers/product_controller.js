const productdemo = require('../models/product.model.js')

const addProduct = async (req, res)=>{
    try{
        const prod = await productdemo.create(req.body)
        res.status(200).json({
            status:200,
            ok:true,
            message:"Product Added Successfully",
            data:prod
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            status:500,
            ok:false,
            "result":"Error occured while adding product", 
            "error_message":err.message,
            "error":err
        })
    }
}

const getAllProducts = async (req,res)=>{
    try{
        const productData = await productdemo.find({})
        res.status(200).json({
            status:200,
            ok:true,
            result:'Product Obtained',
            data:productData
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({
            status:500,
            ok:false,
            result:'Data not Obtained',
            error_message:err.message,
            error:err
        })
    }
}

const getProductById = async (req,res)=>{
    const {id} = req.params;

    try{
        const prod = await productdemo.findById(id)
        if(!prod)
        {
            res.status(404).json({
                status:404,
                ok:false,
                result:'Product not in Database'
            })
            return;
        }
        res.status(200).json({
            status:200,
            ok:true,
            message:"Product Found",
            data:prod
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({
            status:500,
            ok:false,
            result:'Data not Obtained',
            error_message:err.message,
            error:err
        })
    }
}

const updateProduct = async (req,res)=>{
    const {id} =req.params
    try{
        const prod = await productdemo.findByIdAndUpdate(id, req.body)
        if(!prod)
        {
            res.status(404).json({
                status:404,
                ok:false,
                result:'Product not in Database'
            })
            return;
        }
        const prod_updated = await productdemo.findById(id)
        res.status(200).json({
            status:200,
            ok:true,
            message:"Product Updated Successfully",
            data:prod_updated
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({
            status:500,
            ok:false,
            result:'Data not Obtained',
            error_message:err.message,
            error:err
        })
    }
}

const deleteProduct = async (req,res)=>{
    const {id} = req.params
    try{
        const prod = await productdemo.findByIdAndDelete(id)
        if(!prod)
        {
            res.status(404).json({
                status:404,
                ok:false,
                result:'Product not in Database'
            })
            return;
        } 
        res.status(200).json({
                status:200,
                ok:true,
                message:"Product Deleted",
                data:prod
        })
    }catch(err)
    {
        console.log(err)
        res.status(500).json({
            status:500,
            ok:false,
            result:'Data not Obtained',
            error_message:err.message,
            error:err
        })
    }
}

module.exports = {addProduct, getAllProducts, getProductById, updateProduct, deleteProduct};
