const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");

router.route("/").get(protect, getProducts).post(protect, setProducts);
router.route("/:id").put(protect, updateProducts).delete(protect, deleteProducts);

module.exports = router;
