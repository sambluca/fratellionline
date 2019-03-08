import React from "react";
import Title from "../title";
import OpeningPrices from "../opening-price";
import Address from "../address";
import Phone from "../phone";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 53.588885, lng: -2.462204 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 53.588885, lng: -2.462204 }} />
      )}
    </GoogleMap>
  ))

  //   53.588885,-2.462204,15
);

const ContactUs = props => {
  return (
    <div>
      <Title title="Contact Us" phoneOff />
      <div className="fo-page-grid-layout">
        <Phone />
        <Address />
      </div>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <OpeningPrices />
    </div>
  );
};
ContactUs.displayName = "ContactUs";

export default ContactUs;
