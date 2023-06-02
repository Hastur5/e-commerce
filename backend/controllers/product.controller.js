const getProducts = (req, res) => {
  res.status(200).json({ mensaje: "Mostrar las tareas" });
};
const setProducts = (req, res) => {
  res.status(200).json({ mensaje: "set" });
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
  deleteProducts
};
