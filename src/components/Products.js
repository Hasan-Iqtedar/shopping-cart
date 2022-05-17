import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const { addItems, products } = useContext(GlobalContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
    console.log("update...");
  }, [products]);

  if (props.isLoading) {
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
