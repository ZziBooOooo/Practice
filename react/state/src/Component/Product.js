import React from "react";
import "../scss/product.scss";
import { Link } from "react-router-dom";

const product = () => {
  return (
    <div className="ProductBox">
      <p className="left_p">
        <img src="./img/back07.png" alt-text="text1"></img>
        <p>ADIDAS STAN SMITH</p>
        <p>$160</p>
      </p>
      <p className="right_p">
        <img src="./img/back08.png" alt-text="text2"></img>
        <p>ADIDAS STAN SMITH</p>
        <p>$160</p>
      </p>
    </div>
  );
};
export default product;
