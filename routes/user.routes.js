var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication')
var roleAuthorization = require('../middleware/rolemiddleware')
var userController = require('../controller/user.controller')

router.post('/', authentication, roleAuthorization('Admin'), userController.addUser);

router.get("/", authentication,roleAuthorization('Admin'), userController.getUser)

router.delete("/:id", authentication, roleAuthorization('Admin'), userController.deleteUser);

router.get("/:id", authentication, roleAuthorization('Admin'), userController.getUserById);
router.put("/:id", authentication, roleAuthorization('Admin'), userController.updateUser);


module.exports = router;
