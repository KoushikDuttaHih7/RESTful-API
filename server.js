const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes/productRoute"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
