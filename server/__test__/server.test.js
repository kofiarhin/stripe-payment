const app = require("../app");
const request = require("supertest");
const { processPayment } = require("../payment");

describe("testing server", () => {
  it("just a passing test", async () => {
    const { statusCode, body } = await request(app).get("/");
  });

  it("should test for checkout session", async () => {
    const { statusCode, body } = await request(app)
      .post("/api/checkout")
      .send({ message: "some pricing details" });
  });

  it("should return checkout url successfully", async () => {
    const productData = {
      name: "product name",
      price: 20,
      quantity: 1,
    };
    const result = await processPayment([{ ...productData }]);
  });
});
