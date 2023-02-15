const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/productController");

router.post("/product/new", addProduct);

module.exports = router;
