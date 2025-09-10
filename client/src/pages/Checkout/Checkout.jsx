import { useState } from "react";
import { BASE_URL } from "../../constants/constants";

const Checkout = ({ checkoutData = [] }) => {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/api/checkout`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        items: checkoutData,
      }),
    });

    if (!res.ok) {
      console.log("error");
      return;
    }

    const data = await res.json();
    console.log(data);

    // update state with session url
    setCheckoutUrl(data.url);

    // immediately redirect to Stripe Checkout
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div>
      <h1 className="heading center">Stripe Payment</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Proceed to checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
