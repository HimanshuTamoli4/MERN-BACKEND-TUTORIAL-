require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
console.log('env', process.env.DB_PASSWORD);

// db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce'); 
  console.log('database connected ');
}
// schema 

server.use(express.json());
server.use(morgan("default"));  
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);


server.listen(process.env.PORT),
  () => {
    console.log("server started");
  };


  
// MVC model-view-controller 
/* 1st method using expreess
server
.post("/products", productController.createProduct)
.get("/products", productController.getAllProduct)
.get("/products/:id", productController.getProduct)
.put("/products/:id", productController.replaceProduct)
.patch("/products/:id", productController.updateProduct)
.delete("/products/:id", productController.deleteProduct) */