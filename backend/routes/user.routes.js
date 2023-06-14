const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMyData,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/mydata", getMyData);

module.exports = router;
