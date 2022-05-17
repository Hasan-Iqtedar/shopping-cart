import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const { products } = useContext(GlobalContext);

  if (props.isLoading) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="products-container">
        {products.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    );
  }
};

export default Products;
