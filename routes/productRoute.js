const express = require("express");
const router = express.Router();

const {
  viewProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/view", viewProducts);
router.post("/new", addProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
