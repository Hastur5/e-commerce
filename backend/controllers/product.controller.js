const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ mensaje: "Mostrar las tareas" });
  console.log(req.body);
});
const setProducts = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.name) {
    res.status(400);
    throw new Error("Favor de teclear la descripcion del producto ");
  }
  // res.status(201).json({mensaje: 'Crear un Producto'})
  const product = await Product.create({
    name: req.body.name,
  });
  res.status(201).json(product);
});
const updateProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ mensaje: "up" });
});
const deleteProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ mensaje: "dele" });
});

module.exports = {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
};
