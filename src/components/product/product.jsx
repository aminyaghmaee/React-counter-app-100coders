import React from "react";
import "./product.css";

const Product = ({ name, count, setCount }) => {
  const handleIncrement = () => {
    if (count === "Zero") {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count === 1) {
      setCount("Zero");
    }
  };

  return (
    <div className="product__container">
      <span className="product__name">{name}</span>
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
      <span className="product__count">{count}</span>
    </div>
  );
};

export default Product;
