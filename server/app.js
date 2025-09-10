const dotenv = require("dotenv").config();
const express = require("express");
const { processPayment } = require("./payment");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const cors = require("cors");

// setupt middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.json({ message: "welcome to stripe payment" });
});

app.post("/api/checkout", async (req, res, next) => {
  const { items } = req.body;
  // const data = [{ name: "Test Product", price: 10, quantity: 1 }];
  const result = await processPayment(items);
  return res.json({ ...result });
});

module.exports = app;
