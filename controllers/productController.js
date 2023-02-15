const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.statusCode(200).json({ success: true, product });
};

module.exports = addProduct;
