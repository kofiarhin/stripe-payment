const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const cors = require("cors");

// setupt middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.json({ message: "welcome to stripe payment" });
});

app.post("/api/checkout", async (req, res, next) => {
  return res.json({ message: "this is a testing message" });
});

module.exports = app;
