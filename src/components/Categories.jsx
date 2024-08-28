import React, { useState, useEffect } from "react";

// Main Categories Component
export function Categories() {
  const [content, setContent] = useState(<CategoriesList showForm={showForm} />);

  function showList() {
    setContent(<CategoriesList showForm={showForm} />);
  }

  function showForm() {
    setContent(<CategoriesForm showList={showList} />);
  }

  return (
    <div className="container my-5">
      {content}
    </div>
  );
}

// List Component for Categories
function CategoriesList({ showForm }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const url = "http://localhost:3000/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error("Failed to fetch categories:", error.message);
    }
  }

  return (
    <>
      <h2 className="text-center mb-3">List of Categories</h2>
      <button onClick={showForm} type="button" className="btn btn-primary me-2">Create</button>
      {categories.length === 0 ? (
        <p>No categories available</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

// Form Component for Adding New Categories
function CategoriesForm({ showList }) {
  return (
    <>
      <h2 className="text-center mb-3">Create New Categories</h2>
      <button onClick={showList} type="button" className="btn btn-secondary me-2">Cancel</button>
    </>
  );
}
