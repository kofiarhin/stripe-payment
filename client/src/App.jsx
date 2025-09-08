import { useEffect } from "react";
import { BASE_URL } from "./constants/constants";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(BASE_URL);
      console.log(BASE_URL);
      console.log(res.ok);
    };

    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/api/checkout`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: "test product", amount: 20 }),
    });

    if (!res.ok) {
      console.log("ërror");
    }
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <h1 className="heading center">Hello World</h1>
      <form onSubmit={handleSubmit}>
        <button>Make Payment</button>
      </form>
    </div>
  );
};

export default App;
