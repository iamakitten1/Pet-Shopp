
import React, { useEffect, useState } from "react";

export function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  async function fetchAnimals() {
    const url = "https://crudapi.co.uk/api/v1/animals";
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY', // Replace with your actual API key
        }
      });
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("Failed to fetch animals:", error);
    }
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Available Animals</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}
