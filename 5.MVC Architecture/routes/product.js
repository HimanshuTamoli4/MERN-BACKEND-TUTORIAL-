const exprees = require("express");
const productController = require('../controller/product')
const router = exprees.Router();
//  2nd method using express router 
router
.post("/", productController.createProduct)
.get("/", productController.getAllProduct)
.get("/:id", productController.getProduct)
.put("/:id", productController.replaceProduct)
.patch("/:id", productController.updateProduct)
.delete("/:id", productController.deleteProduct)

exports.router = router ;