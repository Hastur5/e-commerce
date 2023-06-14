const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name & !email & !password) {
    res.status(400);
    throw new Error("Favor de verificar que esten todos los datos");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Ese email ya fue registrado, el usuario ya existe");
  }

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //* Mandamos la respuesta de la funcion
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("No se pudo crear el usuario, los datos son incorrectos");
  }
});



module.exports = {
  registerUser,
};
