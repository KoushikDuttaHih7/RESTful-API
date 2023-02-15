const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes/productRoute"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
