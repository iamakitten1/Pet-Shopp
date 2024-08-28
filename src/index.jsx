// client-frontend/src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AnimalList } from "./components/AnimalList";
import { AnimalDetails } from "./components/AnimalDetails";
import { Cart } from "./components/Cart";
// import { Wishlist } from "./components/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<AnimalList />} />
        <Route path="/animals/:id" element={<AnimalDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
