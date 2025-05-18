const ProductModel = require("../models/ProductModel")
const customError = require('../customError');


const AddProduct = async (req, res, next) => {
    try {
        const newProduct = await ProductModel.create({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            title: req.body.title,
            rate: req.body.rate,
            photo: req.body.photo
        });

       
        res.status(201).json(newProduct);

    } catch (err) {
        return next(customError({
            statusCode: 400,  
            message: "Failed to add product. Please check the input data."
        }));
    }
};


const AllProduct = async (req, res, next) => {
    try {
        const products = await ProductModel.find({});
        res.json(products);
    } catch (err) {
        return next(customError({
            statusCode: 401,
            message: "check code"
        }))
    }
}



module.exports = {
    AddProduct,
    AllProduct
};