import React from "react";
import PropTypes from "prop-types";
import "./css/infobox.css";

const Paragraphs = paragraphs =>
  paragraphs.map(paragraph => <p className="fo-info-box_text">{paragraph}</p>);

const BulletPoint = bulletPoints =>
  bulletPoints !== null ? (
    <ul className="fo-info-box_bullet-list">
      {bulletPoints.map(point => (
        <li className="fo-info-box_bullet-point">{point}</li>
      ))}
    </ul>
  ) : (
    <span />
  );

const InfoBox = props => {
  return (
    <div className="fo-info-box_wrapper">
      <h5 className="fo-info-box_title">{props.title.toUpperCase()}...</h5>
      {Paragraphs(props.text)}
      {BulletPoint(props.bulletPoints)}
    </div>
  );
};
InfoBox.displayName = "InfoBox";

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  bulletPoints: PropTypes.array
};

InfoBox.defaultProps = {
  bulletPoints: null
};
export default InfoBox;
