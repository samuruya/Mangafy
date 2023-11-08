const express = require("express");
let router = express.Router()
const passport = require("passport")
const {loginUser, registerUser} = require("./tools/controller/userController")


router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;