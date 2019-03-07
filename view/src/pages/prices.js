import React from "react";
import InfoBox from "./info-box";
import "./css/prices.css";

const Prices = props => {
  return (
    <div className="fo-prices-wrapper">
      <h2 className="fo-prices-title">Prices</h2>
      <InfoBox
        title="Haircut with Complimentary Shampoo - $14.50"
        text={[
          "Hair and scalp is cleansed using the finest shampoos from American Crew and then cut to precision. Finally finished using an American Crew product appropriate to your style and hair type."
        ]}
      />
      <InfoBox title="Small Boys Trim - £10.00" text={["Haircut for boys"]} />
      <InfoBox title="Beard Trim with Haircut - £3.50" text={[""]} />
      <InfoBox
        title="Appointment for Beard Trim Only - £7.50"
        text={["Your beard trimmed and shaped to suit."]}
      />
      <InfoBox
        title="Post Cut Rinse - £1.00"
        text={[
          "Going back to work? Ask for a Post Cut rinse to cleanse all the little off-cuts from your scalp. We will give you a further shampoo or a conditioner at your request."
        ]}
      />
    </div>
  );
};
Prices.displayName = "Prices";

export default Prices;
