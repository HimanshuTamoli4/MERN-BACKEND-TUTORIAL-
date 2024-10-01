const fs = require("fs");
const mongoose = require('mongoose');
const model = require('../model/product.js');
const Product = model.Product;

// create
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    // Save the product to the database
    const savedProduct = await product.save();
    res.status(201).json(savedProduct); // Return the saved product as the response
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id}, req.body , {new:true})
  res.status(201).json(doc);
} 
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}; 

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndUpdate({_id:id}, req.body , {new:true})
    res.status(201).json(doc);
  } 
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id:id} , {new:true})
    res.status(201).json(doc);
  } 
   catch(err){
      console.log(err);
      res.status(400).json(err); 
    }
};
