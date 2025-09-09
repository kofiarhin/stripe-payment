const stripe = require("stripe");

const processPayment = async (data) => {
  const apiKey = process.env.STRIPE_API_SECRET;
  console.log({ apiKey });
  return { message: "this is going to process payment" };
};

module.exports = { processPayment };
