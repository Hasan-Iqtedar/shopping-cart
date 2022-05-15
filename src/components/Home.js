import React from "react";
import homeImage from "./../assets/home.png";
import "./../styles/main.css";

const Home = (props) => {
  return (
    <div id="home">
      <h1>
        Welcome to the <br></br> Store
      </h1>
      <img src={homeImage} alt="shop img" />
      {/* <div className="cart"></div> */}
    </div>
  );
};

export default Home;
