import React from "react";
import PropTypes from "prop-types";
import InfoBox from "./info-box";
import "./css/opening-times.css";

const OpeningTimes = props => {
  return (
    <div className="fo-opening-times-wrapper">
      <h2 className="fo-opening-time-title">Opening Times</h2>
      <InfoBox title="Monday - 9.00am to 5.30pm" text={["Lee & New Guy."]} />
      <InfoBox title="Tuesday - 9.00am to 5.30pm" text={["Anthony & Lee."]} />
      <InfoBox
        title="Wednesday - 9.00am to 5.30pm"
        text={["Anthony & New Guy."]}
      />
      <InfoBox
        title="Thursday - 9.00am to 5.30pm"
        text={["Anthony, Lee & Kelly."]}
      />
      <InfoBox
        title="Friday - 9.00am to 5.30pm"
        text={["Anthony, Lee & Kelly."]}
      />
      <InfoBox
        title="Saturday - 9.00am to 3.00pm"
        text={["Anthony, Lee & Kelly."]}
      />
    </div>
  );
};
OpeningTimes.displayName = "OpeningTimes";

export default OpeningTimes;
