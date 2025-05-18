const mongoose = require('mongoose');
const __ = require('lodash');

const ProductSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    price: String,
    title: String,    
    rate: Number,      
    photo: String      
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        return __.omit(ret, ['__v', '_id']);
      }
    }
  }
);

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
