import React from "react";
import "./css/address.css";

const Address = props => {
  return (
    <div className="fo-address_wrapper">
      <h5 className="fo-address-title">Address</h5>
      <span className="fo-address-line">Fratelli Men's Hairdressing</span>
      <span className="fo-address-line">542 Chorley Old Road</span>
      <span className="fo-address-line">Bolton, Greater Manchester</span>
      <span className="fo-address-line">BL1 6AB</span>
    </div>
  );
};
Address.displayName = "Address";

export default Address;
