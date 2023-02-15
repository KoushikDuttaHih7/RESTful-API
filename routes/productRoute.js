const express = require("express");
const router = express.Router();

const {
  viewProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/product/view", viewProducts);
router.post("/product/new", addProduct);
router.put("/product/update/:id", updateProduct);
router.delete("/product/delete/:id", deleteProduct);

module.exports = router;
