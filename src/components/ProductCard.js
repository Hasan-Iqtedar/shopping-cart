import React from "react";

const ProductCard = (props) => {
  const { data } = props;

  return (
    <div className="product">
      <img src={data.image} alt={data.title} />
      <div>
        <span id="title">{data.title}</span>
        <span id="price">price: {data.price}</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
