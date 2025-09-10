import Checkout from "../Checkout/Checkout";

const Home = () => {
  const checkoutData = [
    { name: "mern starck mentorship", price: 20, amount: 300, quantity: 2 },
  ];
  return (
    <div>
      <Checkout checkoutData={checkoutData} />
    </div>
  );
};

export default Home;
