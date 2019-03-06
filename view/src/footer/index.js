import React from "react";
import Phone from "../pages/phone";
import Address from "../pages/address";
import "./css/footer.css";

const Footer = props => {
  return (
    <div className="fo-footer_wrapper">
      <div className="fo-footer-social">
        <h5 className="fo-footer-social-header">
          Keep in touch with Fratelli Men's Hairdressing on Facebook & Twitter!
        </h5>
        <a
          className="fo-footer-social-link"
          href="https://www.facebook.com/fratellisbolton/"
        >
          <i className="fab fa-facebook fa-2x fo-footer-facebook" />
        </a>
        <a
          className="fo-footer-social-link"
          href="https://www.facebook.com/fratellisbolton/"
        >
          <i class="fab fa-twitter fa-2x" />
        </a>
      </div>
      <div className="fo-footer">
        <h2 className="fo-footer-title">Fratelli Men's Hairdressing</h2>
        <div className="fo-footer-info">
          <hr className="fo-footer-divider" />
          <div>
            <h5 className="fo-footer-contact-us">Contact Us</h5>
            <Phone />
          </div>
          <hr className="fo-footer-divider" />
          <div>
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};
Footer.displayName = "Footer";

export default Footer;
