import React from "react";
import {IoCartOutline} from 'react-icons/io5';
import NavigationItemsContainer from "./NavigationItemsContainer";
import NavigationItem from "./NavigationItem";
import "./../styles/main.css";

const NavigationBar = (props) => {
  return (
    <div id="navigation-bar">
      <h1 className="title">Store</h1>
      <NavigationItemsContainer>
        <NavigationItem path="/" title="Home" />
        <NavigationItem path="/products" title="Products" />
        <IoCartOutline className="cart-icon"/>
      </NavigationItemsContainer>
    </div>
  );
};

export default NavigationBar;
