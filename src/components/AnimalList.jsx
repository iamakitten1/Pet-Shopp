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
          'Authorization': 'Apfi93S9KlnsK0M8Yoac77sjpSdNUnytK6wNLLz2-2prWnVtRA', // Replace with your actual API key
        }
      });
      const data = await response.json();

      // Log the data to inspect its format
      console.log(data); // Check if this is an array or object

      // Fix: If data is an object, access the correct property containing the array
      if (Array.isArray(data)) {
        setAnimals(data); // If data is already an array
      } else if (data && Array.isArray(data.animals)) {
        setAnimals(data.animals); // Adjust based on the actual API response
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch animals:", error);
    }
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Available Animals</h2>
      {Array.isArray(animals) && animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal.id}>{animal.name}</li>
          ))}
        </ul>
      ) : (
        <p>No animals available</p>
      )}
    </div>
  );
}
