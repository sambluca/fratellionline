import React from "react";
import Phone from "./phone";
import PropTypes from "prop-types";
import "./css/title.css";

const Title = props => {
  return (
    <div className="fo-title-wrapper">
      <h1 className="fo-title">{props.title}</h1>
      <Phone />
    </div>
  );
};
Title.displayName = "Title";

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
