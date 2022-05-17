import React from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <p>{props.title}</p>
      <p>${props.price}</p>
      <p>{props.quantity}</p>
      <div className="buttons-container">
        <IoRemove className="remove-button" />
        <IoAdd className="add-button" />
      </div>
    </div>
  );
};

export default CartItem;
