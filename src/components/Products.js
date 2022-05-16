import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const { initializeState, addItems, products } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter((element) =>
          element.category.includes("clothing")
        );
        console.log(items);
        initializeState(items);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setData(products);
    console.log("update...");
  }, [products]);

  if (loading) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="products-container">
        {data.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    );
  }
};

export default Products;
