import React from "react";
import PropTypes from "prop-types";
import "./css/HamburgerButton.css";

const HamburgerButton = props => {
  const Button = props.clicked ? (
    <div className="fo-close-menu-button qa-close-menu">X</div>
  ) : (
    <span className="qa-hamburger">
      <div className='fo-hamburger' />
      <div className='fo-hamburger' />
      <div className='fo-hamburger' />
    </span>
  );
  return <button className="fo-menu-button" onClick={props.onClick}>{Button}</button>;
};
HamburgerButton.displayName = "Button";

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool
};

HamburgerButton.defaultProps = {
  clicked: false
};

export default HamburgerButton;
