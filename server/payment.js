const stripe = require("stripe")(process.env.STRIPE_API_SECRET);

const processPayment = async (data) => {
  const clientUrl = process.env.CLIENT_URL;
  const line_items = data.map((item) => ({
    price_data: {
      currency: "gbp",
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${clientUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}/cancel`,
    });
    return { url: session.url };
  } catch (error) {
    throw error;
  }
};

module.exports = { processPayment };
