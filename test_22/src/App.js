import "./App.css";
import React from "react";
import ShopItemFunc from "./components/ShopItemFunc";
import ShopItemClass from "./components/ShopItemClass";

function App() {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };
  return (
    <div className="container">
      <ShopItemFunc item={item} />
      <ShopItemClass item={item} />
    </div>
  );
}

export default App;
