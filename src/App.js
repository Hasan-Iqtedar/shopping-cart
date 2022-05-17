import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  const { initializeState } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter((element) =>
          element.category.includes("clothing")
        );
        initializeState(items);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products isLoading={loading} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
