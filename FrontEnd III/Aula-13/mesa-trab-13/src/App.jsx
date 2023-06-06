import React, { useState, useEffect } from "react";

const App = () => {
  const [order, setOrder] = useState("");
  const snacks = ['Pizza', 'Hamburguer', 'Pasta', 'Lasagna'];

  useEffect(() => {
    setTimeout(() => {
      setOrder(snacks[Math.floor(Math.random() * snacks.length)]);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("Component updated");
  });

  const cancelOrder = () => {
    setOrder("");
    alert("The order has been cancelled.");
    resetOrder();
  };

  const resetOrder = () => {
    setTimeout(() => {
      setOrder(snacks[Math.floor(Math.random() * snacks.length)]);
    }, 2000);
  };

  return (
    <div>
      <h1>Your order is: {order}</h1>
      <button onClick={cancelOrder}>Cancel Order</button>
    </div>
  );
};

export default App;
