
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";

export function AnimalDetails() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAnimal() {
      const url = `https://crudapi.co.uk/api/v1/animals/${id}`;
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
          },
        });
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error("Failed to fetch animal:", error);
      }
    }
    fetchAnimal();
  }, [id]);

  const handleBuyNow = () => {
    if (animal) {
      dispatch(addToCart(animal));
    }
  };

  if (!animal) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <button onClick={handleBuyNow} className="btn btn-success">Buy Now</button>
    </div>
  );
}

