import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./components/Categories"
import { Animals } from "./components/Animals"



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/animals" element={<Animals/>} />
          
          </Routes>
        <Footer />
      </ BrowserRouter >
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






