import React from "react";
import "./css/phone.css";

const Phone = props => {
  return (
    <div className="fo-phone_wrapper">
      <span className="fo-phone fo-phone_number_wrapper">
        <span role="img" aria-label="Phone Number">
          📞
        </span>
        :{" "}
        <a href="tel:01204497788" className="fo-phone_number">
          01204 497788
        </a>
      </span>
      <span className="fo-phone fo-phone_note">
        Call for a hair appointment, we are open 6 days a week
      </span>
    </div>
  );
};
Phone.displayName = "Phone";

export default Phone;
