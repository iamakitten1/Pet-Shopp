

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AnimalList } from "./components/AnimalList";
import { AnimalDetails } from "./components/AnimalDetails";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { Categories } from "./components/Categories";
const root =ReactDOM.createRoot(document.getElementById("root"));

 
 root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/animals" element={<AnimalList />} />
    <Route path="/animals/:id" element={<AnimalDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/categories" element={<Categories />} />
    
  </Routes>
  <Footer />
</BrowserRouter>
 );
   
  
  


// export default App;
