import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import App from "./App";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <NavigationBar />
    <GlobalProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cart />
              <App />
            </>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <>
              <Cart />
              <Products />
            </>
          }
        ></Route>
      </Routes>
    </GlobalProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
