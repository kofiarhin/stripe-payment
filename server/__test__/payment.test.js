const { processPayment } = require("../payment.js");

test("processPayment returns a URL", async () => {
  const data = [{ name: "Test Product", price: 10, quantity: 1 }];
  const result = await processPayment(data);
  console.log({ url: result?.url });
  expect(result).toHaveProperty("url");
  expect(result.url).toMatch(/^http/);
});
