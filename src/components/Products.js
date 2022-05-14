import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(
          json.filter((element) => element.category.includes("clothing"))
        );
        setLoading(false);
      });
  }, []);

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
