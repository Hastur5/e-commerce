const getProducts = (req, res) => {
  res.status(200).json({ mensaje: "Mostrar las tareas" });
  console.log(req.body);
};
const setProducts = (req, res) => {
  console.log(req.body);
  if (!req.body.nombre) {
    res
      .status(400)
      .json({ mensaje: "Favor de teclear la descripcion del producto" });
    res.status;
    res.status(201).json({ mensaje: "Crear un Producto" })(400);
    throw new Error("Favor de teclear la descripcion del producto ");
  }
};
const updateProducts = (req, res) => {
  res.status(200).json({ mensaje: "up" });
};
const deleteProducts = (req, res) => {
  res.status(200).json({ mensaje: "dele" });
};

module.exports = {
  getProducts,
  setProducts,
  updateProducts,
  deleteProducts,
};
