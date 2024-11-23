const express = require('express')
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../Controllers/UserController");
const authenticate = require("../Controllers/authentication");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticate, getUserProfile);


module.exports = router;