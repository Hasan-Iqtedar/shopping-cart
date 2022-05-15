import { useEffect } from "react";

const Cart = (props) => {
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
      <div id="cart">Cart</div>
      <div id="cart-background"></div>
    </div>
  );
};

export default Cart;
