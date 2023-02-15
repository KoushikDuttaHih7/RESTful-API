const express = require("express");
const router = express.Router();

const {
  viewProducts,
  addProduct,
} = require("../controllers/productController");

router.get("/product/view", viewProducts);
router.post("/product/new", addProduct);

module.exports = router;
