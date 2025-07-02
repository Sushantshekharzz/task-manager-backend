var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication')
var userController = require('../controller/user.controller')

router.post('/', authentication, userController.addUser);

router.get("/", authentication,userController.getUser)

router.delete("/:id", authentication, userController.deleteUser);

router.get("/:id", authentication, userController.getUserById);

router.put("/:id", authentication, userController.updateUser);


module.exports = router;
