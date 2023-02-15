const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ success: true, product });
};

const viewProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ success: true, products });
};

module.exports = {
  viewProducts,
  addProduct,
};
