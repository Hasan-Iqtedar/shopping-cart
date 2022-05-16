import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [products, setProducts] = useState([{title: 'shirt'}]);

  useEffect(() => {
    const cartBackground = document.getElementById("cart-background");
    const cart = document.getElementById("cart");

    const closeCart = () => {
      cartBackground.style.width = "0px";
      cart.style.width = "0px";
    };

    cartBackground.addEventListener("click", closeCart);

    return () => cartBackground.removeEventListener("click", closeCart);
  }, []);

  return (
    <div className="cart-container">
      <div id="cart">
        Cart
        {products.map((product) => {
          return <CartItem title={product.title} />;
        })}
      </div>
      <div id="cart-background"></div>
    </div>
  );
};

export default Cart;
