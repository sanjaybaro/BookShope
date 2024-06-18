// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionURI } from "./config/db.js";
import bookRoute from "./routes/book.route.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config(); //config variable

const PORT = process.env.PORT || 4000; //extracting from process.env root

app.get("/", (req, res) => {
  res.send("Bookstore Home App");
});

//defining routes
app.use("/book", bookRoute);

app.listen(PORT, async () => {
  try {
    await connectionURI;
    console.log("Connected to the DB");
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the DB", error);
  }
});
