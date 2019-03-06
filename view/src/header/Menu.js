import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/Menu.css";

const Menu = props => {
  return (
    <div className={`fo-menu ${props.open ? 'fo-menu__open' : ''}`}>
      <Link className="fo-menu-link" to="/" onClick={props.onClick}>HOME</Link>
      <Link className="fo-menu-link" to="/about-us/" onClick={props.onClick}>ABOUT US</Link>
      <Link className="fo-menu-link" to="/products/" onClick={props.onClick}>PRODUCTS</Link>
      <Link className="fo-menu-link" to="/american-crew-gift-sets/" onClick={props.onClick}>AMERICAN CREW GIFT SETS</Link>
      <Link className="fo-menu-link" to="/contact-us/" onClick={props.onClick}>CONTACT US</Link>
    </div>
  );
};
Menu.displayName = "Menu";

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
