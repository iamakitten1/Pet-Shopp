
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export function AnimalDetails({ animal }) {
  const dispatch = useDispatch();

  const handleBuyNow = () => {
    dispatch(addToCart(animal));
  };

  return (
    <div className="container my-5">
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <button onClick={handleBuyNow} className="btn btn-success">Buy Now</button>
    </div>
  );
}
