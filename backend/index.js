// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config(); //config variable

const PORT = process.env.PORT || 4000; //extracting from process.env root

app.get("/", (req, res) => {
  res.send("Bookstore Home App");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
