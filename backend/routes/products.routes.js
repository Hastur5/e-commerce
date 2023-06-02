const express = require("express");
const router = express.Router();
const {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");

router.route("/").get(getProducts).post(setProducts);
router.route("/:id").put(updateProducts).delete(deleteProducts);

module.exports = router;
