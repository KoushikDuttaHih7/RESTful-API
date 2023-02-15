const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT;
const productRoute = require("./routes/productRoute");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/product", productRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
