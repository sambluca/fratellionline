import React, { Component } from "react";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";
import "./css/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <span className="fo-header-container">
        <div className="fo-header">
          <HamburgerButton
            clicked={this.state.menuOpen}
            onClick={this.openMenu}
          />
          <div className="fo-h1-wrapper">
            <h1 className="fo-h1">Fratelli Men's Hairdressing</h1>
          </div>
        </div>
        <Menu open={this.state.menuOpen} onClick={this.openMenu} />
      </span>
    );
  }
}

export default Header;
