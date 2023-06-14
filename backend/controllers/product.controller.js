const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});
const setProducts = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.name || !req.body.price) {
    res.status(400);
    throw new Error("Favor de teclear la descripcion del producto ");
  }
  // res.status(201).json({mensaje: 'Crear un Producto'})
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
  });
  res.status(201).json(product);
});
const updateProducts = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Producto no encontrado");
  }

  const productModify = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(productModify);
});
const deleteProducts = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Producto no encontrado");
  }

  await Product.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
};
