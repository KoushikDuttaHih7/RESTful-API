const express = require("express");
const router = express.Router();

const {
  viewProducts,
  addProduct,
  updateProduct,
} = require("../controllers/productController");

router.get("/product/view", viewProducts);
router.post("/product/new", addProduct);
router.put("/product/update/:id", updateProduct);

module.exports = router;
