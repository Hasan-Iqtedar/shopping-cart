import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <Cart />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
