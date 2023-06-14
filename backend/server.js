const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server iniciando en el puerto ${port}`));
