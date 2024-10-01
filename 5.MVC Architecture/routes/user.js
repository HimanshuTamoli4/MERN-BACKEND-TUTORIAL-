const exprees = require("express");
const userController = require('../controller/user')
const router = exprees.Router();
//  2nd method using express router 
router
.post("/", userController.createuser)
.get("/", userController.getAlluser)
.get("/:id", userController.getuser)
.put("/:id", userController.replaceuser)
.patch("/:id", userController.updateuser)
.delete("/:id", userController.deleteuser)




exports.router = router ;