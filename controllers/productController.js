const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ success: true, product });
};

const viewProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ success: true, products });
};

const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.json({ success: false, message: "No product found" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ success: true, product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.json({ success: false, message: "No product found" });
  }

  await product.remove();
  res.json({ success: true, message: "Product is deleted" });
};

module.exports = {
  viewProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
