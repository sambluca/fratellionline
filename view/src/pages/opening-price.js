import React from "react";
import OpeningTimes from "./opening-times";
import Prices from "./prices";
import "./css/opening-price.css";

const OpeningPrice = props => {
  return (
    <div className="fo-page-grid-layout fo-opening-price">
      <div className="fo-opening-price-box">
        <OpeningTimes />
      </div>
      <div className="fo-opening-price-box">
        <Prices />
      </div>
    </div>
  );
};
OpeningPrice.displayName = "OpeningPrice";

export default OpeningPrice;
