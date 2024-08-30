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
 //fetchProducts
  useEffect(() => fetchCategories(), []);
  return (
    <>
      <h2 className="text-center mb-3">List of Categories</h2>
      <button onClick={showForm} type="button" className="btn btn-primary me-2">Create</button>
      <table className="table">
         <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Is Popular</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {categories.map((categories, index) =>{
                return (
                    <tr key={index}>
                    <td>{categories.name}</td>
                    <td>{categories.price}</td>
                    <td>{categories.description}</td>
                    <td>{categories.isPopula}</td>
                    <td>{categories.stock}</td>
                    <td>{categories.id}</td>
                    <td>{categories.category}</td>

                    <td style={{width: "10px", whiteSpace: "nowrap"}}>
                        <button type="button" className="'btn btn-primary btn-sm me-2">  Edit   </button>
                        <button type="button" className="'btn btn-danger btn-sm me-2"> Delete </button>  

                    </td>
                    </tr>

                );

            })
            }
         </tbody>

      </table>
      {/* {categories.length === 0 ? (
        <p>No categories available</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
        
      )} */}
    </>
  );
}

// Form Component for Adding New Categories
function CategoriesForm({ showList }) {
  return (
    <>
      <h2 className="text-center mb-3">Create New Categories</h2>
      <button onClick={showList} type="button" className="btn btn-secondary me-2">Cancel</button>

      <div className="row">
        <div className="col-lg-6 mx-auto"> 

          <form>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Name</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="name"
                defaultValue=""/>
              </div>
              </div> 

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Price</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="price"
                defaultValue=""/>
              </div>
              </div>

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Description</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="description"
                defaultValue=""/>
              </div>
              </div> 

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Is Popular</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="isPopular"
                defaultValue=""/>
              </div>
              </div>

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Stock</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="stock"
                defaultValue=""/>
              </div>
              </div> 

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Id</label>
              <div className="col-sm-8"> 
                <input className="form-control" 
                name="id"
                defaultValue=""/>
              </div>
              </div> 

              <div className="row mb-3">
              <label className="col-sm-4 col-form-label"> Category</label>
              <div className="col-sm-8"> 
                <select className="form-control" 
                name="category"
                defaultValue="">
                  <option value="other"> Other</option>
                  <option value="Reptile"> Reptile</option>
                  <option value="Rabbit"> Rabbit</option>
                  <option value="Cat"> Cat</option>
                   </select>
              </div>
              </div>   
            </form> 
        </div>
      </div>
    </>
  );
}
